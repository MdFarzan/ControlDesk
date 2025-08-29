import type { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  Images,
  Gauge,
} from "lucide-react";
import { useLocation } from "react-router-dom";

type Props = {
  children?: ReactNode | ReactNode[];
  module?: string;
  page?: string;
};

export default function AuthLayout({ children, module, page }: Props) {
  const { pathname } = useLocation();

  console.log(pathname.split("/").includes("/slider"));

  const data = {
    user: {
      name: "Md. Farzan",
      email: "mdfarzan776@gmail.com",
      avatar: "/avatars/shadcn.jpg",
    },

    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Gauge,
        // isActive: true,/`
      },

      {
        title: "Slider",
        url: "#",
        icon: Images,
        isActive: pathname.split("/").includes("slider"),
        items: [
          {
            title: "All slides",
            url: "/slider",
          },
          {
            title: "Add",
            url: "/slider/add",
          },
        ],
      },
      /*       {
        title: "Models",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      }, */
    ],
  };

  return (
    <SidebarProvider>
      <AppSidebar data={data} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">{module}</BreadcrumbLink>
                </BreadcrumbItem>

                {page && (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{page}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
