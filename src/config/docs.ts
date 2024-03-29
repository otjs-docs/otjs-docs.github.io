import type { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/getting-started/",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Introduction",
      items: [
        {
          title: "Getting Started",
          href: "/docs/getting-started",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
      ],
    },
    {
      title: "Concepts",
      items: [
        {
          title: "Basics of Database",
          href: "/docs/basics-of-database",
        },
        {
          title: "Consistency Models",
          href: "/docs/consistency-models",
        },
        {
          title: "History of Web Editors",
          href: "/docs/web-editors",
          disabled: true,
        },
        {
          title: "Operational Transformation",
          href: "/docs/operational-transformation",
          disabled: true,
        },
        {
          title: "Alernative - Conflict-free Replicated Data Types",
          href: "/docs/alternatives",
          disabled: true,
        },
      ],
    },
    {
      title: "External Links",
      items: [
        {
          title: "operational-transformation.github.io",
          href: "https://operational-transformation.github.io/",
          external: true,
        },
      ],
    },
  ],
};
