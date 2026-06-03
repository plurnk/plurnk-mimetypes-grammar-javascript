// Pre-built tree-sitter-javascript WASM grammar for @plurnk/plurnk-mimetypes.
//
// This package ships exactly one thing: javascript.wasm at the package root.
// The framework's TreeSitterLanguageHandler resolves it at runtime via
// import.meta.resolve("@plurnk/plurnk-mimetypes-grammar-javascript/javascript.wasm").
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));

/** Absolute filesystem path to the bundled javascript.wasm. */
export const wasmPath = path.join(here, "javascript.wasm");
