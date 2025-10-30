# **App Name**: Live Style Guide Editor

## Core Features:

- Color Palette Table: Display a table of semantic color tokens (light/dark) with editable color codes. The table includes columns for Token name, Role, Light color, and Dark color.
- UI Components Preview: Display a preview of various UI components (buttons, inputs, tables, cards, modals, alerts, sidebar, header) using the defined color tokens. These components should visually update in real-time when the color codes in the table are changed. UI components will include only properties in the user's styleguide
- Theme Switch: Implement a light/dark mode toggle that applies the corresponding color tokens to the UI components. Utilize `data-theme` attribute to manage theme scopes as defined in the user's styleguide.
- CSS Variable Generation: Generate CSS code with semantic color tokens for light and dark themes based on the color codes entered in the table.
- Tailwind Configuration Generator: Generate Tailwind CSS configuration file (`tailwind.config.js`) based on the defined color tokens, border radii, and box shadows as defined in the user's styleguide.  This configuration file should dynamically update based on changes to the UI.
- Code Export: Allow users to export the generated CSS variables and Tailwind CSS configuration as downloadable files. In addition users should be able to export UI code to their local projects.

## Style Guidelines:

- Primary color: A cool blue (#1E3A8A in light mode, #60A5FA in dark mode) for a calm and professional feel.
- Background color: Very light gray (#F8FAFC in light mode, #0B1220 in dark mode) for a clean and modern look.
- Accent color: Cyan (#06B6D4 in light mode, #22D3EE in dark mode) to highlight interactive elements.
- Font: 'Inter', a sans-serif font, for clean readability; it is suitable for headlines and body text. 
- Utilize a clean and consistent layout with adequate spacing and alignment for enhanced readability and usability.
- Use simple, minimalist icons to represent different actions and categories. Icons should adapt to the selected theme (light or dark) to ensure consistent visibility.
- Implement subtle transitions and animations to provide feedback and enhance the user experience. For example, color changes on hover or button clicks should be smooth and noticeable.