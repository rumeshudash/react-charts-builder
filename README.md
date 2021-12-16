# react-charts-builder

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-charts-builder.svg)](https://www.npmjs.com/package/react-charts-builder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-charts-builder
```

## Usage

```tsx
import React, { Component } from 'react'

import { ChartBuilder } from 'react-charts-builder'
import 'react-charts-builder/dist/index.css'

class Example extends Component {
  const demoChartData = [
    {
        name: 'Sun',
        date: '1 Dec',
        sales: 2400,
        profit: 400,
    },
    ...
  ]

  render() {
    return (
      <ChartBuilder
          data={demoChartData}
      />
    )
  }
}
```

## License

MIT © [rumeshudash](https://github.com/rumeshudash)
