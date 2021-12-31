<p align="center">
  <a href="https://github.com/edo92/Exo-Ui">
    <img width="300" src="https://raw.githubusercontent.com/edo92/markdowntestx/main/.assets/logo.png?token=AH5SSOJIC3GCJVNRKPZCIMLB2WXBQ">
  </a>
</p>

<h1 align="center">Exo Ui</h1>

</br>

<div align="center">

An enterprise-class UI design language and React UI library.

[![Known Vulnerabilities](https://snyk.io/test/github/edo92/Exo-Ui/badge.svg)](https://snyk.io/test/github/edo92/Exo-Ui)

</div>

</br>

## 🖥 &nbsp; Tested Environments

| <img src="https://raw.githubusercontent.com/edo92/Exo-Ui/main/assets/edge.png" alt="IE / Edge" width="24px" height="24px" /> <br> IE / Edge | <img src="https://raw.githubusercontent.com/edo92/Exo-Ui/main/assets/firefox.png" alt="Firefox" width="24px" height="24px" /> <br>Firefox | <img src="https://raw.githubusercontent.com/edo92/Exo-Ui/main/assets/chrome.png" alt="Chrome" width="24px" height="24px" /> <br> Chrome | <img src="https://raw.githubusercontent.com/edo92/Exo-Ui/main/assets/electron.png" alt="Electron" width="24px" height="24px" /> <br>Electron |
| ------------- | ------------- | ------------- | ------------- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions |
| ![example workflow](https://github.com/edo92/Exo-Ui/actions/workflows/edge.yml/badge.svg)  | ![example workflow](https://github.com/edo92/Exo-Ui/actions/workflows/firefox.yml/badge.svg)  | ![example workflow](https://github.com/edo92/Exo-Ui/actions/workflows/chrome.yml/badge.svg)  | ![example workflow](https://github.com/edo92/Exo-Ui/actions/workflows/electron.yml/badge.svg)  |

</br>

## 📦 &nbsp; Install

```
npm install exo-ui
```

```
yarn add exo-ui
```

</br>

## 🔨 &nbsp; Usage

```js
import { Button, DatePicker } from "exo-ui";

const App = () => (
  <>
    <Button color="primary">Click me</Button>
  </>
);
```

And set up layout styles manually:

```js
export { Layout } from "exo-ui";

const App = () => (
  <Layout>
    <Button color="primary">Click me</Button>
  </Layout>
);
```

</br>
