import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  User,
  LogOut,
  BookOpen,
  Heart,
  TrendingUp,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Building,
  Target
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "User Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
];

const sessionCategories = [
  {
    title: "Academics",
    icon: BookOpen,
    items: [
      { title: "Primary", url: "/sessions/academics/primary", icon: GraduationCap },
      { title: "Secondary", url: "/sessions/academics/secondary", icon: Building },
      { title: "Tertiary", url: "/sessions/academics/tertiary", icon: Target },
    ],
  },
  {
    title: "Health and Fitness",
    url: "/sessions/health",
    icon: Heart,
  },
  {
    title: "Career and Personal Development",
    url: "/sessions/career",
    icon: TrendingUp,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;
  const [openSessions, setOpenSessions] = useState(true);
  const [openAcademics, setOpenAcademics] = useState(true);

  const isActive = (path: string) => currentPath === path;
  const isSessionsActive = () => currentPath.startsWith("/sessions");
  const isAcademicsActive = () => currentPath.startsWith("/sessions/academics");

const getNavClassName = (active: boolean) =>
  `flex items-center gap-3 rounded-lg px-3 py-2 transition-smooth hover:bg-orange-400 ${
    active
      ? "bg-orange-500 text-white shadow-md"
      : "text-gray-700"
  }`;


  return (
    <Sidebar className={`border-r border-sidebar-border transition-smooth ${collapsed ? "w-14" : "w-64"}`}>
      <SidebarContent className="bg-sidebar">
        {/* Logo Section */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Target className="h-5 w-5 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-xl font-bold text-sidebar-foreground">Habitraca</h1>
                <p className="text-xs text-muted-foreground">Track your success</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-medium">
            {!collapsed && "Main"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(isActive(item.url))}>
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Sessions Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-medium">
            {!collapsed && "Sessions"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible open={openSessions} onOpenChange={setOpenSessions}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className={getNavClassName(isSessionsActive())}>
                      <BookOpen className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && (
                        <>
                          <span className="font-medium flex-1">Sessions</span>
                          {openSessions ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        </>
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {!collapsed && (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {/* Academics with subcategories */}
                        <Collapsible open={openAcademics} onOpenChange={setOpenAcademics}>
                          <SidebarMenuSubItem>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuSubButton className={getNavClassName(isAcademicsActive())}>
                                <GraduationCap className="h-4 w-4" />
                                <span className="flex-1">Academics</span>
                                {openAcademics ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                              </SidebarMenuSubButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub className="ml-4">
                                {sessionCategories[0].items?.map((subItem) => (
                                  <SidebarMenuSubItem key={subItem.title}>
                                    <SidebarMenuSubButton asChild>
                                      <NavLink to={subItem.url} className={getNavClassName(isActive(subItem.url))}>
                                        <subItem.icon className="h-4 w-4" />
                                        <span>{subItem.title}</span>
                                      </NavLink>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                ))}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </SidebarMenuSubItem>
                        </Collapsible>

                        {/* Other session categories */}
                        {sessionCategories.slice(1).map((category) => (
                          <SidebarMenuSubItem key={category.title}>
                            <SidebarMenuSubButton asChild>
                              <NavLink to={category.url!} className={getNavClassName(isActive(category.url!))}>
                                <category.icon className="h-4 w-4" />
                                <span>{category.title}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  )}
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout */}
       <div className="mt-auto p-4">
  <SidebarMenuButton className="w-full text-orange-600 hover:bg-orange-100">
    <LogOut className="h-5 w-5" />
    {!collapsed && <span className="font-medium">Logout</span>}
  </SidebarMenuButton>
</div>

      </SidebarContent>
    </Sidebar>
  );
}
