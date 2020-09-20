# designx

> frontend design tool created using tailwind css tool

[![NPM](https://img.shields.io/npm/v/designx.svg)](https://www.npmjs.com/package/designx) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save designx
```

## Usage

```jsx
import React, { Component } from 'react'

import { Grid, Col } from 'designx'

const App = () => {
  return (
    <Grid>
      <Col col='6'>
        Create React Library Example{' '}
        <span role='img' aria-label='emoji'>
          😄
        </span>
      </Col>
      <Col col='6'>
        Hey
        <span role='img' aria-label='emoji'>
          😄
        </span>
      </Col>
    </Grid>
  )
}
```

## License

MIT © [ItsBhatt](https://github.com/ItsBhatt)
