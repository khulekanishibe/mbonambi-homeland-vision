// "use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, Menu, X, Users, Building, Handshake, Camera, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: MenuItem[];
  description?: string;
}

const menuItems: MenuItem[] = [
    {
        id: 'about',
        label: 'About',
        icon: Users,
        children: [
            { id: 'overview', label: 'Overview', href: '/about/overview' },
            { id: 'history', label: 'Our History', href: '/about/history' },
            { id: 'strategic-intent', label: 'Strategic Intent', href: '/about/strategic-intent' },
            { id: 'vision-mission', label: 'Our Vision and Mission', href: '/about/vision-mission' },
            { id: 'chairperson-reports', label: 'Reports of the Chairperson', href: '/about/chairperson-reports' },
            { id: 'organogram', label: 'Trust Organogram', href: '/about/organogram' },
            { id: 'leadership', label: 'Our Leadership', href: '/about/leadership' },
        ]
    },
    {
        id: 'community-trust',
        label: 'Our Community Trust',
        icon: Building,
        children: [
            { 
                id: 'cdt', 
                label: 'Community Development Trust', 
                href: '/trust/cdt',
                children: [
                    { id: 'cdt-shareholding', label: 'Community Development Trust Shareholding & Mandate', href: '/trust/cdt/shareholding' },
                    { id: 'cdt-investment', label: 'Trust Investment', href: '/trust/cdt/investment' },
                ]
            },
            { 
                id: 'pbt', 
                label: 'Public Benefit Trust', 
                href: '/trust/pbt',
                children: [
                    { id: 'pbt-shareholding', label: 'Public Benefit Trust Shareholding & Mandate', href: '/trust/pbt/shareholding' },
                    { id: 'pbt-csa', label: 'Community Social Activities', href: '/trust/pbt/csa' },
                    { id: 'pbt-plan', label: 'Medium Term Plan', href: '/trust/pbt/plan' },
                ]
            },
            { id: 'land-trust', label: 'Land Trust', href: '/trust/land' },
        ]
    },
    {
        id: 'stakeholders',
        label: 'Stakeholders',
        icon: Handshake,
        children: [
            { id: 'stakeholder-reports', label: 'Quarterly Reports', href: '/stakeholders/reports' },
            { id: 'governance', label: 'Governance', href: '/stakeholders/governance' },
            { id: 'stakeholder-announcements', label: 'Announcements', href: '/stakeholders/announcements' },
        ]
    },
    {
        id: 'business',
        label: 'Business with Us',
        icon: Building,
        children: [
            { id: 'projects', label: 'Projects Undertaken by the Trust', href: '/business/projects' },
            { id: 'partnerships', label: 'Community Partnerships', href: '/business/partnerships' },
            { id: 'development', label: 'Economic Development Initiatives', href: '/business/development' },
        ]
    },
    {
        id: 'gallery',
        label: 'Gallery',
        href: '/gallery',
        icon: Camera,
    },
    {
        id: 'contacts',
        label: 'Contacts',
        href: '/contacts',
        icon: Phone,
    }
];

const MegaMenu: React.FC<{ className?: string }> = ({ className }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuId);
    setActiveSubmenu(null); 
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
  };

  const handleSubMenuEnter = (submenuId: string) => {
    setActiveSubmenu(submenuId);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const renderSubmenuItem = (item: MenuItem) => (
    <Link
      key={item.id}
      to={item.href || '#'}
      className="flex items-center gap-2 px-3 py-2 text-sm text-mbonambi-lightGray hover:text-white hover:bg-mbonambi-mauve/50 rounded-md transition-colors duration-200 group animate__animated animate__flipInX"
    >
      {item.icon && <item.icon className="w-3 h-3 group-hover:scale-110 transition-transform duration-200" />}
      <span className="flex-1">{item.label}</span>
    </Link>
  );

  const renderMenuItem = (item: MenuItem) => (
    <div
      key={item.id}
      className="relative"
      onMouseEnter={() => handleSubMenuEnter(item.id)}
    >
      <Link
        to={item.href || '#'}
        className="flex items-center justify-between gap-2 p-4 text-sm font-medium transition-all duration-200 rounded-lg group text-mbonambi-lightGray hover:text-white hover:bg-mbonambi-mauve/50 animate__animated animate__flipInX"
      >
        <div className="flex items-center gap-2">
            {item.icon && <item.icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />}
            <span className="flex-1 font-bold">{item.label}</span>
        </div>
        {item.children && <ChevronRight className="w-4 h-4 transition-transform duration-200" />}
      </Link>
      {item.description && <p className="px-4 -mt-2 pb-2 text-xs text-mbonambi-lightGray">{item.description}</p>}
    </div>
  );

  const renderMegaMenu = (parentItem: MenuItem) => {
    if (!parentItem.children) return null;
    const activeSubmenuItem = parentItem.children.find(child => child.id === activeSubmenu);

    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-auto mt-2 bg-mbonambi-darkGray border border-mbonambi-mediumGray rounded-xl shadow-2xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200 flex">
        <div className="p-6 min-w-[250px]">
          <div className="grid grid-cols-1 gap-1">
            {parentItem.children.map(renderMenuItem)}
          </div>
        </div>
        {activeSubmenuItem && activeSubmenuItem.children && (
            <div className="p-6 bg-mbonambi-mauve/10 min-w-[250px] border-l border-mbonambi-mediumGray animate-in slide-in-from-left-2 duration-200">
                <h3 className="font-bold text-white mb-4 px-4">{activeSubmenuItem.label}</h3>
                <div className="grid grid-cols-1 gap-1">
                    {activeSubmenuItem.children.map(renderSubmenuItem)}
                </div>
            </div>
        )}
      </div>
    );
  };

  const renderMobileMenu = (items: MenuItem[], level = 0) => {
    return (
      <div className={cn("space-y-1", level > 0 && "ml-4 pl-4 border-l border-mbonambi-mediumGray")}>
        {items.map((item) => (
          <div key={item.id}>
            <Link
              to={item.href || '#'}
              className="flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg group text-mbonambi-lightGray hover:text-white hover:bg-mbonambi-mauve/50"
              onClick={() => !item.children && setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                {item.icon && <item.icon className="w-4 h-4" />}
                <span className="flex-1">{item.label}</span>
              </div>
              {item.children && <ChevronDown className="w-4 h-4" />}
            </Link>
            {item.children && (
              <div className="mt-1">
                {renderMobileMenu(item.children, level + 1)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-mbonambi-mediumGray bg-mbonambi-darkGray/70 backdrop-blur-md", className)}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/lovable-uploads/ee555ae1-8377-4f56-bf45-320dd2310537.png" alt="Mbonambi Community Logo" className="h-12 w-12 object-contain" />
            <div className="text-white">
              <div className="font-heading text-lg font-bold">MBONAMBI</div>
              <div className="text-xs">Community</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1" ref={menuRef} onMouseLeave={handleMouseLeave}>
            {menuItems.map((item) => (
              <div key={item.id} className="relative" onMouseEnter={() => handleMouseEnter(item.id)}>
                <Link
                  to={item.href || '#'}
                  className={cn("flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg animate__animated animate__fadeInDown", "text-mbonambi-lightGray hover:text-white hover:bg-mbonambi-mauve/50", activeMenu === item.id && "text-white bg-mbonambi-mauve/50")}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                  {item.children && <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeMenu === item.id && "rotate-180")} />}
                </Link>
                {activeMenu === item.id && item.children && renderMegaMenu(item)}
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center justify-center w-10 h-10 text-mbonambi-lightGray hover:text-white hover:bg-mbonambi-mauve/50 rounded-lg transition-colors duration-200">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-px bg-mbonambi-darkGray border-t border-b border-mbonambi-mediumGray shadow-xl z-50 animate-in slide-in-from-top-2 duration-200">
          <div className="p-4 space-y-2 max-h-[70vh] overflow-y-auto">
            {renderMobileMenu(menuItems)}
          </div>
        </div>
      )}
    </header>
  );
};

export default MegaMenu;
