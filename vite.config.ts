import { defineConfig } from "vite";
import path from "path";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import type { Plugin } from "vite";
import Components from "unplugin-vue-components/vite";
import VueMacros from "unplugin-vue-macros/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { getCompName } from "./packages/utils/getCompName";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const common = {
    plugins: [
      VueMacros({
        plugins: {
          vue: vue(),
          vueJsx: vueJsx(),
        },
      }) as unknown as Plugin,
    ],
    resolve: {
      extensions: [".jsx", ".ts", ".tsx", ".json", ".vue"],
      alias: {
        "@": path.resolve("./src"),
      },
    },
    // 控制台打印
    // logLevel: "silent",
    server: {
      hmr: {
        overlay: false,
      },
      host: "0.0.0.0",
      port: 3001,
      // 是否自动在浏览器打开
      open: false,
      // 是否开启 https
      https: false,
      proxy: {
        "/zooyue": {
          target: "http://localhost:3333",
          changeOrigin: true,
        },
      },
    },
  };
  if (mode === "lib") {
    common.plugins = [
      ...common.plugins,
      dts({
        entryRoot: ".",
        noEmitOnError: true,
        skipDiagnostics: false,
        outputDir: [resolve(__dirname, "./es"), resolve(__dirname, "./lib")],
        //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
        tsConfigFilePath: "./tsconfig.json",
        compilerOptions: {
          types: [],
        },
        beforeWriteFile: (filePath, content) => {
          let upContent = content
            .replace(/'..\/typings/gi, "'./typings")
            .replace(/\/..\/typings/gi, "/typings");
          // 修改typings文件夹中的内容
          if (filePath.includes("\\typings")) {
            upContent = upContent.replace(/\/packages/g, "");
          }
          return {
            // 处理文件名
            filePath: filePath.replace("\\packages", ""),
            // 处理typings路径
            content: upContent,
          };
        },
      }),
      Components({
        globs: ["**/src/*.{tsx|vue}"],
        include: [/\.(vue|tsx)$/, /\.vue\?vue/],
      }),
    ];
    return {
      ...common,
      build: {
        target: "modules",
        //打包文件目录
        // sourcemap: 'hidden',
        //压缩
        minify: true,
        //css分离
        // cssCodeSplit: true,
        rollupOptions: {
          //忽略打包vue文件
          external: ["vue", /^(@e|e)lement-plus*/],
          input: ["./packages"],
          output: [
            {
              format: "es",
              //不用打包成.es.js,这里我们想把它打包成.js
              entryFileNames: "[name].mjs",
              //让打包目录和我们目录对应
              preserveModules: true,
              exports: "named",
              //配置打包根目录
              dir: resolve(__dirname, "./es"),
              compact: true,
              sourcemap: true,
            },
            {
              format: "cjs",
              //不用打包成.cjs
              entryFileNames: "[name].js",
              //让打包目录和我们目录对应
              preserveModules: true,
              exports: "named",
              //配置打包根目录
              dir: resolve(__dirname, "./lib"),
            },
          ],
        },
        lib: {
          // 必须设置  但是上面的input优先
          entry: "./packages",
          name: "lzooxyue",
          fileName: (format) => `vite-lib.${format}.js`,
        },
      },
    };
  } else {
    common.plugins = [
      ...common.plugins,
      Components({
        include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
      }),
    ];
    return common;
  }
});

// {
//   plugins: [
//     VueMacros({
//       plugins: {
//         vue: vue(),
//         // vueJsx: VueJsx(), // if needed
//       },
//     }),
//   ],
//   build: {
//     sourcemap: true,
//     outDir: "./dist/local",
//     assetsDir: "./dist",
//     lib: {
//       entry: resolve(__dirname, "packages/components/index.ts"),
//       name: "index",
//       fileName: (format) => `index.${format}.js`,
//     },
//     rollupOptions: {
//       external: ["vue"],
//       output: {
//         inlineDynamicImports: false,
//         manualChunks: (filepath) => {
//           if (filepath.includes("node_modules")) {
//             return "vendor";
//           }
//         },
//         globals: {
//           vue: "Vue",
//         },
//       },
//     },
//   },
// }
