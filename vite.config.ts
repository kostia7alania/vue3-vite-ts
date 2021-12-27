import path from 'path';

// import vueI18n from '@intlify/vite-plugin-vue-i18n';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import mkcert from 'vite-plugin-mkcert';
import viteSvgIcons from 'vite-plugin-svg-icons';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mkcert(),
    vue(),
    svgLoader(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    visualizer({
      filename: './tmp/bundle-visualizer.html',
    }),
    VitePluginHtmlEnv(),
    // vueI18n({
    //   // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
    //   compositionOnly: false,

    //   // you need to set i18n resource including paths !
    //   include: path.resolve(__dirname, './src/locales/**'),
    // }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    open: true,
    https: true,
    proxy: {
      '/api': {
        target: 'https://primelightou.com',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
