import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Quickstart",
      items: [
        {
          title: "Getting Started",
          href: "/docs/getting-started",
          description: "Let's take you to the rocketship.",
        },
        {
          title: "Installation",
          href: "/docs/installation",
          description: "Get the best for your workspace in one command.",
        },
        {
          title: "Concepts",
          href: "/docs/database-basics",
          description: "Know what's going behind the scenes.",
          disabled: true,
        },
      ],
    },
  ],
  resourcesNav: [
    {
      title: "Resources",
      items: [
        {
          title: "Documentation",
          href: "/docs/getting-started",
          description: "Get started with your Development journey.",
        },
        {
          title: "Playground",
          href: "/play/",
          description:
            "Try out Collaborative experience without any installation.",
          launched: true,
        },
        {
          title: "Blogs",
          href: "/blogs/",
          description: "Listen to what the community is buzzing about.",
          disabled: true,
        },
        {
          title: "Tutorials",
          href: "/tutorials/",
          description:
            "Easy step-by-step guide to learn and adopt for developers and enterprises.",
          disabled: true,
        },
      ],
    },
  ],
  links: [
    {
      title: "Discussions",
      href: "https://github.com/0xTheProDev/Operational-Transformation/discussions",
      external: true,
    },
    // {
    //   title: "FAQ",
    //   href: "/faq",
    // },
    // {
    //   title: "About",
    //   href: "/about",
    // },
  ],
};
