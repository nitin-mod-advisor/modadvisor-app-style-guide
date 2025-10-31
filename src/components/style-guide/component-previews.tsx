
"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle, Info, AlertTriangle, XCircle, Home, Settings, Calendar as CalendarIcon, Plus, User, Type } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@/components/ui/menubar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Clipboard } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComponentPreviewsProps {
  componentToShow?: string;
}

export function ComponentPreviews({ componentToShow }: ComponentPreviewsProps) {

  const allComponents = (
    <>
      <AccordionPreview />
      <AlertPreview />
      <AlertDialogPreview />
      <AvatarPreview />
      <BadgePreview />
      <ButtonPreview />
      <CalendarPreview />
      <CardPreview />
      <CarouselPreview />
      <ChartPreview />
      <CheckboxPreview />
      <CollapsiblePreview />
      <CommandPreview />
      <DialogPreview />
      <DropdownMenuPreview />
      <FormPreview />
      <InputPreview />
      <LabelPreview />
      <MenubarPreview />
      <PopoverPreview />
      <ProgressPreview />
      <RadioGroupPreview />
      <ScrollAreaPreview />
      <SelectPreview />
      <SeparatorPreview />
      <SheetPreview />
      <SkeletonPreview />
      <SliderPreview />
      <SwitchPreview />
      <TablePreview />
      <TabsPreview />
      <TextareaPreview />
      <ToastPreview />
      <TooltipPreview />
      <SidebarHeaderPreview />
      <TypographyPreview />
    </>
  );

  const getComponent = () => {
    switch (componentToShow) {
      case 'accordion': return <AccordionPreview />;
      case 'alert': return <AlertPreview />;
      case 'alert-dialog': return <AlertDialogPreview />;
      case 'avatar': return <AvatarPreview />;
      case 'badge': return <BadgePreview />;
      case 'button': return <ButtonPreview />;
      case 'calendar': return <CalendarPreview />;
      case 'card': return <CardPreview />;
      case 'carousel': return <CarouselPreview />;
      case 'chart': return <ChartPreview />;
      case 'checkbox': return <CheckboxPreview />;
      case 'collapsible': return <CollapsiblePreview />;
      case 'command': return <CommandPreview />;
      case 'dialog': return <DialogPreview />;
      case 'dropdown-menu': return <DropdownMenuPreview />;
      case 'form': return <FormPreview />;
      case 'input': return <InputPreview />;
      case 'label': return <LabelPreview />;
      case 'menubar': return <MenubarPreview />;
      case 'popover': return <PopoverPreview />;
      case 'progress': return <ProgressPreview />;
      case 'radio-group': return <RadioGroupPreview />;
      case 'scroll-area': return <ScrollAreaPreview />;
      case 'select': return <SelectPreview />;
      case 'separator': return <SeparatorPreview />;
      case 'sheet': return <SheetPreview />;
      case 'skeleton': return <SkeletonPreview />;
      case 'slider': return <SliderPreview />;
      case 'switch': return <SwitchPreview />;
      case 'table': return <TablePreview />;
      case 'tabs': return <TabsPreview />;
      case 'textarea': return <TextareaPreview />;
      case 'toast': return <ToastPreview />;
      case 'tooltip': return <TooltipPreview />;
      case 'sidebar': return <SidebarHeaderPreview />;
      case 'typography': return <TypographyPreview />;
      default: return allComponents;
    }
  };

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground capitalize">{componentToShow ? componentToShow.replace('-', ' ') : 'Components Preview'}</h2>
        {getComponent()}
      </section>
    </div>
  )
}


const PreviewContainer = ({ title, children, code }: { title: string, children: React.ReactNode, code: string }) => {
    const { toast } = useToast();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code).then(() => {
        toast({
            title: "Copied to clipboard!",
            description: `${title} code has been copied.`,
        });
        });
    };

    return (
        <div className="space-y-6 mt-8">
            <h3 className="font-semibold text-xl text-foreground">{title}</h3>
            <div className="space-y-4">
                <h4 className="font-medium text-lg text-muted-foreground">Preview</h4>
                <div className="p-6 bg-card rounded-lg border border-border flex flex-wrap gap-4 items-center justify-center">
                    {children}
                </div>
            </div>
            <div className="space-y-4">
                <h4 className="font-medium text-lg text-muted-foreground">How to use</h4>
                <div className="relative group">
                     <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity" onClick={copyToClipboard} aria-label="Copy code">
                        <Clipboard className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted border border-border rounded-lg p-4 text-xs font-mono overflow-x-auto">
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};


const DynamicPreviewContainer = ({ title, children, code, controls }: { title: string, children: React.ReactNode, code: string, controls: React.ReactNode }) => {
    const { toast } = useToast();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code).then(() => {
        toast({
            title: "Copied to clipboard!",
            description: `${title} code has been copied.`,
        });
        });
    };

    return (
        <div className="space-y-6 mt-8">
            <h3 className="font-semibold text-xl text-foreground">{title}</h3>
            <div className="space-y-4">
                <h4 className="font-medium text-lg text-muted-foreground">Preview</h4>
                <div className="p-6 bg-card rounded-lg border border-border flex flex-wrap gap-4 items-center justify-center">
                    {children}
                </div>
            </div>
            <div className="space-y-4">
                <h4 className="font-medium text-lg text-muted-foreground">Controls</h4>
                <div className="p-6 bg-card rounded-lg border border-border grid grid-cols-1 md:grid-cols-2 gap-4">
                    {controls}
                </div>
            </div>
            <div className="space-y-4">
                <h4 className="font-medium text-lg text-muted-foreground">How to use</h4>
                <div className="relative group">
                     <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity" onClick={copyToClipboard} aria-label="Copy code">
                        <Clipboard className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted border border-border rounded-lg p-4 text-xs font-mono overflow-x-auto">
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};


const AccordionPreview = () => {
    const [type, setType] = useState<'single' | 'multiple'>('single');
    const [collapsible, setCollapsible] = useState(true);
    const [className, setClassName] = useState('');

    const code = `<Accordion type="${type}" ${collapsible && type === 'single' ? 'collapsible' : ''} className={cn("w-full", "${className}")}>
    <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It comes with default styles that matches the other components' aesthetics.</AccordionContent>
    </AccordionItem>
</Accordion>`;

    return (
        <DynamicPreviewContainer
            title="Accordion"
            code={code}
            controls={
                <>
                    <div className="space-y-2">
                        <Label>Type</Label>
                        <Select onValueChange={(v: any) => setType(v)} defaultValue={type}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="single">Single</SelectItem>
                                <SelectItem value="multiple">Multiple</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="collapsible-switch" checked={collapsible} onCheckedChange={setCollapsible} disabled={type === 'multiple'} />
                        <Label htmlFor="collapsible-switch">Collapsible</Label>
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="accordion-classname">ClassName</Label>
                        <Input 
                            id="accordion-classname"
                            placeholder="e.g. bg-blue-500"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                </>
            }
        >
            <Accordion type={type} collapsible={type === 'single' ? collapsible : undefined} className={cn("w-full max-w-md", className)}>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>Yes. It comes with default styles that matches the other components' aesthetics.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </DynamicPreviewContainer>
    );
}

const AlertPreview = () => {
    const [variant, setVariant] = useState<'default' | 'destructive' | 'success' | 'warning'>('default');
    const [title, setTitle] = useState('Heads up!');
    const [description, setDescription] = useState('This is an informational message.');
    const [className, setClassName] = useState('');

    const alertIcons = {
        default: <Info className="h-4 w-4" />,
        destructive: <XCircle className="h-4 w-4" />,
        success: <CheckCircle className="h-4 w-4" />,
        warning: <AlertTriangle className="h-4 w-4" />,
    }

    const code = `<Alert variant="${variant}" className={cn("${className}")}>
    ${{
        default: '<Info className="h-4 w-4" />',
        destructive: '<XCircle className="h-4 w-4" />',
        success: '<CheckCircle className="h-4 w-4" />',
        warning: '<AlertTriangle className="h-4 w-4" />',
    }[variant]}
    <AlertTitle>${title}</AlertTitle>
    <AlertDescription>${description}</AlertDescription>
</Alert>`;

    return (
        <DynamicPreviewContainer 
            title="Alerts"
            code={code}
            controls={
                <>
                    <div className="space-y-2">
                        <Label>Variant</Label>
                        <Select onValueChange={(v: any) => setVariant(v)} defaultValue={variant}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select variant" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="default">Default</SelectItem>
                                <SelectItem value="destructive">Destructive</SelectItem>
                                <SelectItem value="success">Success</SelectItem>
                                <SelectItem value="warning">Warning</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="alert-title">Title</Label>
                        <Input id="alert-title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="alert-description">Description</Label>
                        <Input id="alert-description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="alert-classname">ClassName</Label>
                        <Input 
                            id="alert-classname"
                            placeholder="e.g. border-blue-500"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                </>
            }
        >
            <div className="w-full max-w-md space-y-4">
                <Alert variant={variant} className={cn(className)}>
                    {alertIcons[variant]}
                    <AlertTitle>{title}</AlertTitle>
                    <AlertDescription>{description}</AlertDescription>
                </Alert>
            </div>
        </DynamicPreviewContainer>
    );
};

const AlertDialogPreview = () => (
    <PreviewContainer 
        title="Alert Dialog"
        code={`
<AlertDialog>
    <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
        <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
</AlertDialog>
        `}
    >
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </PreviewContainer>
);

const AvatarPreview = () => {
    const [seed, setSeed] = useState('avatar');
    const [fallback, setFallback] = useState('CN');
    const [className, setClassName] = useState('');

    const code = `<Avatar className={cn("${className}")}>
    <AvatarImage src="https://picsum.photos/seed/${seed}/100/100" alt="@shadcn" />
    <AvatarFallback>${fallback}</AvatarFallback>
</Avatar>`;

    return (
        <DynamicPreviewContainer 
            title="Avatar"
            code={code}
            controls={
                <>
                    <div className='space-y-2'>
                        <Label htmlFor="avatar-seed">Image Seed</Label>
                        <Input id="avatar-seed" value={seed} onChange={(e) => setSeed(e.target.value)} />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="avatar-fallback">Fallback Text</Label>
                        <Input id="avatar-fallback" value={fallback} onChange={(e) => setFallback(e.target.value)} />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="avatar-classname">ClassName</Label>
                        <Input 
                            id="avatar-classname"
                            placeholder="e.g. w-20 h-20"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                </>
            }
        >
            <Avatar className={cn(className)}>
                <AvatarImage src={`https://picsum.photos/seed/${seed}/100/100`} alt="@shadcn" />
                <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
        </DynamicPreviewContainer>
    );
}

const BadgePreview = () => {
    const [variant, setVariant] = useState<'default' | 'secondary' | 'destructive' | 'outline'>('default');
    const [text, setText] = useState('Badge');
    const [className, setClassName] = useState('');
    
    const code = `<Badge variant="${variant}" className={cn("${className}")}>${text}</Badge>`;

    return (
        <DynamicPreviewContainer 
            title="Badge"
            code={code}
            controls={
                <>
                    <div className="space-y-2">
                        <Label>Variant</Label>
                        <Select onValueChange={(v: any) => setVariant(v)} defaultValue={variant}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select variant" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="default">Default</SelectItem>
                                <SelectItem value="secondary">Secondary</SelectItem>
                                <SelectItem value="destructive">Destructive</SelectItem>
                                <SelectItem value="outline">Outline</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="badge-text">Text</Label>
                        <Input id="badge-text" value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="badge-classname">ClassName</Label>
                        <Input 
                            id="badge-classname"
                            placeholder="e.g. text-lg"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                </>
            }
        >
            <Badge variant={variant} className={cn(className)}>{text}</Badge>
        </DynamicPreviewContainer>
    );
}

const ButtonPreview = () => {
    const [variant, setVariant] = useState<'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'>('default');
    const [className, setClassName] = useState('');
    const [size, setSize] = useState<'default' | 'sm' | 'lg' | 'icon'>('default');
    const [text, setText] = useState('Dynamic Button');

    const code = `<Button variant="${variant}" size="${size}" className={cn("${className}")}>\n  ${text}\n</Button>`;

    return (
        <DynamicPreviewContainer
            title="Buttons"
            code={code}
            controls={
                <>
                    <div className='space-y-2'>
                        <Label>Variant</Label>
                        <Select onValueChange={(v: any) => setVariant(v)} defaultValue={variant}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select variant" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="default">Default</SelectItem>
                                <SelectItem value="secondary">Secondary</SelectItem>
                                <SelectItem value="destructive">Destructive</SelectItem>
                                <SelectItem value="outline">Outline</SelectItem>
                                <SelectItem value="ghost">Ghost</SelectItem>
                                <SelectItem value="link">Link</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className='space-y-2'>
                        <Label>Size</Label>
                        <Select onValueChange={(v: any) => setSize(v)} defaultValue={size}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="default">Default</SelectItem>
                                <SelectItem value="sm">Small</SelectItem>
                                <SelectItem value="lg">Large</SelectItem>
                                <SelectItem value="icon">Icon</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="button-text">Text</Label>
                        <Input id="button-text" value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                     <div className='space-y-2'>
                        <Label htmlFor="button-classname">ClassName</Label>
                        <Input 
                            id="button-classname"
                            placeholder="e.g. bg-blue-500 hover:bg-blue-600"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                </>
            }
        >
            <Button variant={variant} size={size} className={cn(className)}>
                {size === 'icon' ? <Plus/> : text}
            </Button>
        </DynamicPreviewContainer>
    )
}

const CalendarPreview = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return(
        <PreviewContainer 
            title="Calendar"
            code={`
const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
/>
            `}
        >
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
        </PreviewContainer>
    )
};

const CardPreview = () => (
    <PreviewContainer 
        title="Card"
        code={`
<Card className="shadow-sm hover:shadow-md hover:-translate-y-px transition-all w-full max-w-sm">
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a card description.</CardDescription>
    </CardHeader>
    <CardContent>
        <p>The card body contains the main content. It is styled using surface and text variables.</p>
    </CardContent>
        <CardFooter>
        <Button>Action</Button>
    </CardFooter>
</Card>
        `}
    >
        <Card className="shadow-sm hover:shadow-md hover:-translate-y-px transition-all w-full max-w-sm">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>This is a card description.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>The card body contains the main content. It is styled using surface and text variables.</p>
            </CardContent>
             <CardFooter>
                <Button>Action</Button>
            </CardFooter>
        </Card>
    </PreviewContainer>
);

const CarouselPreview = () => (
    <PreviewContainer 
        title="Carousel"
        code={`
<Carousel className="w-full max-w-xs">
    <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
            <div className="p-1">
            <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
            </Card>
            </div>
        </CarouselItem>
        ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
</Carousel>
        `}
    >
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </PreviewContainer>
);

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

const ChartPreview = () => (
    <PreviewContainer 
        title="Chart"
        code={`
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

<ChartContainer config={chartConfig} className="min-h-[200px] w-full max-w-md">
    <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent indicator="dot" />}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    </BarChart>
</ChartContainer>
        `}
    >
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full max-w-md">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            </BarChart>
        </ChartContainer>
    </PreviewContainer>
);

const CheckboxPreview = () => {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [labelText, setLabelText] = useState('Accept terms and conditions');
    const [className, setClassName] = useState('');

    const code = `<div className="flex items-center space-x-2">
    <Checkbox id="terms" checked={${checked}}${disabled ? ' disabled' : ''} className={cn("${className}")} />
    <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
        ${labelText}
    </label>
</div>`;

    return (
        <DynamicPreviewContainer 
            title="Checkbox"
            code={code}
            controls={
                <>
                    <div className='space-y-2'>
                        <Label htmlFor="checkbox-label">Label Text</Label>
                        <Input id="checkbox-label" value={labelText} onChange={(e) => setLabelText(e.target.value)} />
                    </div>
                    <div className="flex items-center space-x-2 pt-4">
                        <Switch id="checked-switch" checked={checked} onCheckedChange={setChecked} />
                        <Label htmlFor="checked-switch">Checked</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="disabled-switch" checked={disabled} onCheckedChange={setDisabled} />
                        <Label htmlFor="disabled-switch">Disabled</Label>
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="checkbox-classname">ClassName</Label>
                        <Input 
                            id="checkbox-classname"
                            placeholder="e.g. h-6 w-6"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                </>
            }
        >
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={checked} onCheckedChange={setChecked} disabled={disabled} className={cn(className)} />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {labelText}
                </label>
            </div>
        </DynamicPreviewContainer>
    );
};

const CollapsiblePreview = () => (
    <PreviewContainer 
        title="Collapsible"
        code={`
<Collapsible className="w-full space-y-2 max-w-sm">
    <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
            </Button>
        </CollapsibleTrigger>
    </div>
    <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        @radix-ui/primitives
    </div>
    <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
        </div>
    </CollapsibleContent>
</Collapsible>
        `}
    >
        <Collapsible className="w-full space-y-2 max-w-sm">
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                    @peduarte starred 3 repositories
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @stitches/react
                </div>
            </CollapsibleContent>
        </Collapsible>
    </PreviewContainer>
);

const CommandPreview = () => (
    <PreviewContainer 
        title="Command"
        code={`
<Command className="rounded-lg border shadow-md max-w-sm">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
        </CommandGroup>
    </CommandList>
</Command>
        `}
    >
        <Command className="rounded-lg border shadow-md max-w-sm">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>Profile</CommandItem>
                    <CommandItem>Billing</CommandItem>
                    <CommandItem>Settings</CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    </PreviewContainer>
);

const DialogPreview = () => (
    <PreviewContainer 
        title="Dialog"
        code={`
<Dialog>
    <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
                Make changes to your profile here. Click save when you're done.
            </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" value="John Doe" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">Username</Label>
                <Input id="username" value="@johndoe" className="col-span-3" />
            </div>
        </div>
        <DialogFooter>
            <Button type="submit">Save changes</Button>
        </DialogFooter>
    </DialogContent>
</Dialog>
        `}
    >
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">Name</Label>
                        <Input id="name" defaultValue="John Doe" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">Username</Label>
                        <Input id="username" defaultValue="@johndoe" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </PreviewContainer>
);

const DropdownMenuPreview = () => (
    <PreviewContainer 
        title="Dropdown Menu"
        code={`
<DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
    </DropdownMenuContent>
</DropdownMenu>
        `}
    >
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </PreviewContainer>
);

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const FormPreview = () => {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // This is a preview, so we won't actually submit.
        // You can use the toast to show the values.
        toast({
            title: "Form Submitted",
            description: `Username: ${values.username}`
        })
    }
    return (
        <PreviewContainer 
            title="Form"
            code={`
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        username: "",
    },
})
function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
}

<Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-sm">
        <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
                <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
                This is your public display name.
            </FormDescription>
            <FormMessage />
            </FormItem>
        )}
        />
        <Button type="submit">Submit</Button>
    </form>
</Form>
            `}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-sm">
                    <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display name.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </PreviewContainer>
    )
};


const InputPreview = () => {
    const [placeholder, setPlaceholder] = useState('Enter text...');
    const [disabled, setDisabled] = useState(false);
    const [type, setType] = useState('text');
    const [className, setClassName] = useState('');

    const code = `<Input type="${type}" placeholder="${placeholder}" ${disabled ? 'disabled ' : ''} className={cn("${className}")} />`;

    return (
        <DynamicPreviewContainer 
            title="Input"
            code={code}
            controls={
                <>
                    <div className='space-y-2'>
                        <Label htmlFor="input-placeholder">Placeholder</Label>
                        <Input id="input-placeholder" value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} />
                    </div>
                     <div className="space-y-2">
                        <Label>Type</Label>
                        <Select onValueChange={(v: any) => setType(v)} defaultValue={type}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="text">Text</SelectItem>
                                <SelectItem value="password">Password</SelectItem>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="number">Number</SelectItem>
                                <SelectItem value="date">Date</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2 pt-4">
                        <Switch id="input-disabled-switch" checked={disabled} onCheckedChange={setDisabled} />
                        <Label htmlFor="input-disabled-switch">Disabled</Label>
                    </div>
                     <div className='space-y-2'>
                        <Label htmlFor="input-classname">ClassName</Label>
                        <Input 
                            id="input-classname"
                            placeholder="e.g. border-blue-500"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                </>
            }
        >
            <div className="w-full max-w-sm">
                <Input type={type} placeholder={placeholder} disabled={disabled} className={cn(className)} />
            </div>
        </DynamicPreviewContainer>
    );
};

const LabelPreview = () => (
    <PreviewContainer 
        title="Label"
        code={`
<div className="max-w-sm w-full">
    <Label htmlFor="email">Your email address</Label>
    <Input type="email" id="email" placeholder="Email" />
</div>
        `}
    >
        <div className="max-w-sm w-full">
            <Label htmlFor="email">Your email address</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
    </PreviewContainer>
);

const MenubarPreview = () => (
    <PreviewContainer 
        title="Menubar"
        code={`
<Menubar>
    <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
        </MenubarContent>
    </MenubarMenu>
</Menubar>
        `}
    >
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>New Tab</MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    </PreviewContainer>
);

const PopoverPreview = () => (
    <PreviewContainer 
        title="Popover"
        code={`
<Popover>
    <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
        <div className="grid gap-4">
            <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
            </div>
        </div>
    </PopoverContent>
</Popover>
        `}
    >
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    </PreviewContainer>
);

const ProgressPreview = () => {
    const [progress, setProgress] = React.useState(66)
    const [className, setClassName] = useState('');
    
    const code = `<Progress value={${progress}} className={cn("w-[60%]", "${className}")} />`;
    
    return (
         <DynamicPreviewContainer 
            title="Progress"
            code={code}
            controls={
                <>
                    <div className='space-y-2'>
                        <Label htmlFor="progress-value">Progress ({progress}%)</Label>
                        <Slider id="progress-value" defaultValue={[progress]} max={100} step={1} onValueChange={(v) => setProgress(v[0])} />
                    </div>
                     <div className='space-y-2'>
                        <Label htmlFor="progress-classname">ClassName</Label>
                        <Input 
                            id="progress-classname"
                            placeholder="e.g. h-2"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                </>
            }
        >
            <Progress value={progress} className={cn("w-[60%]", className)} />
        </DynamicPreviewContainer>
    )
};

const RadioGroupPreview = () => (
    <PreviewContainer 
        title="Radio Group"
        code={`
<RadioGroup defaultValue="comfortable">
    <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
    </div>
    <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
    </div>
    <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
    </div>
</RadioGroup>
        `}
    >
        <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
            </div>
        </RadioGroup>
    </PreviewContainer>
);

const ScrollAreaPreview = () => (
    <PreviewContainer 
        title="Scroll Area"
        code={`
<ScrollArea className="h-48 w-72 rounded-md border p-4">
    Jokester began sneaking into the castle in the middle of the night and leaving
    jokes all over the place: under the king's pillow, in his soup, even in the
    royal toilet. The king was furious, but he couldn't seem to stop Jokester.
    And then, one day, the king realized that he was actually starting to enjoy
    the jokes.
</ScrollArea>
        `}
    >
        <ScrollArea className="h-48 w-72 rounded-md border p-4">
            Jokester began sneaking into the castle in the middle of the night and leaving
            jokes all over the place: under the king's pillow, in his soup, even in the
            royal toilet. The king was furious, but he couldn't seem to stop Jokester.
            And then, one day, the king realized that he was actually starting to enjoy
            the jokes.
        </ScrollArea>
    </PreviewContainer>
);

const SelectPreview = () => (
    <PreviewContainer 
        title="Select"
        code={`
<Select>
    <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectContent>
</Select>
        `}
    >
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
        </Select>
    </PreviewContainer>
);

const SeparatorPreview = () => {
    const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
    const [className, setClassName] = useState('');

    const code = orientation === 'horizontal' ? `
<div className="w-full max-w-sm">
    <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
    </div>
    <Separator className={cn("my-4", "${className}")} />
    ...
</div>` : `
<div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" className={cn("${className}")} />
    <div>Docs</div>
    <Separator orientation="vertical" className={cn("${className}")} />
    <div>Source</div>
</div>`;

    return (
        <DynamicPreviewContainer 
            title="Separator"
            code={code}
            controls={
                 <>
                    <div className='space-y-2'>
                        <Label>Orientation</Label>
                        <Select onValueChange={(v: any) => setOrientation(v)} defaultValue={orientation}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select orientation" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="horizontal">Horizontal</SelectItem>
                                <SelectItem value="vertical">Vertical</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="separator-classname">ClassName</Label>
                        <Input 
                            id="separator-classname"
                            placeholder="e.g. bg-primary"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                </>
            }
        >
            <div className="w-full max-w-sm">
                {orientation === 'horizontal' ? (
                    <>
                        <div className="space-y-1">
                            <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                            <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
                        </div>
                        <Separator className={cn("my-4", className)} />
                        <div className="flex h-5 items-center space-x-4 text-sm">
                            <div>Blog</div>
                            <Separator orientation="vertical" className={cn(className)} />
                            <div>Docs</div>
                            <Separator orientation="vertical" className={cn(className)} />
                            <div>Source</div>
                        </div>
                    </>
                ) : (
                    <div className="flex h-5 items-center space-x-4 text-sm">
                        <div>Blog</div>
                        <Separator orientation="vertical" className={cn(className)} />
                        <div>Docs</div>
                        <Separator orientation="vertical" className={cn(className)} />
                        <div>Source</div>
                    </div>
                )}
            </div>
        </DynamicPreviewContainer>
    );
};

const SheetPreview = () => {
    const [side, setSide] = useState<'top' | 'bottom' | 'left' | 'right'>('right');

    const code = `<Sheet>
    <SheetTrigger asChild><Button variant="outline">Open Sheet</Button></SheetTrigger>
    <SheetContent side="${side}">
        <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
                Make changes to your profile here. Click save when you're done.
            </SheetDescription>
        </SheetHeader>
    </SheetContent>
</Sheet>`;

    return (
        <DynamicPreviewContainer 
            title="Sheet"
            code={code}
            controls={
                <div className='space-y-2'>
                    <Label>Side</Label>
                    <Select onValueChange={(v: any) => setSide(v)} defaultValue={side}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select side" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="top">Top</SelectItem>
                            <SelectItem value="bottom">Bottom</SelectItem>
                            <SelectItem value="left">Left</SelectItem>
                            <SelectItem value="right">Right</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            }
        >
            <Sheet>
                <SheetTrigger asChild><Button variant="outline">Open</Button></SheetTrigger>
                <SheetContent side={side}>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </DynamicPreviewContainer>
    );
};

const SkeletonPreview = () => (
    <PreviewContainer 
        title="Skeleton"
        code={`
<div className="flex items-center space-x-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
    </div>
</div>
        `}
    >
        <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    </PreviewContainer>
);

const SliderPreview = () => {
    const [value, setValue] = useState(50);
    const [step, setStep] = useState(1);
    const [className, setClassName] = useState('');

    const code = `<Slider defaultValue={[${value}]} max={100} step={${step}} className={cn("w-[60%]", "${className}")} />`;

    return (
        <DynamicPreviewContainer 
            title="Slider"
            code={code}
            controls={
                 <>
                    <div className='space-y-2'>
                        <Label htmlFor="slider-value">Value ({value})</Label>
                        <Slider id="slider-value" defaultValue={[value]} max={100} step={step} onValueChange={(v) => setValue(v[0])} />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="slider-step">Step</Label>
                        <Input id="slider-step" type="number" value={step} onChange={(e) => setStep(Number(e.target.value) || 1)} />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="slider-classname">ClassName</Label>
                        <Input 
                            id="slider-classname"
                            placeholder="e.g. [&>span:first-child]:bg-red-500"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                </>
            }
        >
            <Slider defaultValue={[value]} max={100} step={step} onValueChange={(v) => setValue(v[0])} className={cn("w-[60%]", className)} />
        </DynamicPreviewContainer>
    );
};

const SwitchPreview = () => {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [className, setClassName] = useState('');

    const code = `<div className="flex items-center space-x-2">
    <Switch id="airplane-mode" checked={${checked}}${disabled ? ' disabled' : ''} className={cn("${className}")} />
    <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`;

    return (
        <DynamicPreviewContainer 
            title="Switch"
            code={code}
            controls={
                <>
                    <div className="flex items-center space-x-2">
                        <Switch id="switch-checked-switch" checked={checked} onCheckedChange={setChecked} />
                        <Label htmlFor="switch-checked-switch">Checked</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="switch-disabled-switch" checked={disabled} onCheckedChange={setDisabled} />
                        <Label htmlFor="switch-disabled-switch">Disabled</Label>
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="switch-classname">ClassName</Label>
                        <Input 
                            id="switch-classname"
                            placeholder="e.g. data-[state=checked]:bg-green-500"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                </>
            }
        >
            <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" checked={checked} onCheckedChange={(c) => setChecked(c)} disabled={disabled} className={cn(className)} />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
        </DynamicPreviewContainer>
    );
};

const TablePreview = () => (
    <PreviewContainer 
        title="Table"
        code={`
<div className="rounded-lg border overflow-hidden w-full">
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell className="font-medium">Jane Cooper</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell className="text-primary">Active</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="font-medium">John Doe</TableCell>
                <TableCell>Contributor</TableCell>
                <TableCell className="text-primary">Active</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="font-medium">Cody Fisher</TableCell>
                <TableCell>Viewer</TableCell>
                <TableCell>Inactive</TableCell>
            </TableRow>
        </TableBody>
    </Table>
</div>
        `}
    >
        <div className="rounded-lg border overflow-hidden w-full">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Jane Cooper</TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell className="text-primary">Active</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">John Doe</TableCell>
                        <TableCell>Contributor</TableCell>
                        <TableCell className="text-primary">Active</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Cody Fisher</TableCell>
                        <TableCell>Viewer</TableCell>
                        <TableCell>Inactive</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </PreviewContainer>
);

const TabsPreview = () => (
    <PreviewContainer 
        title="Tabs"
        code={`
<Tabs defaultValue="account" className="w-[400px]">
    <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
        <Card>
            <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Make changes to your account here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1"><Label htmlFor="name">Name</Label><Input id="name" defaultValue="John Doe" /></div>
                <div className="space-y-1"><Label htmlFor="username">Username</Label><Input id="username" defaultValue="@johndoe" /></div>
            </CardContent>
            <CardFooter><Button>Save changes</Button></CardFooter>
        </Card>
    </TabsContent>
    <TabsContent value="password">
        <Card>
            <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1"><Label htmlFor="current">Current password</Label><Input id="current" type="password" /></div>
                <div className="space-y-1"><Label htmlFor="new">New password</Label><Input id="new" type="password" /></div>
            </CardContent>
            <CardFooter><Button>Save password</Button></CardFooter>
        </Card>
    </TabsContent>
</Tabs>
        `}
    >
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>Make changes to your account here.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1"><Label htmlFor="name">Name</Label><Input id="name" defaultValue="John Doe" /></div>
                        <div className="space-y-1"><Label htmlFor="username">Username</Label><Input id="username" defaultValue="@johndoe" /></div>
                    </CardContent>
                    <CardFooter><Button>Save changes</Button></CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>Change your password here.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1"><Label htmlFor="current">Current password</Label><Input id="current" type="password" /></div>
                        <div className="space-y-1"><Label htmlFor="new">New password</Label><Input id="new" type="password" /></div>
                    </CardContent>
                    <CardFooter><Button>Save password</Button></CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    </PreviewContainer>
);

const TextareaPreview = () => {
    const [placeholder, setPlaceholder] = useState('Type your message here.');
    const [disabled, setDisabled] = useState(false);
    const [className, setClassName] = useState('');

    const code = `<Textarea placeholder="${placeholder}" ${disabled ? 'disabled ' : ''}className={cn("max-w-sm", "${className}")}/>`;
    
    return (
        <DynamicPreviewContainer 
            title="Textarea"
            code={code}
            controls={
                <>
                    <div className='space-y-2'>
                        <Label htmlFor="textarea-placeholder">Placeholder</Label>
                        <Input id="textarea-placeholder" value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} />
                    </div>
                    <div className="flex items-center space-x-2 pt-4">
                        <Switch id="textarea-disabled-switch" checked={disabled} onCheckedChange={setDisabled} />
                        <Label htmlFor="textarea-disabled-switch">Disabled</Label>
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="textarea-classname">ClassName</Label>
                        <Input 
                            id="textarea-classname"
                            placeholder="e.g. resize-none"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                </>
            }
        >
            <Textarea placeholder={placeholder} disabled={disabled} className={cn("max-w-sm", className)}/>
        </DynamicPreviewContainer>
    );
};

const ToastPreview = () => {
    const { toast } = useToast();
    return (
        <PreviewContainer 
            title="Toast"
            code={`
const { toast } = useToast();
<Button
    variant="outline"
    onClick={() => {
        toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
        })
    }}
>
    Show Toast
</Button>
            `}
        >
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: "Scheduled: Catch up ",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                    })
                }}
            >
                Show Toast
            </Button>
        </PreviewContainer>
    )
};

const TooltipPreview = () => (
    <PreviewContainer 
        title="Tooltip"
        code={`
<TooltipProvider>
    <Tooltip>
        <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
            <p>Add to library</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>
        `}
    >
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </PreviewContainer>
);

const SidebarHeaderPreview = () => (
    <PreviewContainer 
        title="Sidebar & Header"
        code={`
<div className="rounded-lg border overflow-hidden h-96 flex flex-col w-full bg-background">
    <header className="h-14 flex-shrink-0 px-4 flex items-center justify-between border-b">
        <h4 className="font-semibold">Header</h4>
        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">U</div>
    </header>
    <div className="flex flex-1 min-h-0">
        <aside className="w-56 flex flex-col p-2 border-r bg-sidebar-background text-sidebar-foreground">
            <nav className="flex-1 space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-sidebar-accent-foreground bg-sidebar-accent">
                    <Home className="w-4 h-4 text-sidebar-primary" /> Dashboard
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                    <Settings className="w-4 h-4" /> Settings
                </a>
            </nav>
        </aside>
        <main className="flex-1 p-4">
            <p className="text-muted-foreground text-sm">Main content area</p>
        </main>
    </div>
</div>
        `}
    >
        <div className="rounded-lg border overflow-hidden h-96 flex flex-col w-full bg-background">
            <header className="h-14 flex-shrink-0 px-4 flex items-center justify-between border-b">
                <h4 className="font-semibold">Header</h4>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">U</div>
            </header>
            <div className="flex flex-1 min-h-0">
                <aside className="w-56 flex flex-col p-2 border-r bg-sidebar-background text-sidebar-foreground">
                    <nav className="flex-1 space-y-1">
                        <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-sidebar-accent-foreground bg-sidebar-accent">
                            <Home className="w-4 h-4 text-sidebar-primary" /> Dashboard
                        </a>
                        <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                            <Settings className="w-4 h-4" /> Settings
                        </a>
                    </nav>
                </aside>
                <main className="flex-1 p-4">
                    <p className="text-muted-foreground text-sm">Main content area</p>
                </main>
            </div>
        </div>
    </PreviewContainer>
);

const TypographyPreview = () => (
    <PreviewContainer
        title="Typography"
        code={`
<div className="prose dark:prose-invert">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <p>This is a paragraph of text. It's useful for long-form content.</p>
    <blockquote>This is a blockquote.</blockquote>
    <code>This is inline code.</code>
</div>
        `}
    >
        <div className="w-full max-w-2xl prose dark:prose-invert">
            <h1>Aa - Heading 1</h1>
            <h2>Bb - Heading 2</h2>
            <h3>Cc - Heading 3</h3>
            <h4>Dd - Heading 4</h4>
            <p>
                The quick brown fox jumps over the lazy dog. This is a paragraph. It is used for long-form content and descriptions. Paired with beautiful typography, it can make your application a joy to read.
            </p>
            <blockquote>
                "The only way to do great work is to love what you do." - A wise person
            </blockquote>
            <ul>
                <li>List item one</li>
                <li>List item two</li>
                <li>List item three</li>
            </ul>
             <p>
                This is a paragraph with <code>inline code</code> and a <a href="#">link</a>.
            </p>
        </div>
    </PreviewContainer>
);
    

    

    
