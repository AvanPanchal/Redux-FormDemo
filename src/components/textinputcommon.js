import React from "react";
import {
    View,
    Text,
    StyleSheet, TextInput
} from "react-native";




const TextinputCommon = props => {
    const { placeholder, input: { onChange }, meta: { touched, error } } = props;
    return (
        <View>
            <TextInput style={styles.textinputstyle}
                placeholder={placeholder}
                onChangeText={onChange}
            >
            </TextInput>
            {touched && error && <Text style={{ color: 'red' }}> {error}</Text>}
            {/* <Text style={{ color: 'red' }}>{error}</Text> */}
        </View>)
}
export default TextinputCommon;

const styles = StyleSheet.create({
    textinputstyle: {
        borderWidth: 1,
        width: 300,
        height: 50,
        borderColor: 'black'
    }
});