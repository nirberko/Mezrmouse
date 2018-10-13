<p align="center">
  <img alt="Mezrmouse" src="https://image.ibb.co/fhYWuU/1286733997-982bf490-c49b-41dc-80e9-b7b4fc7a22db.png">
</p>

Measure distance between your mouse and object to make an interactive user interface

<p align="center">
  <a href="https://www.npmjs.com/package/mezrmouse">
    <img alt= "NPM" src="https://img.shields.io/npm/v/mezrmouse.svg">
  </a>
  <a href="https://github.com/moment/moment/blob/develop/LICENSE">
    <img alt= "MIT License" src="http://img.shields.io/badge/license-MIT-blue.svg?style=flat">
  </a>
  <a href="https://standardjs.com">
    <img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg">
  </a>
  <a href="https://travis-ci.org/NirBerko/Mezrmouse">
    <img alt= "Build Status" src="https://travis-ci.org/NirBerko/Mezrmouse.svg?branch=master">
  </a>
  </a>
  <a href="https://app.fossa.io/projects/git%2Bgithub.com%2FNirBerko%2FMezrmouse?ref=badge_shield">
    <img alt= "FOSSA Status" src="https://app.fossa.io/api/projects/git%2Bgithub.com%2FNirBerko%2FMezrmouse.svg?type=shield">
  </a>
</p>

<p align="center">
  <img alt="Mezrmouse" src="https://image.ibb.co/hNaytp/carbon-1.png">
</p>

## Examples
### [Demo](https://nirberko.github.io/Mezrmouse/)
<img alt="Mezrmouse" src="https://image.ibb.co/kDgGB9/ezgif-4-c58b04b3e466.gif">

## Install

```bash
npm install --save mezrmouse
```

## Usage

```jsx
import React, { Component } from 'react'

import Measure from 'mezrmouse'

class Example extends Component {
  render () {
    return (
      <Measure distance={100} onCloseUp={(percent) => this.distance = percent}>
        <button>Click me</button>
      </Measure>
    )
  }
}
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`distance`|number|yes|| The distance the mouse will be from the node so onCloseUp (func) will trigger
`onCloseUp`|func|no|| Triggered when the mouse is close to the node - retunes distance by percentages
-----

## License

Mezrmouse is freely distributable under the terms of the [MIT license](https://github.com/moment/moment/blob/develop/LICENSE).
