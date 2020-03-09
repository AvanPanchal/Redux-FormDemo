import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { connect } from 'react-redux'

class WelcomeScreen extends Component {



    render() {
        console.log("Welcome Form Props :  ", this.props)
        const { data } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.txtstyle}>Email ID :  {data.email}</Text>
                <Text style={styles.txtstyle}>Phone No : {data.phone}</Text>
            </View>
        );
    }
}

const mapstatetoprops = state => {
    return {
        data: state.form.Test.values,
    }
}
export default connect(mapstatetoprops, null)(WelcomeScreen);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtstyle: {
        fontSize: 25,
        color: '#E86606'
    },
});