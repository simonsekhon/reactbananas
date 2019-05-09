import React, { Component } from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AnalyzeTable from '../components/table.react';
import {
  getMetrics,
} from '../actions/actions';
class AnalyzeOrder extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.analyze();
  }

  render() {
    return (
      <div>
        <AnalyzeTable {...this.props}  />
      </div>
    )
  }
}

const mapStateToProps = ({ bananaReducer }) => ({
  total: bananaReducer.data.bananas,
  expiredBananas: bananaReducer.data.exBananas,
  unExBananas: bananaReducer.data.unExBananas,
  soldBananas: bananaReducer.data.soldBananas,
})

const mapDispatchToProps = dispatch => {
  return {
    analyze: () => dispatch(getMetrics())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnalyzeOrder)
