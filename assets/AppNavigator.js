import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegisterForm from '../src/screens/registerForm';
import MainScreen from '../src/screens/MainScreen'

const AutoStack = createStackNavigator({
    MainScreen: { screen: MainScreen },
    RegisterForm: { screen: RegisterForm },
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