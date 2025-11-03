
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

const availableComponents = [
    'Accordion', 'Alert', 'AlertDialog', 'Avatar', 'Badge', 'Button', 'Calendar', 
    'Card', 'Carousel', 'Chart', 'Checkbox', 'Collapsible', 'Command', 'Dialog', 
    'DropdownMenu', 'Form', 'Input', 'Label', 'Menubar', 'Popover', 'Progress', 
    'RadioGroup', 'ScrollArea', 'Select', 'Separator', 'Sheet', 'Skeleton', 
    'Slider', 'Switch', 'Table', 'Tabs', 'Textarea', 'Toast', 'Tooltip'
];

export async function generateLayout(input: GenerateLayoutInput): Promise<GenerateLayoutOutput> {
  return generateLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLayoutPrompt',
  input: { schema: GenerateLayoutInputSchema },
  output: { schema: GenerateLayoutOutputSchema },
  prompt: `You are an expert web developer specializing in React, Tailwind CSS, and ShadCN UI components. Your task is to generate a single block of JSX code based on a user's prompt.

  RULES:
  - You MUST return only raw, valid JSX code. Do not include any markdown, explanations, or enclosing tags like \`\`\`jsx.
  - Use Tailwind CSS classes for all styling. Use the 'className' attribute.
  - You MUST use the following ShadCN UI components where appropriate. The components are already imported. Available components: ${availableComponents.join(', ')}.
  - For icons, use 'lucide-react' components (e.g., <Home className="w-4 h-4" />).
  - Ensure the layout is responsive.
  - Do not add any new library or dependencies.

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
