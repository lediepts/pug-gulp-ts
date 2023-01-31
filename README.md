# TailwindCSS - Gulp - SASS

 [[_TOC_]]

## Install

```cmd:
  npm install
```

## Config file

### TailwindCSS

  > ~/tailwind.config.js

### GULP

  > ~/gulpfile.js

## Browsers that we support

- defaults
- not IE 11
- maintained node versions

## Usage

### Directory

```:
|-- rootFolder
    |-- .browserslistrc
    |-- .gitignore
    |-- gulpfile.js
    |-- package-lock.json
    |-- package.json
    |-- readme.md
    |-- tailwind.config.js
    |-- src
        |-- index.html
        |-- scss
        |   |-- main.scss
        |-- img
        |-- js
            |-- main.js
            |-- libs
                |-- index.js
    |-- dist (development)
    |-- build (production)
```

### Scripts

- Development

  > npm run dev

- Build Production

  > npm run build

## VSCode Extension

### Tailwind CSS IntelliSense

クラス名の予測・補完をしてくれる拡張機能

1. install

![Extension](./src/img/sc1.png =500x)

 2. Class in html

- windowPC のキーボードで使いたいものをちょっと入力するとctrl+space下にPanelが表示される

![class](./src/img/sc2.png =500x)

- ※クラス名は [tailwindcss-document](https://tailwindcss.com/docs/text-color) に参考する

![css](./src//img/sc3.png =500x)

### Tailwind Docs

`Ctrl + Shift + P`でコマンドパレットを開き、
vsCodeから直接ドキュメントを検索することができる拡張機能

![tailwind Docs](./src/img/preview.gif  =600x)

## Reference

- 公式ドキュメント

https://tailwindcss.com/

- チートシート

https://tailwindcomponents.com/cheatsheet/

- TailwindCSS作者のブログ記事

https://adamwathan.me/css-utility-classes-and-separation-of-concerns/

(日本語翻訳: https://yuheiy.hatenablog.com/entry/2020/05/25/021342)

- keyframeアニメーションGenerator

https://tail-animista.vercel.app/play/text/tracking-in/tracking-in-expand

(使用方法: https://zenn.dev/angelecho/articles/f171ca2b3b1f6a)

- List color code

![colors](./src/img/colors.png)
