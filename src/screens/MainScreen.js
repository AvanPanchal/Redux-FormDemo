import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import RegisterForm from './registerForm'

class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <RegisterForm />
            </View>
        );
    }
}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});