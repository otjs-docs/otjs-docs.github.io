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
  links: [
    // {
    //   title: "Blog",
    //   href: "/blog",
    // },
    {
      title: "Docs",
      href: "/docs/getting-started",
    },
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
