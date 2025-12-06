"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Menu, Home, Users, Building, Handshake, Camera, Phone } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SubMenuItem {
  title: string;
  href: string;
  description?: string;
  items?: SubMenuItem[];
}

interface MenuItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  items?: SubMenuItem[];
}

interface NavigationProps {
  className?: string;
}

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/",
    icon: <Home className="h-4 w-4" />,
    items: [
      { title: "About the Mbonambi Clan", href: "/clan-about", description: "Learn about our heritage and traditions" },
      { title: "Our Clan's Journey", href: "/clan-journey", description: "The story of our people through time" },
      { title: "Announcements", href: "/announcements", description: "Latest news and updates" },
      { title: "Community Life", href: "/gallery", description: "Daily life in our community" },
      { title: "Community Partners", href: "/partners", description: "Our valued partnerships" },
    ],
  },
  {
    title: "About",
    href: "/about",
    icon: <Users className="h-4 w-4" />,
    items: [
      { title: "Overview of the Mbonambi Trust Ecosystem", href: "/about/overview", description: "Understanding our trust structure" },
      { title: "Our History", href: "/about/history", description: "The rich history of our people" },
      { title: "Strategic Intent", href: "/about/strategic-intent", description: "Our vision for the future" },
      { title: "Our Vision and Mission", href: "/about/vision-mission", description: "What drives us forward" },
      { title: "Reports of the Chairperson", href: "/about/chairperson-reports", description: "Leadership insights and updates" },
      { title: "Trust Organogram", href: "/about/organogram", description: "Our organizational structure" },
      { title: "Our Leadership", href: "/about/leadership", description: "Meet our leaders" },
    ],
  },
  {
    title: "Our Community Trust",
    href: "/community-trust",
    icon: <Building className="h-4 w-4" />,
    items: [
      {
        title: "Community Development Trust (CDT)",
        href: "/trust/cdt",
        description: "Development initiatives and programs",
        items: [
          { title: "CDT Shareholding & Mandate", href: "/trust/cdt/shareholding", description: "Structure and responsibilities" },
          { title: "Trust Investment", href: "/trust/cdt/investment", description: "Investment strategies and portfolio" },
        ],
      },
      {
        title: "Public Benefit Trust (PBT)",
        href: "/trust/pbt",
        description: "Community benefit programs",
        items: [
          { title: "PBT Shareholding & Mandate", href: "/trust/pbt/shareholding", description: "Public benefit structure" },
          { title: "Community Social Activities (CSA)", href: "/trust/pbt/csa", description: "Social programs and activities" },
          { title: "Medium Term Plan", href: "/trust/pbt/plan", description: "Our strategic planning" },
        ],
      },
      { title: "Land Trust", href: "/trust/land", description: "Land management and development" },
    ],
  },
  {
    title: "Stakeholders",
    href: "/stakeholders",
    icon: <Handshake className="h-4 w-4" />,
    items: [
      { title: "Quarterly Reports", href: "/stakeholders/reports", description: "Regular stakeholder updates" },
      { title: "Governance", href: "/stakeholders/governance", description: "Our governance framework" },
      { title: "Announcements", href: "/stakeholders/announcements", description: "Important stakeholder news" },
    ],
  },
  {
    title: "Business with Us",
    href: "/business",
    icon: <Building className="h-4 w-4" />,
    items: [
      { title: "Projects Undertaken by the Trust", href: "/business/projects", description: "Current and completed projects" },
      { title: "Community Partnerships", href: "/business/partnerships", description: "Partnership opportunities" },
      { title: "Economic Development Initiatives", href: "/business/development", description: "Economic growth programs" },
    ],
  },
  {
    title: "Gallery",
    href: "/gallery",
    icon: <Camera className="h-4 w-4" />,
  },
  {
    title: "Contacts",
    href: "/contacts",
    icon: <Phone className="h-4 w-4" />,
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { items?: SubMenuItem[] }
>(({ className, title, items, ...props }, ref) => {
  return (
    <div>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black/20 focus:bg-black/20 text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
      {items && (
        <div className="pl-4 pt-2">
          <ul className="grid gap-1">
            {items.map((item) => (
              <li key={item.title}>
                <NavigationMenuLink asChild>
                  <a href={item.href} className={cn(
                    "block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-black/20 focus:bg-black/20 text-white/80",
                  )}>
                    <div className="text-sm font-medium leading-none">{item.title}</div>
                  </a>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
ListItem.displayName = "ListItem";

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeMenuItem = menuItems.find(item => 
      item.href === currentPath || 
      item.items?.some(subItem => subItem.href === currentPath)
    );
    if (activeMenuItem) {
      setActiveItem(activeMenuItem.title);
    } else {
      setActiveItem(null);
    }
  }, [location.pathname]);

  const renderDesktopMenuItem = (item: MenuItem) => {
    const itemIsActive = activeItem === item.title;
    if (item.items && item.items.length > 0) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger 
            className={cn(
              "text-sm font-medium transition-colors hover:text-sandstone-200 bg-transparent focus:bg-transparent focus:text-sandstone-200 hover:bg-black/20",
              itemIsActive ? "text-sandstone-200" : "text-white"
            )}
          >
            <span className="flex items-center gap-2">
              {item.icon}
              {item.title}
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="border-transparent bg-theme/70 backdrop-blur-md">
            <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
              {item.items.map((subItem) => (
                <ListItem key={subItem.title} title={subItem.title} href={subItem.href} items={subItem.items} />
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuLink asChild>
          <Link
            to={item.href}
            className={cn(
              "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-sandstone-200 focus:bg-transparent focus:text-sandstone-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-black/20",
              itemIsActive ? "text-sandstone-200" : "text-white"
            )}
          >
            <span className="flex items-center gap-2">
              {item.icon}
              {item.title}
            </span>
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };

  const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items && item.items.length > 0) {
      return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger className="py-3 font-medium hover:no-underline">
            <span className="flex items-center gap-2">
              {item.icon}
              {item.title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="mt-2 space-y-2 pl-6">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                to={subItem.href}
                className="block rounded-md p-3 text-sm leading-none outline-none transition-colors hover:bg-black/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="font-medium">{subItem.title}</div>
                {subItem.description && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <Link
        key={item.title}
        to={item.href}
        className={cn(
          "flex items-center gap-2 py-3 font-medium transition-colors hover:text-foreground/80",
          activeItem === item.title ? "text-foreground" : "text-foreground/60"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {item.icon}
        {item.title}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "bg-theme/70 backdrop-blur-md",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/ee555ae1-8377-4f56-bf45-320dd2310537.png" 
              alt="Mbonambi Community Logo" 
              className="h-12 w-12 object-contain"
            />
            <div className="text-white">
              <div className="font-heading text-lg font-bold">MBONAMBI</div>
              <div className="text-xs">Community</div>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              {menuItems.map(renderDesktopMenuItem)}
            </NavigationMenuList>
          </NavigationMenu>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:text-sandstone-200 hover:bg-transparent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-transparent bg-theme/70 backdrop-blur-md sm:max-w-md overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link to="/" className="flex items-center space-x-2">
                     <img 
                        src="/lovable-uploads/ee555ae1-8377-4f56-bf45-320dd2310537.png" 
                        alt="Mbonambi Community Logo" 
                        className="h-8 w-8 object-contain"
                      />
                    <span className="font-bold">Mbonambi Clan</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {menuItems.map(renderMobileMenuItem)}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
