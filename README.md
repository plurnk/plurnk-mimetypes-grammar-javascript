# @plurnk/plurnk-mimetypes-grammar-javascript

Pre-built `tree-sitter-javascript` WASM grammar for the [@plurnk/plurnk-mimetypes](https://github.com/plurnk/plurnk-mimetypes) framework.

## install

```
npm i @plurnk/plurnk-mimetypes-grammar-javascript
```

## what's in here

- **`javascript.wasm`** — pre-built from the pinned upstream [tree-sitter-javascript](https://github.com/tree-sitter/tree-sitter-javascript) commit (SHA in `.grammar-pin`)
- `scripts/build-wasm.mjs` — reproducible rebuild from the pinned source
- `scripts/verify-wasm.mjs` — CI byte-identical reproducibility check

Declares only `web-tree-sitter` as a peer — no native `tree-sitter`, no node-gyp.

## license

MIT. The bundled `javascript.wasm` is built from the upstream tree-sitter-javascript grammar; see the pinned commit for that project's attribution.
