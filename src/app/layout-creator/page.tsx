
'use client';

import React, { useState, useMemo } from 'react';
import * as Babel from '@babel/standalone';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Loader2, History, FilePlus, Code, Clipboard } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel, FormDescription } from '@/components/ui/form';
import { generateLayout } from '@/ai/flows/generate-layout';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';

// Import all the components that the AI can use
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@/components/ui/menubar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"


const formSchema = z.object({
  prompt: z.string().min(1, { message: 'Prompt cannot be empty.' }),
});

type Message = {
    role: 'user' | 'model';
    content: string;
};

// Create a scope of all available components for the renderer
const componentScope = {
  React,
  // UI Components
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
  Alert, AlertDescription, AlertTitle,
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
  Avatar, AvatarImage, AvatarFallback,
  Badge,
  Button,
  Calendar,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
  Checkbox,
  Collapsible, CollapsibleContent, CollapsibleTrigger,
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator,
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger,
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription,
  Input,
  Label,
  Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger,
  Popover, PopoverContent, PopoverTrigger,
  Progress,
  RadioGroup, RadioGroupItem,
  ScrollArea, ScrollBar,
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
  Separator,
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
  Skeleton,
  Slider,
  Switch,
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
  Tabs, TabsContent, TabsList, TabsTrigger,
  Textarea,
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
  // Chart components
  ChartContainer, ChartTooltip, ChartTooltipContent, BarChart, CartesianGrid, XAxis, Bar,
  // Icons
  Plus, History, Send, Loader2, Code, Clipboard,
  // Hooks and other utilities
  useState, useMemo, useForm, z, zodResolver
};

const transformJsx = (jsx: string) => {
  try {
    const wrappedJsx = `<>${jsx}</>`;
    const { code } = Babel.transform(wrappedJsx, {
      presets: ['react'],
    });
    return code;
  } catch (error) {
    console.error("JSX transformation error:", error);
    throw new Error("Invalid JSX generated by AI.");
  }
};


const DynamicComponent = ({ jsx }: { jsx: string }) => {
  const transformedCode = useMemo(() => transformJsx(jsx), [jsx]);

  const Component = useMemo(() => {
    const scope = componentScope;
    // eslint-disable-next-line no-new-func
    const fn = new Function(...Object.keys(scope), `return ${transformedCode}`);
    return fn(...Object.values(scope));
  }, [transformedCode]);

  return <>{Component}</>;
};


export default function LayoutCreatorPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const lastAiResponse = messages.filter(m => m.role === 'model').pop();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    
    const newMessages: Message[] = [
        ...messages,
        { role: 'user', content: values.prompt }
    ];
    setMessages(newMessages);

    try {
      // The history needs to be in a slightly different format for the AI
      const historyForAI = newMessages.map(m => ({
          role: m.role,
          content: [{ text: m.content }]
      }));

      const result = await generateLayout({ 
          history: historyForAI,
          prompt: values.prompt 
      });
      
      setMessages(prev => [...prev, { role: 'model', content: result.jsx }]);
      form.reset();

    } catch (e: any) {
      console.error(e);
      setError(e.message || 'An error occurred while generating the layout. Please try again.');
      // remove the user message if the AI fails
       setMessages(prev => prev.slice(0, prev.length -1));
    } finally {
      setIsLoading(false);
    }
  }
  
  function handleNewLayout() {
    setMessages([]);
    setError(null);
  }

  const handleCopyCode = () => {
    if (lastAiResponse) {
      navigator.clipboard.writeText(lastAiResponse.content);
      toast({
        title: "Code Copied!",
        description: "The JSX code has been copied to your clipboard.",
      });
    }
  };

  const displayContent = () => {
    if (isLoading && !lastAiResponse) {
        return (
            <div className="flex flex-col items-center justify-center text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin mb-2" />
                <p>Generating layout...</p>
            </div>
        );
    }
    if (error) {
        return <p className="text-destructive-foreground bg-destructive/20 p-4 rounded-md">{error}</p>
    }
    if (lastAiResponse) {
        return (
          <div className="w-full h-full flex items-center justify-center relative">
             {isLoading && (
                <div className="absolute inset-0 bg-background/50 flex items-center justify-center z-10">
                     <Loader2 className="h-8 w-8 animate-spin" />
                </div>
            )}
            <TooltipProvider>
              <DynamicComponent jsx={lastAiResponse.content} />
            </TooltipProvider>
          </div>
        );
    }
    return <p className="text-muted-foreground">Generated layout will appear here.</p>;
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-2xl font-bold mb-4">Create Layout with AI</h2>
        <div className="w-full h-full min-h-[50vh] rounded-lg border border-dashed border-border bg-card flex items-center justify-center p-4 relative">
          {displayContent()}
        </div>
      </div>

      <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm p-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder="e.g., 'A login form with email, password, and a submit button.'"
                        autoComplete="off"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                <span className="sr-only">Send</span>
              </Button>
               {lastAiResponse && (
                <Dialog>
                    <DialogTrigger asChild>
                        <Button type="button" variant="outline" size="icon">
                            <Code className="h-4 w-4" />
                            <span className="sr-only">Get Code</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
                        <DialogHeader>
                          <DialogTitle>Generated JSX Code</DialogTitle>
                          <DialogDescription>
                              Copy the code below to use in your project.
                          </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="h-full rounded-md bg-muted border p-4">
                            <pre className="text-sm">
                                <code>{lastAiResponse.content}</code>
                            </pre>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                        <DialogFooter>
                            <Button onClick={handleCopyCode}>
                                <Clipboard className="mr-2 h-4 w-4" />
                                Copy Code
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
              )}
              <Button type="button" variant="outline" size="icon" disabled={isLoading || messages.length === 0} onClick={handleNewLayout}>
                  <FilePlus className="h-4 w-4" />
                  <span className="sr-only">New Layout</span>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" disabled={isLoading || messages.length === 0}>
                        <History className="h-4 w-4" />
                        <span className="sr-only">View History</span>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Prompt History</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4 space-y-4">
                        {messages.filter(m => m.role === 'user').map((message, index) => (
                            <div key={index} className="p-3 bg-muted rounded-md text-sm">
                                {message.content}
                            </div>
                        ))}
                    </div>
                </SheetContent>
              </Sheet>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
