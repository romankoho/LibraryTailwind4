import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { UserConfigExport } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [react(), tailwindcss()]
  })
}
// https://vitejs.dev/config/
export default app
