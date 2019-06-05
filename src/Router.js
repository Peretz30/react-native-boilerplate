import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import LoginScreen from './auth/LoginScreen';
import AuthLoadingScreen from './AuthLoadingScreen';

const AppStack = createStackNavigator({ Home: HomeScreen }, );
const AuthStack = createStackNavigator({ SignIn: LoginScreen }, {headerMode: 'none'});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
      initialRouteName: 'AuthLoading',
      
  }
));