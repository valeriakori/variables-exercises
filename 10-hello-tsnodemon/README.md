# How to compile and run your TypeScript on save

Initialize a yarn repository

```bash
yarn init
```

Add tsdemon package

```bash
yarn add tsnodemon
```

Add the following line to your `package.json`

```json
"scripts": {
  "start": "tsnodemon -x 'node build/index.js'"
}
```

Automatically run code on save using 