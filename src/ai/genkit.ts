import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {plugin as nextPlugin} from '@genkit-ai/next';

export const ai = genkit({
  plugins: [googleAI(), nextPlugin()],
  model: 'googleai/gemini-2.5-flash',
});
