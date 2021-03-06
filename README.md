# @appitsy/forms - Build Effortless Forms in React
[![NPM](https://img.shields.io/npm/v/@appitsy/forms)](https://www.npmjs.com/package/@appitsy/forms)
[![CI](https://github.com/appitsy/forms/workflows/CI/badge.svg)](https://github.com/appitsy/forms/actions?query=workflow%3ACI)
![npm type definitions](https://img.shields.io/npm/types/@appitsy/forms)
[![codecov](https://img.shields.io/codecov/c/github/appitsy/forms/main.svg?style=flat-square)](https://codecov.io/gh/appitsy/forms/)

<p align="center"><img height="60" src="https://github.com/appitsy/forms/blob/main/logo.ico?raw=true" /></p>

## Install

```bash
npm install --save @appitsy/forms
```

## Usage

1. Add Bootstrap bundle - CSS, JS & Popper JS to your application.
2. Build a form with [our form builder](https://appitsy.com/form-builder/)
3. Copy the form from 'Schema JSON' section.
4. Use it in your app like this:

```tsx
import React, { Component } from 'react'

import { Form } from '@appitsy/forms';

const formSchema = [
  {
    "type": "text",
    "name": "My Text Field",
    "display": {
      "label": "My First Text Field",
    }
  },
  {
    "text": "Submit",
    "style": "primary",
    "type": "button",
    "name": "submitButton"
  }
]

class Example extends Component {
  render() {
    return <Form
              schema={formSchema}
              data={data}
              onSubmit={data => submitForm(data)}
  }
}
```

## License

MIT © [AppItsy](https://github.com/appitsy)
