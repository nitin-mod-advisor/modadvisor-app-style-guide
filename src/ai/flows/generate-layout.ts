
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
  history: z.array(z.any()).describe('The conversation history.'),
  prompt: z.string().describe('The user prompt describing the desired layout.'),
});
export type GenerateLayoutInput = z.infer<typeof GenerateLayoutInputSchema>;

const GenerateLayoutOutputSchema = z.object({
  jsx: z.string().describe('The generated JSX code as a single string. This should be a raw JSX string, without any surrounding markdown, explanation, or imports. Use TailwindCSS classes for styling, and leverage the available component names like <Card>, <Button>, etc.'),
});
export type GenerateLayoutOutput = z.infer<typeof GenerateLayoutOutputSchema>;

const componentExamples = `
// Correct: Use the component name directly.
<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Enter your credentials</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="user@example.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Sign In</Button>
  </CardFooter>
</Card>

// Correct: A simple button.
<Button variant="destructive">Delete Item</Button>

// Incorrect: Do not use HTML tags for components.
// <form> ... <input/> <button>Submit</button> </form>
`;

export async function generateLayout(input: GenerateLayoutInput): Promise<GenerateLayoutOutput> {
  return generateLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLayoutPrompt',
  input: { schema: GenerateLayoutInputSchema },
  output: { schema: GenerateLayoutOutputSchema },
  prompt: `You are an expert UI developer specializing in React, Tailwind CSS, and ShadCN UI components. Your task is to generate a single, production-quality block of JSX code based on a user's prompt. You will be given the conversation history, and the current user prompt.

  RULES:
  - You MUST return only raw, valid JSX code.
  - Do NOT include any markdown (\`\`\`jsx), explanations, or import statements.
  - You MUST use the component names like <Card>, <Button>, <Input>, and <Label> as shown in the examples. Do not use plain HTML elements like <form>, <button>, or <input> for these.
  - For professional layouts, wrap content in a <Card> component with <CardHeader>, <CardTitle>, <CardDescription>, <CardContent>, and <CardFooter>.
  - Use Tailwind CSS classes for ALL styling via the 'className' attribute.
  - For form elements, always use a <Label> for accessibility.
  - For icons, use 'lucide-react' components (e.g., <Plus className="w-4 h-4" />). You can assume lucide-react icons are available.
  - Ensure the layout is responsive and aesthetically pleasing.

  ---
  COMPONENT EXAMPLES:
  ---
  ${componentExamples}
  ---
  
  CONVERSATION HISTORY:
  {{#each history}}
    **{{role}}**: {{#each (lookup content 0)}} {{{this}}} {{/each}}
  {{/each}}
  
  USER PROMPT:
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
