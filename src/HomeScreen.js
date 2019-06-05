import React from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import {logout} from './store/actions/userActions'

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to the app!',
    };
  
    render() {
      return (
        <View>
          <Button title="Show me more of the app" onPress={this._showMoreApp} />
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        </View>
      );
    }
  
    _showMoreApp = () => {
      this.props.navigation.navigate('Other');
    };
  
    _signOutAsync = () => {
      this.props.logout()
    };
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})
  
export default connect(null,mapDispatchToProps)(HomeScreen)