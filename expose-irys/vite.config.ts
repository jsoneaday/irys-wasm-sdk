import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import typescript from "@rollup/plugin-typescript";
import path from "path";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

export default defineConfig({
  resolve: {
    alias: {
      process: "process/browser",
      path: "path-browserify",
      stream: "stream-browserify",
      os: "os-browserify",
    },
  },
  plugins: [
    wasm(),
    nodePolyfills({
      // To exclude specific polyfills, add them to this list.
      exclude: [
        "fs", // Excludes the polyfill for `fs` and `node:fs`.
        //"stream",
      ],
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      fileName: "main",
      formats: ["es", "cjs"],
    },
    target: "esnext",
    rollupOptions: {
      external: [
        "vite-plugin-node-polyfills/shims/buffer",
        "vite-plugin-node-polyfills/shims/global",
        "vite-plugin-node-polyfills/shims/process",
      ],
    },
  },
});
