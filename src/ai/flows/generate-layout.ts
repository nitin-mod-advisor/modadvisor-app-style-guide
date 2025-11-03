
'use server';
/**
 * @fileOverview A flow for generating JSX layouts from text prompts.
 *
 * - generateLayout - A function that calls the layout generation flow.
 * - GenerateLayoutInput - The input type for the flow.
 * - GenerateLayoutOutput - The return type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateLayoutInputSchema = z.object({
  prompt: z.string().describe('The user prompt describing the desired layout.'),
});
export type GenerateLayoutInput = z.infer<typeof GenerateLayoutInputSchema>;

const GenerateLayoutOutputSchema = z.object({
  jsx: z.string().describe('The generated JSX code as a single string. This should be a raw JSX string, without any surrounding markdown or explanation. Use TailwindCSS classes for styling, and leverage the available ShadCN components.'),
});
export type GenerateLayoutOutput = z.infer<typeof GenerateLayoutOutputSchema>;

const componentExamples = `
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

// Card Example
<Card className="w-full max-w-sm">
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a card description.</CardDescription>
    </CardHeader>
    <CardContent>
        <p>The card body contains the main content.</p>
    </CardContent>
     <CardFooter>
        <Button>Action</Button>
    </CardFooter>
</Card>

// Form Example
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
// ... inside component
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "" },
})
function onSubmit(values: z.infer<typeof formSchema>) { console.log(values) }

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
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
            </FormItem>
        )}
        />
        <Button type="submit">Submit</Button>
    </form>
</Form>

// Button Example
<Button variant="default" size="default">Click Me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline" size="icon"><Plus /></Button>

// Input with Label Example
<div>
    <Label htmlFor="email">Your email address</Label>
    <Input type="email" id="email" placeholder="Email" />
</div>
`;

export async function generateLayout(input: GenerateLayoutInput): Promise<GenerateLayoutOutput> {
  return generateLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLayoutPrompt',
  input: { schema: GenerateLayoutInputSchema },
  output: { schema: GenerateLayoutOutputSchema },
  prompt: `You are an expert UI developer specializing in React, Tailwind CSS, and ShadCN UI components. Your task is to generate a single, production-quality block of JSX code based on a user's prompt, using the provided examples.

  RULES:
  - You MUST return only raw, valid JSX. Do not include any markdown, explanations, enclosing tags like \`\`\`jsx, or imports.
  - You MUST use the ShadCN components from the examples below. Do not use plain HTML elements like <button> or <input> when a corresponding component exists.
  - For professional layouts, wrap content in a <Card> component with <CardHeader>, <CardTitle>, <CardDescription>, <CardContent>, and <CardFooter> as shown in the examples.
  - Use Tailwind CSS classes for all styling via the 'className' attribute.
  - For form elements, always use a <Label> for accessibility.
  - For icons, use 'lucide-react' components (e.g., <Home className="w-4 h-4" />).
  - Ensure the layout is responsive.

  ---
  COMPONENT EXAMPLES:
  Here is how to use the components. The components are already imported for you.
  ---
  ${componentExamples}
  ---
  
  User Prompt:
  {{{prompt}}}
  `,
});

const generateLayoutFlow = ai.defineFlow(
  {
    name: 'generateLayoutFlow',
    inputSchema: GenerateLayoutInputSchema,
    outputSchema: GenerateLayoutOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

    