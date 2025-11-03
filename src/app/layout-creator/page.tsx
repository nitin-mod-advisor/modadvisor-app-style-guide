
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  prompt: z.string().min(1, { message: 'Prompt cannot be empty.' }),
});

export default function LayoutCreatorPage() {
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // In the next step, we will call the AI flow here.
    // For now, we'll just simulate a delay and show a placeholder.
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setGeneratedContent(
      `<div class="text-center p-8 bg-muted rounded-lg">
        <h3 class="font-semibold text-lg">AI Response will be rendered here.</h3>
        <p class="text-muted-foreground text-sm mt-2">You entered: "${values.prompt}"</p>
      </div>`
    );
    setIsLoading(false);
    form.reset();
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-2xl font-bold mb-4">Create Layout with AI</h2>
        <div 
          className="w-full h-full min-h-[50vh] rounded-lg border border-dashed border-border bg-card flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: generatedContent || '<p class="text-muted-foreground">Generated layout will appear here.</p>' }}
        />
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
                        placeholder="e.g., 'Add a card with a header, description, and a primary button.'"
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
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
