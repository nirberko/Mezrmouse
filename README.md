![Mezrmouse](https://image.ibb.co/fhYWuU/1286733997-982bf490-c49b-41dc-80e9-b7b4fc7a22db.png)

> measure distance between your mouse and object to make an interactive user interface

[![NPM](https://img.shields.io/npm/v/Mezrmouse.svg)](https://www.npmjs.com/package/Mezrmouse) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save Mezrmouse
```

## Usage

```jsx
import React, { Component } from 'react'

import Distance from 'mezrmouse'

class Example extends Component {
  render () {
    return (
      <Measure distance={100} onCloseUp={(percent) => this.distance = percent} />
    )
  }
}
```

## License

MIT © [NirBerko](https://github.com/NirBerko)
