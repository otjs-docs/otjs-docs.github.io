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
          external: true,
        },
        {
          title: "Concepts",
          href: "/docs/concepts",
          description: "Place where the magic is revealed.",
          external: true,
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Examples",
      items: [
        {
          title: "Authentification",
          href: "/login",
          description: "Login and register pages for authentification.",
          disabled: true,
        },
        {
          title: "Dashboard",
          href: "/#dashboard",
          description: "A dashboard panel after authentification.",
          disabled: true,
        },
        {
          title: "Ecommerce",
          href: "/#examples/ecommerce",
          description:
            "Different pages of an ecommerce app fetching data from an API.",
          disabled: true,
        },
        {
          title: "Social Media",
          href: "/#examples/social-media",
          description: "Different components & pages of an social media app.",
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
      rel: "noreferrer",
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
