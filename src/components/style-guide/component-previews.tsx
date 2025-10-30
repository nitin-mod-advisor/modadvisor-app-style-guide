"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle, Info, AlertTriangle, XCircle, Home, Settings, Calendar as CalendarIcon, Plus } from 'lucide-react';
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
      default: return allComponents;
    }
  };

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text capitalize">{componentToShow ? componentToShow.replace('-', ' ') : 'Components Preview'}</h2>
        {getComponent()}
      </section>
    </div>
  )
}

const PreviewContainer = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4 mt-8">
        <h3 className="font-semibold text-lg text-text-muted">{title}</h3>
        <div className="p-6 bg-surface rounded-lg border border-border flex flex-wrap gap-4 items-center justify-center">
            {children}
        </div>
    </div>
);

const AccordionPreview = () => (
    <PreviewContainer title="Accordion">
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>Yes. It comes with default styles that matches the other components' aesthetics.</AccordionContent>
            </AccordionItem>
        </Accordion>
    </PreviewContainer>
);

const AlertPreview = () => (
    <PreviewContainer title="Alerts">
         <div className="w-full space-y-4">
            <Alert className="border-success" style={{ backgroundColor: `color-mix(in srgb, var(--success) 15%, transparent)` }}>
                <CheckCircle className="h-4 w-4 text-success" />
                <AlertTitle className="text-success font-bold">Success</AlertTitle>
                <AlertDescription className="text-success/90">This is a success message.</AlertDescription>
            </Alert>
            <Alert className="border-info" style={{ backgroundColor: `color-mix(in srgb, var(--info) 15%, transparent)` }}>
                <Info className="h-4 w-4 text-info" />
                <AlertTitle className="text-info font-bold">Info</AlertTitle>
                <AlertDescription className="text-info/90">This is an informational message.</AlertDescription>
            </Alert>
            <Alert className="border-warning" style={{ backgroundColor: `color-mix(in srgb, var(--warning) 15%, transparent)` }}>
                <AlertTriangle className="h-4 w-4 text-warning" />
                <AlertTitle className="text-warning font-bold">Warning</AlertTitle>
                <AlertDescription className="text-warning/90">This is a warning message.</AlertDescription>
            </Alert>
            <Alert className="border-error" style={{ backgroundColor: `color-mix(in srgb, var(--error) 15%, transparent)` }}>
                <XCircle className="h-4 w-4 text-error" />
                <AlertTitle className="text-error font-bold">Error</AlertTitle>
                <AlertDescription className="text-error/90">This is an error message.</AlertDescription>
            </Alert>
        </div>
    </PreviewContainer>
);

const AlertDialogPreview = () => (
    <PreviewContainer title="Alert Dialog">
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-surface">
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

const AvatarPreview = () => (
    <PreviewContainer title="Avatar">
        <Avatar>
            <AvatarImage src="https://picsum.photos/seed/avatar/100/100" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </PreviewContainer>
);

const BadgePreview = () => (
    <PreviewContainer title="Badge">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
    </PreviewContainer>
);

const ButtonPreview = () => (
    <PreviewContainer title="Buttons">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button disabled>Disabled</Button>
    </PreviewContainer>
)

const CalendarPreview = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return(
        <PreviewContainer title="Calendar">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border bg-surface"
            />
        </PreviewContainer>
    )
};

const CardPreview = () => (
    <PreviewContainer title="Card">
        <Card className="bg-surface border-border shadow-sm hover:shadow-md hover:-translate-y-px transition-all w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-text">Card Title</CardTitle>
                <CardDescription className="text-text-muted">This is a card description.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-text">The card body contains the main content. It is styled using surface and text variables.</p>
            </CardContent>
             <CardFooter>
                <Button>Action</Button>
            </CardFooter>
        </Card>
    </PreviewContainer>
);

const CarouselPreview = () => (
    <PreviewContainer title="Carousel">
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
    <PreviewContainer title="Chart">
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

const CheckboxPreview = () => (
    <PreviewContainer title="Checkbox">
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Accept terms and conditions
            </label>
        </div>
    </PreviewContainer>
);

const CollapsiblePreview = () => (
    <PreviewContainer title="Collapsible">
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
    <PreviewContainer title="Command">
        <Command className="rounded-lg border shadow-md max-w-sm bg-surface">
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
    <PreviewContainer title="Dialog">
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-surface">
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
    </PreviewContainer>
);

const DropdownMenuPreview = () => (
    <PreviewContainer title="Dropdown Menu">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-surface">
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
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <PreviewContainer title="Form">
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


const InputPreview = () => (
    <PreviewContainer title="Inputs">
        <div className="w-full space-y-4 max-w-sm">
            <Input placeholder="Default" className="bg-surface border-border text-text placeholder:text-text-muted focus:border-ring focus:ring-ring" />
            <Input placeholder="Error state" className="bg-surface border-error text-error placeholder:text-error/70 focus:border-error focus:ring-error" />
            <Input placeholder="Disabled" disabled className="bg-surface-2 border-border text-text-muted cursor-not-allowed" />
        </div>
    </PreviewContainer>
);

const LabelPreview = () => (
    <PreviewContainer title="Label">
        <div className="max-w-sm w-full">
            <Label htmlFor="email">Your email address</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
    </PreviewContainer>
);

const MenubarPreview = () => (
    <PreviewContainer title="Menubar">
        <Menubar className="bg-surface">
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent className="bg-surface">
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
    <PreviewContainer title="Popover">
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-surface">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-text-muted">Set the dimensions for the layer.</p>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    </PreviewContainer>
);

const ProgressPreview = () => {
    const [progress, setProgress] = React.useState(13)
    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
    return (
        <PreviewContainer title="Progress">
            <Progress value={progress} className="w-[60%]" />
        </PreviewContainer>
    )
};

const RadioGroupPreview = () => (
    <PreviewContainer title="Radio Group">
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
    <PreviewContainer title="Scroll Area">
        <ScrollArea className="h-48 w-72 rounded-md border p-4 bg-surface-2">
            Jokester began sneaking into the castle in the middle of the night and leaving
            jokes all over the place: under the king's pillow, in his soup, even in the
            royal toilet. The king was furious, but he couldn't seem to stop Jokester.
            And then, one day, the king realized that he was actually starting to enjoy
            the jokes.
        </ScrollArea>
    </PreviewContainer>
);

const SelectPreview = () => (
    <PreviewContainer title="Select">
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent className="bg-surface">
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
        </Select>
    </PreviewContainer>
);

const SeparatorPreview = () => (
    <PreviewContainer title="Separator">
        <div className="w-full max-w-sm">
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                <p className="text-sm text-text-muted">An open-source UI component library.</p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
            </div>
        </div>
    </PreviewContainer>
);

const SheetPreview = () => (
    <PreviewContainer title="Sheet">
        <Sheet>
            <SheetTrigger asChild><Button variant="outline">Open</Button></SheetTrigger>
            <SheetContent className="bg-surface">
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </PreviewContainer>
);

const SkeletonPreview = () => (
    <PreviewContainer title="Skeleton">
        <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    </PreviewContainer>
);

const SliderPreview = () => (
    <PreviewContainer title="Slider">
        <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
    </PreviewContainer>
);

const SwitchPreview = () => (
    <PreviewContainer title="Switch">
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    </PreviewContainer>
);

const TablePreview = () => (
    <PreviewContainer title="Table">
        <div className="rounded-lg border border-border overflow-hidden bg-surface w-full">
            <Table>
                <TableHeader className="bg-surface-2">
                    <TableRow className="border-border">
                        <TableHead className="text-text">User</TableHead>
                        <TableHead className="text-text">Role</TableHead>
                        <TableHead className="text-text">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="border-border hover:bg-surface-2/70">
                        <TableCell className="font-medium text-text">Jane Cooper</TableCell>
                        <TableCell className="text-text-muted">Admin</TableCell>
                        <TableCell className="text-success">Active</TableCell>
                    </TableRow>
                    <TableRow className="border-border hover:bg-surface-2/70 border-l-2 border-l-primary">
                        <TableCell className="font-medium text-text">John Doe</TableCell>
                        <TableCell className="text-text-muted">Contributor</TableCell>
                        <TableCell className="text-success">Active</TableCell>
                    </TableRow>
                    <TableRow className="border-border hover:bg-surface-2/70">
                        <TableCell className="font-medium text-text">Cody Fisher</TableCell>
                        <TableCell className="text-text-muted">Viewer</TableCell>
                        <TableCell className="text-warning">Inactive</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </PreviewContainer>
);

const TabsPreview = () => (
    <PreviewContainer title="Tabs">
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

const TextareaPreview = () => (
    <PreviewContainer title="Textarea">
        <Textarea placeholder="Type your message here." className="max-w-sm"/>
    </PreviewContainer>
);

const ToastPreview = () => {
    const { toast } = useToast();
    return (
        <PreviewContainer title="Toast">
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
    <PreviewContainer title="Tooltip">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent className="bg-surface">
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </PreviewContainer>
);

const SidebarHeaderPreview = () => (
    <PreviewContainer title="Sidebar & Header">
        <div className="rounded-lg border border-border overflow-hidden h-96 flex flex-col bg-surface w-full">
            <header className="h-14 flex-shrink-0 px-4 flex items-center justify-between border-b border-border bg-surface">
                <h4 className="font-semibold text-text">Header</h4>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">U</div>
            </header>
            <div className="flex flex-1 min-h-0">
                <aside className="w-56 flex flex-col p-2 bg-surface border-r border-border">
                    <nav className="flex-1 space-y-1">
                        <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-text bg-surface-2 border-l-2 border-primary">
                            <Home className="w-4 h-4 text-primary" /> Dashboard
                        </a>
                        <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-text-muted hover:bg-surface-2">
                            <Settings className="w-4 h-4" /> Settings
                        </a>
                    </nav>
                </aside>
                <main className="flex-1 p-4 bg-bg">
                    <p className="text-text-muted text-sm">Main content area</p>
                </main>
            </div>
        </div>
    </PreviewContainer>
);
    