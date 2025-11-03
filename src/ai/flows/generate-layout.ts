
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
// The components below are already imported for you.
// Focus on generating only the JSX structure.

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

// Form Example (without logic)
<form className="space-y-8 w-full max-w-sm">
    <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="shadcn" />
        <p className="text-sm text-muted-foreground">This is your public display name.</p>
    </div>
    <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="user@example.com" />
    </div>
    <Button type="submit">Submit</Button>
</form>

// Button Example
<Button variant="default" size="default">Click Me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline" size="icon"><Plus /></Button>

// Input with Label Example
<div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="email-2">Email</Label>
    <Input type="email" id="email-2" placeholder="Email" />
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
  - For icons, use 'lucide-react' components (e.g., <Home className="w-4 h-4" />). You can assume lucide-react icons are available.
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
