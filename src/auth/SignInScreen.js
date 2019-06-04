import React from 'react'
import {View,Button} from 'react-native'
import { login } from '../store/actions/userActions';
import {connect} from 'react-redux'

class SignInScreen extends React.PureComponent {
    static navigationOptions = {
      title: 'Please sign in',
    };
  
    render() {
      return (
        <View>
          <Button title="Sign in!" onPress={this._signInAsync} />
        </View>
      );
    }
  
    _signInAsync = async () => {
      this.props.login()
    };
  }
 
const mapDispatchToProps = (dispatch) => ({
     login: () => dispatch(login())
 }) 

export default connect(null,mapDispatchToProps)(SignInScreen)