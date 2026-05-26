import React, { useEffect, useRef, useState } from "react";
import config from "../../config";
import "./ContactForm.css";

function loadHcaptchaScript() {
  return new Promise((resolve, reject) => {
    if (window.hcaptcha) {
      resolve();
      return;
    }

    const existing = document.querySelector('script[src*="hcaptcha.com"]');
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://js.hcaptcha.com/1/api.js?render=explicit&recaptchacompat=off";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function ContactForm({ theme, formSection }) {
  const [result, setResult] = useState("");
  const formRef = useRef(null);
  const captchaRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const mountCaptcha = async () => {
      if (!config.hcaptchaSiteKey || !captchaRef.current) {
        return;
      }

      try {
        await loadHcaptchaScript();
        if (cancelled || !captchaRef.current || widgetIdRef.current !== null) {
          return;
        }

        widgetIdRef.current = window.hcaptcha.render(captchaRef.current, {
          sitekey: config.hcaptchaSiteKey,
        });
      } catch {
        if (!cancelled) {
          setResult(
            "Could not load captcha. Check your network or hCaptcha site key."
          );
        }
      }
    };

    mountCaptcha();

    return () => {
      cancelled = true;
    };
  }, []);

  const resetCaptcha = () => {
    if (window.hcaptcha && widgetIdRef.current !== null) {
      window.hcaptcha.reset(widgetIdRef.current);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) {
      return;
    }

    if (!config.web3formsAccessKey) {
      setResult(
        "Contact form is not configured. Add REACT_APP_WEB3FORMS_ACCESS_KEY to your .env file."
      );
      return;
    }

    const captchaField = form.querySelector(
      'textarea[name="h-captcha-response"]'
    );
    const captchaToken = captchaField ? captchaField.value : "";

    if (!captchaToken) {
      setResult("Please complete the captcha.");
      return;
    }

    setResult("Sending....");

    const payload = {
      access_key: config.web3formsAccessKey,
      subject: formSection.formSubject,
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      "h-captcha-response": captchaToken,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.message || "Message sent successfully.");
        form.reset();
        resetCaptcha();
      } else {
        setResult(
          data.message ||
            "Submission failed. In Web3Forms dashboard, enable hCaptcha under spam protection for this form."
        );
      }
    } catch {
      setResult("Network error. Please check your connection and try again.");
    }
  };

  const inputStyle = {
    color: theme.text,
    borderColor: theme.highlight,
    backgroundColor: theme.body,
  };

  return (
    <section className="contact-form-section" id="contact-form">
      <p
        className="contact-form-eyebrow subTitle"
        style={{ color: theme.secondaryText }}
      >
        {formSection.eyebrow}
      </p>
      <h2 className="contact-form-title" style={{ color: theme.text }}>
        {formSection.title}
      </h2>
      <p
        className="contact-form-description subTitle"
        style={{ color: theme.secondaryText }}
      >
        {formSection.description}
      </p>

      <form ref={formRef} className="contact-form" onSubmit={onSubmit}>
        <div className="contact-form-row">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="contact-form-input"
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="contact-form-input"
            style={inputStyle}
            required
          />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          className="contact-form-textarea"
          style={inputStyle}
          required
        />

        <div ref={captchaRef} className="contact-form-captcha" />

        <button
          type="submit"
          className="contact-form-submit"
          style={{
            color: theme.body,
            backgroundColor: theme.text,
            border: `solid 1px ${theme.text}`,
          }}
        >
          {formSection.submitLabel}
          <span className="contact-form-submit-arrow" aria-hidden="true">
            →
          </span>
        </button>

        {result ? (
          <p className="contact-form-result" style={{ color: theme.text }}>
            {result}
          </p>
        ) : null}
      </form>
    </section>
  );
}
