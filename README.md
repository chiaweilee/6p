# [Create-a](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/create-a/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/create-a.svg?style=flat)](https://www.npmjs.com/package/create-a) [![npm downloads](https://img.shields.io/npm/dm/create-a.svg)](https://npmcharts.com/compare/create-a?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Create project using the command line.

## Usage

```bash
$ yarn create a [projectName]
```

## Boilerplates

* `react-component` - Create a React Component, base on umi with umd and esm build.

## Usage Example

```bash
$ yarn create a

? Select the boilerplate type (Use arrow keys)
❯ react-component     - Create a React Component. (React + Umi).
  xxxxx               - Create a xxxxxxx.
  xxxxxxx             - Create a xxxxxxxxxxxxxx.
  xxxxxx              - Create a xxxxxxxx.

? Do you want to use typescript? (y/N)

? What functionality do you want to enable? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◯ antd
 ◯ dva
 ◯ code splitting
 ◯ dll

  create xxx/package.json
  create xxx/.gitignore
  create xxx/.editorconfig
  create xxx/.eslintrc
  create xxx/.prettierrc
  create xxx/.umirc.js
  create xxx/src/pages/index.tsx
  create xxx/src/index.tsx
  create xxx/tsconfig.json
  create xxx/typings.d.ts
 📋  Copied to clipboard, just use Ctrl+V
 ✨  File Generate Done
```

## FAQ

### `yarn create a` command failed

try

```bash
$ npm create a
```

or

```bash
$ npm install create-a -g
$ create-a
```

## LICENSE

MIT
