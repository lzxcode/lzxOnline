import path from "path";
import { defineConfig } from "vite";

import { MarkdownTransform } from "./.vitepress/utils/markdown-transform";



export default defineConfig(async ({ mode }) => {
  return {
    // plugins: [MarkdownTransform()],
  };
});
