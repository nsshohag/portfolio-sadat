/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sadat's Portfolio",
  description:
    "Nazmus Sadat Shohag — Software Engineer I on the Site Reliability Engineering team at Pathao. GCP-focused DevOps: monitoring, provisioning, incident response, and production support.",
  og: {
    title: "Sadat's Portfolio",
    type: "website",
    url: "https://nsshohag.xyz",
  },
};

//Home Page
const greeting = {
  title: "Nazmus Sadat Shohag",
  logo_name: "Nazmus Sadat Shohag",
  nickname: "Software Engineer I · SRE @",
  subTitle:
    "I work on the Site Reliability Engineering team at Pathao, managing Pathao's infrastructure, monitoring, alerting, incident troubleshooting, provisioning, access management and DevOps operations.",
  resumeLink:
    "https://drive.google.com/file/d/1-d5xJcI0s886ARTVZtNyqFbsBmbqdLEW/view?usp=sharing",
  portfolio_repository: "https://github.com/nsshohag/portfolio-sadat",
  githubProfile: "https://github.com/nsshohag",
  company: {
    name: "Pathao",
    icon: "arcticons:pathao",
    url: "https://pathao.com",
  },
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/nsshohag",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "GitLab",
    link: "https://gitlab.com/nsshohag",
    fontAwesomeIcon: "fa-gitlab",
    backgroundColor: "#FC6D26",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nazmus-sadat-shohag-492bba291/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:nsshohag2011@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sadat_shohag",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Yarn",
    //       fontAwesomeClassname: "simple-icons:yarn",
    //       style: {
    //         color: "#2C8EBB",
    //       },
    //     },
    //     {
    //       skillName: "Gatsby",
    //       fontAwesomeClassname: "simple-icons:gatsby",
    //       style: {
    //         color: "#663399",
    //       },
    //     },
    //     {
    //       skillName: "Flutter",
    //       fontAwesomeClassname: "simple-icons:flutter",
    //       style: {
    //         color: "#02569B",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Cloud & SRE",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Managing and supporting Pathao’s production infrastructure, including monitoring, troubleshooting, deployments, and day-to-day platform operations.",
        "⚡ Building and improving observability, alerting, logging, dashboards, automation, and incident response workflows for production systems.",
        "⚡ Supporting internal engineering teams with infrastructure automation, access management, networking, CI/CD, internal services, and ad-hoc platform operations.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: { color: "#00ADD8" },
        },
        {
          skillName: "Traefik",
          fontAwesomeClassname: "simple-icons:traefikproxy",
          style: { color: "#24a1c1" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: { color: "#DC382D" },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: { color: "#FF6600" },
        },
        {
          skillName: "Kong",
          fontAwesomeClassname: "simple-icons:kong",
          style: { color: "#003459" },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: { color: "#F46800" },
        },
        {
          skillName: "Netbird",
          fontAwesomeClassname: "simple-icons:wireguard",
          style: { color: "#88171A" },
        },
        {
          skillName: "Vault",
          fontAwesomeClassname: "simple-icons:vault",
          style: { color: "#FDE07D", backgroundColor: "#1D1D20" },
        },
        {
          skillName: "ArgoCD",
          fontAwesomeClassname: "simple-icons:argo",
          style: { color: "#EF7B4D" },
        },
        {
          skillName: "Thanos",
          fontAwesomeClassname: "simple-icons:thanos",
          style: { color: "#CA3214" },
        },
        {
          skillName: "Fluent Bit",
          fontAwesomeClassname: "simple-icons:fluentbit",
          style: { color: "#49BDA5" },
        },
        {
          skillName: "Loki",
          fontAwesomeClassname: "simple-icons:grafana",
          style: { color: "#A6E6FF", backgroundColor: "#0B3142" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/nsshohag2011/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/sadat2018331099",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/nazmussadatshohag",
    },
    {
      siteName: "uHunt",
      iconifyClassname: "ant-design:code-filled",
      style: {
        color: "#5D87BF",
      },
      profileLink: "https://uhunt.onlinejudge.org/id/1033380",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Shahjalal University of Science and Technology, Sylhet",
      subtitle: "BSc. in Computer Science and Engineering",
      logo_path: "sust_cropped.png",
      alt_name: "SUST",
      duration: "2019 - 2024",
      descriptions: [
        "⚡ I have studied core software engineering subjects like DS, Algorithms, DBMS, OS, Networking, Computer Architecture, AI etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have done projects on Machine Learning, Data Science, Android and Web Development.",
      ],
      website_link: "https://www.sust.edu/",
    },
    {
      title: "Ullapra Science College, Sirajganj",
      subtitle: "Higher Secondary Certificate",
      logo_path: "ullapara-science-college-logo-png.png",
      alt_name: "USC",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ I have studied core science subjects like Physics, Chemistry, Mathematics, Biology, etc.",
      ],
      website_link: "https://en.wikipedia.org/wiki/Ullapara_Science_College",
    },
    {
      title: "Border Guard Public School & College, Sylhet",
      subtitle: "Secondary School Certificate",
      logo_path: "bgpsc_logo.png",
      alt_name: "BGPSC",
      duration: "2014 - 2015",
      descriptions: [
        "⚡ I have studied core science subjects like Physics, Chemistry, Mathematics, Biology, etc.",
      ],
      website_link: "https://bgpscsylhet.edu.bd/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Intro to Machine Learning",
      subtitle: "- Kaggle",
      logo_path: "kaggle_Logo.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/nazmussadatshohag/intro-to-machine-learning",
      alt_name: "Intro to Machine Learning",
      color_code: "#8C151599",
    },
    {
      title: "Pandas",
      subtitle: "- Kaggle",
      logo_path: "kaggle_Logo.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/nazmussadatshohag/pandas",
      alt_name: "Pandas",
      color_code: "#00000099",
    },
    {
      title: "Intermediate Machine Learning",
      subtitle: "- Kaggle",
      logo_path: "kaggle_Logo.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/nazmussadatshohag/intermediate-machine-learning",
      alt_name: "Intermediate Machine Learning",
      color_code: "#0C9D5899",
    },
    {
      title: "Machine Learning Explainability",
      subtitle: "- Kaggle",
      logo_path: "kaggle_Logo.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/nazmussadatshohag/machine-learning-explainability",
      alt_name: "Machine Learning Explainability",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am a Software Engineer in SRE team at Pathao, working with large-scale production infrastructure on GCP and Kubernetes. My work includes infrastructure operations, monitoring, incident troubleshooting, CI/CD, deployments, and production support for engineering teams. Previously, I worked remotely as a part-time Data Analyst at Turl Street Group, building Python scripts for data validation and management. I am also interested in machine learning, backend systems, cloud infrastructure, automation, and scalable platforms.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer I (Site Reliability Engineering)",
          company: "Pathao Ltd.",
          company_url: "https://pathao.com/",
          logo_path: "pathao_logo.svg",
          duration: "Jan 2026 - Ongoing",
          location: "Dhaka, Bangladesh",
          description:
            "SRE on GCP: cluster and platform operations, monitoring and alerting, provisioning and access workflows, production incident response, and collaboration with backend, data, and platform teams. Supporting Kubernetes, internal tooling, and observability across the stack.",
          color: "#0E6BA8",
        },
        {
          title: "Associate Software Engineer (Site Reliability Engineering)",
          company: "Pathao Ltd.",
          company_url: "https://pathao.com/",
          logo_path: "pathao_logo.svg",
          duration: "May 2025 - Dec 2025",
          location: "Dhaka, Bangladesh",
          description:
            "SRE on GCP: cluster and platform operations, monitoring and alerting, provisioning and access workflows, production incident response, and collaboration with backend, data, and platform teams. Supporting Kubernetes, internal tooling, and observability across the stack.",
          color: "#0879bf",
        },
        {
          title: "Data Analyst",
          company: "Turl Street Group",
          company_url: "https://turlstreetgroup.com/",
          logo_path: "tsg.jpeg",
          duration: "Oct 2024 - Dec 2024",
          location: "8 The Green STE A Dover, DE 19901, USA",
          description:
            "I worked remotely as a part-time Data Analyst at Turl Street Group, where I built Python automation scripts for data validation, link collection and filtering, web scraping, and data management. I also worked on extracting and refining relevant links for better scraping and explored data patterns and behavior analysis.",
          color: "#9b1578",
        },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Pathao Ltd.",
          company_url: "https://pathao.com/",
          logo_path: "pathao_logo.svg",
          duration: "Jan 2025 - May 2025",
          location: "Dhaka, Bangladesh",
          description:
            "I did my internship at Pathao in SRE team, working on GCP and Kubernetes. I worked on infrastructure operations, monitoring and alerting, provisioning and access workflows, production incident response, and collaboration with backend, data, and platform teams. Supporting Kubernetes, internal tooling, and observability across the stack.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My experience spans cloud infrastructure, site reliability engineering, and data-focused systems. I specialize in managing production-scale services on GCP and Kubernetes, along with building automation, monitoring, and deployment workflows.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sust_sadat_cropped_600.png",
    description:
      "I am available on social platforms and open to discussions around cloud infrastructure, Kubernetes, DevOps, Site Reliability Engineering, backend systems, automation, monitoring, and scalable platform engineering. I also enjoy talking about machine learning, data systems, and cloud-native technologies.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.nsshohag.xyz",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "GP-Cha-115/1, Mohakhali, Gulshan, Dhaka 1212, Bangladesh",
    locality: "Gulshan",
    country: "Bangladesh",
    region: "Dhaka",
    postalCode: "1212",
    streetAddress: "GP-Cha-115/1, Mohakhali",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/8YWYbCW1y6uD5PmL9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
  contactFormSection: {
    eyebrow: "Connect with me",
    title: "Get in touch",
    description:
      "I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.",
    submitLabel: "Submit now",
    formSubject: "Nazmus Sadat Shohag - Portfolio Contact",
  },
};

const footer = {
  tagline: "Software Engineer · Site Reliability Engineering",
  quickLinks: [
    { label: "Home", path: "/home" },
    { label: "Education", path: "/education" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ],
  showSourceLink: true,
  sourceLinkLabel: "View source on GitHub",
};

export {
  settings,
  seo,
  greeting,
  footer,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
