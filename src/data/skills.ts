import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    accent: "#ffb3b2",
    accentRgb: [255, 179, 178],
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
  },
  {
    label: "Backend",
    accent: "#86efac",
    accentRgb: [134, 239, 172],
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/openapiinitiative/6BA539" },
    ],
  },
  {
    label: "Database",
    accent: "#d8b4fe",
    accentRgb: [216, 180, 254],
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ],
  },
  {
    label: "DevOps & Tools",
    accent: "#fdba74",
    accentRgb: [253, 186, 116],
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "NGINX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    ],
  },
  {
    label: "AI & Integrations",
    accent: "#f9a8d4",
    accentRgb: [249, 168, 212],
    skills: [
      { name: "Claude API", icon: "https://cdn.simpleicons.org/anthropic/D4A27F" },
      { name: "OpenAI API", icon: "https://cdn.simpleicons.org/openai/412991" },
      { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
      { name: "Prompt Engineering", icon: "https://cdn.simpleicons.org/anthropic/D4A27F" },
    ],
  },
];
