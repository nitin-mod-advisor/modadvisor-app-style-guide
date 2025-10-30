"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Palette, Library, Component as ComponentIcon, ChevronDown, Type, CreditCard, AlertCircle, Table, Square, AppWindow, PanelLeft } from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarInset,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/theme-toggle';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const components = [
  { name: 'Buttons', icon: Type, slug: 'buttons' },
  { name: 'Inputs', icon: Type, slug: 'inputs' },
  { name: 'Card', icon: CreditCard, slug: 'card' },
  { name: 'Alerts', icon: AlertCircle, slug: 'alerts' },
  { name: 'Table', icon: Table, slug: 'table' },
  { name: 'Modal', icon: Square, slug: 'modal' },
  { name: 'Sidebar', icon: PanelLeft, slug: 'sidebar' },
];

function ComponentsSubMenu() {
    const pathname = usePathname();
    const { state } = useSidebar();
    const [isOpen, setIsOpen] = React.useState(pathname.startsWith('/components'));

    React.useEffect(() => {
        if (state === 'collapsed') {
            setIsOpen(false);
        }
    }, [state]);

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                    <ComponentIcon />
                    <span>Components</span>
                    <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" />
                </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <SidebarMenuSub>
                    <SidebarMenuSubItem>
                         <Link href="/components" passHref>
                            <SidebarMenuSubButton isActive={pathname === '/components'}>
                                All Components
                            </SidebarMenuSubButton>
                        </Link>
                    </SidebarMenuSubItem>
                    {components.map((component) => (
                         <SidebarMenuSubItem key={component.slug}>
                            <Link href={`/components/${component.slug}`} passHref>
                                <SidebarMenuSubButton isActive={pathname === `/components/${component.slug}`}>
                                    <component.icon className="w-4 h-4 mr-2" />
                                    {component.name}
                                </SidebarMenuSubButton>
                            </Link>
                        </SidebarMenuSubItem>
                    ))}
                </SidebarMenuSub>
            </CollapsibleContent>
        </Collapsible>
    )
}


export default function LiveStyleGuide({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Library className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-text">Style Guide</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/">
                <SidebarMenuButton isActive={pathname === '/'}>
                  <Palette />
                  <span>Color Palette</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <ComponentsSubMenu />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 h-16 bg-surface/80 backdrop-blur-sm border-b border-border">
          <SidebarTrigger />
          <ThemeToggle />
        </header>
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
