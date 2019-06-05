import React from 'react'
import { View, Button } from 'react-native'
import { login } from '../store/actions/userActions';
import { connect } from 'react-redux'
import LoginComponent from './LoginComponent';

class SignInScreen extends React.PureComponent {

  handleLoginPress = () => {
    this.props.login()
  };

  render() {
    return (
      <LoginComponent
        handleLoginPress={this.handleLoginPress}
      />
      );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login())
})

export default connect(null, mapDispatchToProps)(SignInScreen)