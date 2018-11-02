# @bamblehorse/tiny

[![npm (scoped)](https://img.shields.io/npm/v/vadimtrify.svg)](https://www.npmjs.com/package/vadimtrify)

Removes all spaces from a string.

## Install

```
$ npm install vadimtrify
```

## Usage

```js
const vadim = require("vadimtrify");

vadim("I want everything from you");
//=> "Iwanteverythingfromyou"

vadim(1337);
//=> Uncaught TypeError: Vadim wants a string!
//    at vadim (<anonymous>:2:41)
//    at <anonymous>:1:1
```