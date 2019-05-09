import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { Menu, Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';

class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='Buy Order' active={activeItem === 'Buy Order'} onClick={this.props.changeBuy} />
          <Menu.Item
            name='Sell Order'
            active={activeItem === 'Sell Order'}
            onClick={this.props.changeSell}
          />
          <Menu.Item
            name='Analyze Orders'
            active={activeItem === 'Analyze Orders'}
            onClick={this.props.changeAnalyze}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='Home'
              active={activeItem === 'Home'}
              onClick={this.props.changeHome}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeBuy: () => push('/buy'),
      changeSell: () => push('/sell'),
      changeAnalyze: () => push('/analyze'),
      changeHome: () => push('/'),
    },
    dispatch
  )

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MenuExampleSecondaryPointing)
