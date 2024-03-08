import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { navMenuConfig } from "@/config/nav-menu";
import ExternalLink from "@/icons/ExternalLink";
import JavaScript from "@/icons/JavaScript";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/types";

const infos = navMenuConfig.infosNav[0];
const resources = navMenuConfig.resourcesNav[0];

export function MainNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{infos.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <JavaScript className="size-8" />
                  <div className="mb-2 mt-3 text-lg font-medium">
                    Operational Transformation
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    A collection of algorithms to synchronize changes across
                    multiple clients.
                  </p>
                </a>
              </li>

              {infos.items?.map((info) => (
                <ListItem key={info.title} {...info} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{resources.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {resources.items?.map((resource) => (
                <ListItem key={resource.title} {...resource} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          {navMenuConfig.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              rel={link.rel}
              className={navigationMenuTriggerStyle()}
            >
              {link.title}
              {link.external ? <ExternalLink /> : null}
            </a>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem: React.FC<MenuItem> = ({
  title,
  href,
  description,
  launched,
  disabled,
  external,
}) => {
  const target = external ? "_blank" : undefined;

  return (
    <li>
      <a
        href={disabled ? undefined : href}
        target={target}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          disabled
            ? "text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
            : "",
        )}
      >
        <div className="text-sm font-medium leading-none">
          <span className="mr-2">{title}</span>
          {disabled ? (
            <Badge
              variant="secondary"
              radius="sm"
              className="h-5 px-1.5 text-xs font-medium"
            >
              SOON
            </Badge>
          ) : null}
          {launched ? (
            <Badge radius="sm" className="h-5 px-1.5 text-xs font-medium">
              NEW
            </Badge>
          ) : null}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </a>
    </li>
  );
};
ListItem.displayName = "ListItem";
