import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig, type UserConfigExport } from 'vite'
import dts from 'vite-plugin-dts'
import { name } from './package.json'
import tailwindcss from '@tailwindcss/vite'

const app = async (): Promise<UserConfigExport> => {
  /**
   * Removes everything before the last
   * @octocat/library-repo -> library-repo
   * vite-component-library-template -> vite-component-library-template
   */
  const formattedName = name.match(/[^/]+$/)?.[0] ?? name

  return defineConfig({
    plugins: [
      react(),
      tailwindcss(),
      dts({
        insertTypesEntry: true
      })
    ],
    build: {
      minify: true,
      lib: {
        entry: path.resolve(__dirname, 'src/lib/index.ts'),
        name: formattedName,
        formats: ['es', 'umd'],
        fileName: (format) => `${formattedName}.${format}.js`
      },
      rollupOptions: {
        external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss'],
        output: {
          globals: {
            react: 'React',
            'react/jsx-runtime': 'react/jsx-runtime',
            'react-dom': 'ReactDOM',
            tailwindcss: 'tailwindcss'
          }
        }
      }
    }
  })
}
// https://vitejs.dev/config/
export default app
