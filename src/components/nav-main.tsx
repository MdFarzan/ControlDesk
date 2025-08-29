import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Home</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              {item?.items?.length > 0 ? (
                <MultipleLink item={item} />
              ) : (
                <SingleLink item={item} />
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function SingleLink({ item }: { item: any }) {
  return (
    <NavLink to={item.url}>
      {({ isActive }) => (
        <SidebarMenuButton
          data-active={isActive ? "true" : "false"}
          className={isActive ? "bg-[#d3d3d3]!" : ""}
        >
          <item.icon />
          <span>{item.title}</span>
        </SidebarMenuButton>
      )}
    </NavLink>
  );
}

function MultipleLink({ item }: { item: any }) {
  return (
    <>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton tooltip={item.title}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          {item.items?.map((subItem) => (
            <SidebarMenuSubItem key={subItem.title}>
              <NavLink key={subItem.title} to={subItem.url} end>
                {({ isActive }) => (
                  <SidebarMenuSubButton
                    asChild
                    data-active={isActive ? "true" : "false"}
                    className={isActive ? "bg-[#d3d3d3]!" : ""}
                  >
                    <span>{subItem.title}</span>
                  </SidebarMenuSubButton>
                )}
              </NavLink>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </>
  );
}
