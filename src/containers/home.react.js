import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Home = props => (
  <div>
  <Grid>
    <Grid.Row centered columns={6}>
      <Grid.Column>
        <h1>Bobs Bananas</h1>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)

export default Home
