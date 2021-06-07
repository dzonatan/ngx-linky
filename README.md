# ngx-linky

![CI](https://github.com/dzonatan/ngx-linky/workflows/CI/badge.svg)
[![npm version](https://badge.fury.io/js/ngx-linky.svg)](https://badge.fury.io/js/ngx-linky)

**Angular** pipe to find links in text input and turn them into html links. It was called the same "linky" in **ngSanitize** module of **AngularJs (first)**. Since **Angular** does not have such pipe built in therefore this repo was created.

This is just a wrapper for [Autolinker.js](https://github.com/gregjacobs/Autolinker.js) so all issues and feature requests related to **autolinker** should go to their [issues](https://github.com/gregjacobs/Autolinker.js/issues)!


## Installation

`npm install --save ngx-linky autolinker`

Import `LinkyModule` or manually declare `LinkyPipe` in your app module.
```ts
import { LinkyModule } from 'ngx-linky';

@NgModule({
  imports: [
    LinkyModule
  ]
})
class YourAppModule {}
```

## Usage

Use **linky** pipe with **[innerHTML]** (or outerHTML, depends on you) binding to get HTML correctly rendered:

`<span [innerHTML]="yourText | linky"></span>`

You can pass any [autolinker option](https://github.com/gregjacobs/Autolinker.js#options) as a second pipe argument. For ex.:

`<span [innerHTML]="myText | linky:{newWindow: false}"></span>`

## License

MIT
