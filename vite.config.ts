import path from 'path';

import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import viteSvgIcons from 'vite-plugin-svg-icons';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mkcert(),
    vue(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    visualizer({
      filename: './tmp/bundle-visualizer.html',
    }),
    VitePluginHtmlEnv(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    open: true,
    https: true,
    proxy: {
      '/api': {
        target: 'https://10.130.0.31:5602',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
