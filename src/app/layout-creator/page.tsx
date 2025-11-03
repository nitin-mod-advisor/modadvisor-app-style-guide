
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { generateLayout } from '@/ai/flows/generate-layout';

const formSchema = z.object({
  prompt: z.string().min(1, { message: 'Prompt cannot be empty.' }),
});

export default function LayoutCreatorPage() {
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedContent(null);
    setError(null);
    try {
      const result = await generateLayout({ prompt: values.prompt });
      setGeneratedContent(result.jsx);
    } catch (e: any) {
      console.error(e);
      setError('An error occurred while generating the layout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  const displayContent = () => {
    if (isLoading) {
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
    if (generatedContent) {
        return <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: generatedContent }} />
    }
    return <p className="text-muted-foreground">Generated layout will appear here.</p>;
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-2xl font-bold mb-4">Create Layout with AI</h2>
        <div className="w-full h-full min-h-[50vh] rounded-lg border border-dashed border-border bg-card flex items-center justify-center p-4">
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
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
