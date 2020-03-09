import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { connect } from 'react-redux';
import { submit } from 'redux-form';
console.log('submit data', submit);

const displayUserdata = ({ props, submit }) => (

    <View style={styles.container}>
        <Text>submitdata:</Text>
    </View>
)

export default connect()(displayUserdata)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});