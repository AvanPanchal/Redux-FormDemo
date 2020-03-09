import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegisterForm from '../src/screens/registerForm';
import MainScreen from '../src/screens/MainScreen';
import WelcomeScreen from '../src/screens/WelcomeScreen'

const AutoStack = createStackNavigator({
    MainScreen: { screen: MainScreen },
    WelcomeScreen: { screen: WelcomeScreen },
}, {
    headerMode: 'none'
})

const AuthStack = createStackNavigator({
    AutoStack,
}, {
    headerMode: 'none'
})

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;