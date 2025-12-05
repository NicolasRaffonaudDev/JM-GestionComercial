import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';  // Import correcto – ahora aparece en autocomplete

export default defineConfig({
  plugins: [react(), tailwindcss()],
});