import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const GITLAB_HOST = (process.env.GITLAB_HOST || "https://gitlab.com").replace(
  /\/$/,
  ""
);
const GITLAB_TOKEN = process.env.GITLAB_TOKEN;
const GITLAB_USERNAME = process.env.GITLAB_USERNAME;
const GITLAB_GROUP = process.env.GITLAB_GROUP || "sadat99";
const PROJECTS_LIMIT = Number(process.env.GITLAB_PROJECTS_LIMIT || 10);

const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",
  Go: "simple-icons:go",
  TypeScript: "logos-typescript-icon",
  HCL: "simple-icons:terraform",
  YAML: "simple-icons:yaml",
  Makefile: "simple-icons:gnu",
};

async function gitlabFetch(path, query = {}) {
  const url = new URL(`${GITLAB_HOST}/api/v4${path}`);
  Object.entries(query).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") {
      url.searchParams.set(k, String(v));
    }
  });
  const res = await fetch(url, {
    headers: { "PRIVATE-TOKEN": GITLAB_TOKEN },
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`${res.status} ${url}: ${t}`);
  }
  return res.json();
}

function mapLanguages(langObject) {
  if (!langObject || typeof langObject !== "object") return [];
  return Object.keys(langObject)
    .filter((name) => name in languages_icons)
    .map((name) => ({
      name,
      iconifyClass: languages_icons[name],
    }));
}

async function main() {
  if (!GITLAB_TOKEN) {
    console.error("Set GITLAB_TOKEN in .env (classic PAT with read_api)");
    process.exit(1);
  }
  if (!GITLAB_GROUP) {
    console.error("Set GITLAB_GROUP in .env (e.g. sadat99)");
    process.exit(1);
  }

  // Optional: verify username exists (not required for group fetch)
  if (GITLAB_USERNAME) {
    const users = await gitlabFetch("/users", { username: GITLAB_USERNAME });
    if (!users.length) {
      console.warn(`Warning: user not found: ${GITLAB_USERNAME}`);
    } else {
      console.log(`GitLab user: ${users[0].username} (id ${users[0].id})`);
    }
  }

  const group = await gitlabFetch(`/groups/${encodeURIComponent(GITLAB_GROUP)}`);
  console.log(`Group: ${group.full_path} (id ${group.id})`);

  const projects = await gitlabFetch(`/groups/${group.id}/projects`, {
    per_page: PROJECTS_LIMIT,
    order_by: "updated_at",
    sort: "desc",
    include_subgroups: true,
    with_shared: false,
  });

  if (!Array.isArray(projects) || projects.length === 0) {
    console.warn(
      `No projects returned for group "${GITLAB_GROUP}". Check group name, token access, or private visibility.`
    );
  }

  const newProjects = { data: [] };

  for (const p of projects) {
    let langs = {};
    try {
      langs = await gitlabFetch(`/projects/${p.id}/languages`);
    } catch (_) {
      langs = {};
    }

    newProjects.data.push({
      id: String(p.id),
      name: p.path_with_namespace || p.name,
      createdAt: p.created_at,
      url: p.web_url,
      description: p.description || "",
      isFork: Boolean(p.forked_from_project),
      languages: mapLanguages(langs),
    });
  }

  const outPath = "./src/shared/opensource/projects.json";
  fs.writeFileSync(outPath, JSON.stringify(newProjects, null, 2));
  console.log(`Wrote ${newProjects.data.length} projects to ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});