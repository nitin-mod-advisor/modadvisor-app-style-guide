"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Palette, Library, Component, ChevronDown } from 'lucide-react';
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
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

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
                    <Component />
                    <span>Components</span>
                    <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" />
                </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <SidebarMenuSub>
                    <SidebarMenuSubItem>
                        <Link href="/components" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-text-muted hover:bg-surface-2">
                           <SidebarMenuSubButton isActive={pathname === '/components'}>
                                All Components
                           </SidebarMenuSubButton>
                        </Link>
                    </SidebarMenuSubItem>
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
