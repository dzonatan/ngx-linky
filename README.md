# angular-linky
[![Build Status](https://travis-ci.org/dzonatan/angular-linky.svg?branch=master)](https://travis-ci.org/dzonatan/angular-linky)
[![Dependency Status](https://gemnasium.com/dzonatan/angular-linky.svg)](https://gemnasium.com/dzonatan/angular-linky)
[![npm version](https://badge.fury.io/js/angular-linky.svg)](https://badge.fury.io/js/angular-linky)

**Angular** pipe to find links in text input and turn them into html links. It was called the same "linky" in **ngSanitize** module of **AngularJs (first)**. Since **Angular** does not have such pipe built in therefore this repo was created.

This is just a wrapper for [Autolinker.js](https://github.com/gregjacobs/Autolinker.js) so all issues and feature requests related to **autolinker** should go to their [issues](https://github.com/gregjacobs/Autolinker.js/issues)!

**AoT ready.**


## Installation
`npm install --save angular-linky`

Import `LinkyModule` or manually declare `LinkyPipe` in your app module.
```ts
import { LinkyModule } from 'angular-linky';

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

`<span [innerHTML]="myText | linky:[{newWindow: false, twitter: false}]"></span>`

## License
MIT
