import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'


export default defineConfig({
    plugins: [dts({ rollupTypes: true })],
    define: { 'process.env': {} },
    //   resolve: {
    //     alias: {
    //       '@': fileURLToPath(new URL('./src', import.meta.url))
    //     },
    //     extensions: [
    //       '.js',
    //       '.json',
    //       '.jsx',
    //       '.mjs',
    //       '.ts',
    //       '.tsx',
    //       '.vue',
    //     ],
    //   },
    server: {
        host: '0.0.0.0',
        port: 8080,
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'sesami-app-message',
            fileName: "index",
            formats: ["umd", "es"],
        },
    }
});
