"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Palette, Library, Component as ComponentIcon, ChevronDown, Type, CreditCard, AlertCircle, Table, Square, AppWindow, PanelLeft,
    CircleAlert, User as AvatarIcon, Badge, Calendar, CheckSquare, Bold, GitBranch, LayoutGrid, Menu,
    Pipette, Pointer, Ratio, Rows, VenetianMask, Sliders, ToggleRight, ListTree, MousePointer, MessageSquare, PanelTop,
    BarChart2, Shell, Framer, AreaChart
} from 'lucide-react';
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
    { name: 'Accordion', icon: Rows, slug: 'accordion' },
    { name: 'Alert', icon: AlertCircle, slug: 'alert' },
    { name: 'Alert Dialog', icon: CircleAlert, slug: 'alert-dialog' },
    { name: 'Avatar', icon: AvatarIcon, slug: 'avatar' },
    { name: 'Badge', icon: Badge, slug: 'badge' },
    { name: 'Button', icon: Pointer, slug: 'button' },
    { name: 'Calendar', icon: Calendar, slug: 'calendar' },
    { name: 'Card', icon: CreditCard, slug: 'card' },
    { name: 'Carousel', icon: Framer, slug: 'carousel' },
    { name: 'Chart', icon: BarChart2, slug: 'chart' },
    { name: 'Checkbox', icon: CheckSquare, slug: 'checkbox' },
    { name: 'Collapsible', icon: PanelTop, slug: 'collapsible' },
    { name: 'Command', icon: Shell, slug: 'command' },
    { name: 'Dialog', icon: AppWindow, slug: 'dialog' },
    { name: 'Dropdown Menu', icon: Menu, slug: 'dropdown-menu' },
    { name: 'Form', icon: AreaChart, slug: 'form' },
    { name: 'Input', icon: Bold, slug: 'input' },
    { name: 'Label', icon: Pipette, slug: 'label' },
    { name: 'Menubar', icon: Menu, slug: 'menubar' },
    { name: 'Popover', icon: VenetianMask, slug: 'popover' },
    { name: 'Progress', icon: Ratio, slug: 'progress' },
    { name: 'Radio Group', icon: ListTree, slug: 'radio-group' },
    { name: 'Scroll Area', icon: Rows, slug: 'scroll-area' },
    { name: 'Select', icon: Pointer, slug: 'select' },
    { name: 'Separator', icon: GitBranch, slug: 'separator' },
    { name: 'Sheet', icon: LayoutGrid, slug: 'sheet' },
    { name: 'Skeleton', icon: VenetianMask, slug: 'skeleton' },
    { name: 'Slider', icon: Sliders, slug: 'slider' },
    { name: 'Switch', icon: ToggleRight, slug: 'switch' },
    { name: 'Table', icon: Table, slug: 'table' },
    { name: 'Tabs', icon: PanelLeft, slug: 'tabs' },
    { name: 'Textarea', icon: Type, slug: 'textarea' },
    { name: 'Toast', icon: MessageSquare, slug: 'toast' },
    { name: 'Tooltip', icon: MousePointer, slug: 'tooltip' },
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
    