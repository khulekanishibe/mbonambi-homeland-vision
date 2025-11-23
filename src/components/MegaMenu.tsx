import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Home, Briefcase, Heart, FileText, Crown, MessageSquare, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: MenuItem[];
  description?: string;
}

const MegaMenu: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: 'home',
      label: t('home', 'Home'),
      href: '/',
      icon: Home,
    },
    {
      id: 'tenders',
      label: t('navigation.tenders', 'Tenders & Procurement'),
      href: '/tenders',
      icon: Briefcase,
    },
    {
      id: 'programmes',
      label: t('navigation.programmes', 'Community Programmes'),
      href: '/programmes',
      icon: Heart,
    },
    {
      id: 'transparency',
      label: t('navigation.transparency', 'Transparency Portal'),
      href: '/transparency',
      icon: FileText,
    },
    {
      id: 'heritage',
      label: t('navigation.ourHeritage', 'Our Heritage'),
      icon: Crown,
      children: [
        { 
          id: 'about', 
          label: t('navigation.aboutUs', 'About Us'), 
          href: '/#about',
          description: 'Learn about the Mbonambi community and our values'
        },
        { 
          id: 'history', 
          label: t('navigation.clanHistory', 'Clan History'), 
          href: '/#history',
          description: 'Our journey through time and tradition'
        },
        { 
          id: 'leadership', 
          label: t('navigation.leadership', 'Leadership'), 
          href: '/trust',
          description: 'Meet the leaders guiding our community'
        },
        { 
          id: 'trust-ecosystem', 
          label: t('navigation.trustEcosystem', 'Trust Ecosystem'), 
          href: '/trust',
          description: 'Understanding our community trust structure'
        },
        { 
          id: 'gallery', 
          label: t('gallery', 'Gallery'), 
          href: '/gallery',
          description: 'Visual stories from our community'
        },
      ]
    },
    {
      id: 'announcements',
      label: t('navigation.announcements', 'Trust Announcements'),
      href: '/#announcements',
      icon: MessageSquare,
    },
    {
      id: 'contact',
      label: t('contact', 'Contact'),
      href: '/#contact',
      icon: Phone,
    }
  ];

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
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
      className="flex items-start gap-3 px-4 py-3 text-sm hover:bg-mbonambi-mauve/50 rounded-md transition-colors duration-200 group"
    >
      <div className="flex-1">
        <div className="font-medium text-white mb-1">{item.label}</div>
        {item.description && (
          <p className="text-xs text-mbonambi-lightGray">{item.description}</p>
        )}
      </div>
    </Link>
  );

  const renderMegaMenu = (parentItem: MenuItem) => {
    if (!parentItem.children) return null;

    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-auto min-w-[320px] mt-2 bg-mbonambi-darkGray border border-mbonambi-mediumGray rounded-xl shadow-2xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200">
        <div className="p-4">
          <div className="space-y-1">
            {parentItem.children.map(renderSubmenuItem)}
          </div>
        </div>
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
    <header className={cn("sticky top-0 z-50 w-full border-b border-mbonambi-mediumGray bg-mbonambi-darkGray/95 backdrop-blur-md", className)}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/lovable-uploads/ee555ae1-8377-4f56-bf45-320dd2310537.png" alt="Mbonambi Community Logo" className="h-12 w-12 object-contain" />
            <div className="text-white">
              <div className="font-heading text-lg font-bold">MBONAMBI</div>
              <div className="text-xs text-mbonambi-lightGray">Community Trust</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1" ref={menuRef} onMouseLeave={handleMouseLeave}>
            {menuItems.map((item) => (
              <div key={item.id} className="relative" onMouseEnter={() => handleMouseEnter(item.id)}>
                <Link
                  to={item.href || '#'}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg",
                    "text-mbonambi-lightGray hover:text-white hover:bg-mbonambi-mauve/50",
                    activeMenu === item.id && "text-white bg-mbonambi-mauve/50"
                  )}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                  {item.children && (
                    <ChevronDown 
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeMenu === item.id && "rotate-180"
                      )} 
                    />
                  )}
                </Link>
                {activeMenu === item.id && item.children && renderMegaMenu(item)}
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="flex items-center justify-center w-10 h-10 text-mbonambi-lightGray hover:text-white hover:bg-mbonambi-mauve/50 rounded-lg transition-colors duration-200"
            >
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