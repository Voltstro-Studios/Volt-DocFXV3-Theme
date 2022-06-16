# Volt-DocFXv3-Theme

[![License](https://img.shields.io/github/license/Voltstro-Studios/Volt-DocFXV3-Theme.svg)](/LICENSE)
[![Discord](https://img.shields.io/badge/Discord-Voltstro-7289da.svg?logo=discord)](https://discord.voltstro.dev) 
[![YouTube](https://img.shields.io/badge/Youtube-Voltstro-red.svg?logo=youtube)](https://www.youtube.com/Voltstro)

Voltstro's DocFX v3 theme. Based off DocFX's [official theme](https://github.com/docascode/template).

## Features

- It's dark theme
- Has some other customization features
- Idk, other stuff

## Getting Started

### Usage

#### Prerequisites

```
DocFX V3-Beta
```

Please ensure that you are using DocFX v3 beta. This theme will not work for DocFX v2 (the current stable one).

#### Installation

Change your `template` option to `https://gitlab.com/Voltstro-Studios/doctools/volt-docfxv3-theme-package`. Example:

```json
{
  "template": "https://gitlab.com/Voltstro-Studios/doctools/volt-docfxv3-theme-package",
  ...
}
```

Once you have your template set, build using `docfx build`. To show contributors on the pages, set the `DOCFX__SECRETS__GITHUB_TOKEN` environment variable to [a GitHub token](https://github.com/settings/tokens) with `repo` and `user user:email` scopes defined.

### Development

#### Prerequisites

```
Yarn
Node 17.x
DocFX V3-Beta
```

Please ensure that you are using DocFX v3 beta, and have it installed globally! This theme will not work for DocFX v2 (the current stable one).

#### Building

1. Run `yarn` in project root.
2. Run `yarn run start` to start the development environment.
3. When ready, run `yarn run build` and `yarn run prepare`. This will place your built template into `build/`.

## License

This project is licensed under the MIT license, see the [LICENSE](/LICENSE) file for details.

## Credits

Original theme by DocFX team.