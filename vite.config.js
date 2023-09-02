import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig( {
 

  
    base: "/my_Portfolio",
    plugins: [react()],
  
});

 // Determine the base path based on the mode
  // const base = mode === 'production' ? "/portfolio/" : "/";


