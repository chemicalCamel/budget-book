import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '127.0.0.1'
    },
    plugins: [svelte()],
    resolve: {
        alias: {
            $components: path.resolve('src/components'),
            $schemas: path.resolve('src/schemas'),
            $stores: path.resolve('src/stores'),
        },
    },
});
