import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import Sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: "@mdx-js/react",
      development: command === "serve",
    }),
    react(),
    mode === "development" && componentTagger(),
    Sitemap({
      hostname: "https://itsmomapproved.com",
      generateRobotsTxt: false,
      dynamicRoutes: [
        "/blog",
        "/blog/best-sleep-products-2026",
        "/blog/feeding-essentials-guide",
        "/blog/hatch-rest-vs-hatch-rest-plus",
        "/blog/ergobaby-vs-solly-baby-wrap",
        "/blog/nanit-vs-owlet",
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
