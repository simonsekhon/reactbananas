import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import FormField from '../components/form.react'
import {
  buyBananas,
  sellBananas,
} from '../actions/actions';

class BananasTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bananas: 0,
      date: null,
      errMsg: null,
    };
    this.changeState.bind(this);
  }

  changeState(e) {
    e.target.name === 'bananas' ? this.setState({[e.target.name]: Number(e.target.value)}) : this.setState({[e.target.name]: e.target.value});
  }

  orderBanana () {
    const dateFormat = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    if(dateFormat.test(this.state.date) && typeof this.state.bananas === 'number') {
      if(this.props.location.pathname === '/buy') {
      this.props.buyBananas(this.state.bananas, this.state.date);
    } else {
      this.props.sellBananas(this.state.bananas, this.state.date);
    }
      this.setState({errMsg: ""});
    } else {
      this.setState({errMsg: 'Error. Please put in correct information'});
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row centered columns={6}>
            <Grid.Column>
              <FormField item={this.props.location.pathname === '/buy' ? "BUY ORDER" : "SELL ORDER"} submit={() => this.orderBanana()} change={(e) => this.changeState(e)}/>
              <p style={{color:"red"}}>{this.state.errMsg}</p>
              <p style={{color:"green"}}>{this.props.success}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({ bananaReducer  }) => ({
 success: bananaReducer.ui.success,
});

const mapDispatchToProps = dispatch => {
  return {
      buyBananas: (count, date) => dispatch(buyBananas(count, date)),
      sellBananas: (count, date) => dispatch(sellBananas(count, date)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BananasTransaction)
