import React from 'react'

import './assets/main.css'

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

export default App
