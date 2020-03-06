import React from 'react';
import {
    View, TouchableOpacity, TextInput, Platform, Text, Alert

} from 'react-native';
import styles from '../styles/registerFormstyle';
import { Field, reduxForm } from 'redux-form';
import TextinputCommon from '../components/textinputcommon';


const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.phone) {
        errors.phone = 'Required'
    } else if (values.phone.length < 8) {
        errors.phone = 'length is greater than eight'
    } else if (isNaN(Number(values.phone))) {
        errors.phone = 'Must be a number.'
    }
    return errors
}

const myAction = values => {
    console.log('values', values);
    alert('value' + values.email)
}

const RegisterForm = props => {

    const { handleSubmit } = props;


    return (
        // <form onSubmit={handleSubmit}>
        <View>
            <View style={{ marginBottom: 25 }}>
                <Field name="email" placeholder={'email'} component={TextinputCommon}
                ></Field>
            </View>
            <View style={{ marginBottom: 25 }}>
                <Field name="password"
                    placeholder={'password'}
                    component={TextinputCommon}
                ></Field>
            </View>
            <View style={{ marginBottom: 25 }}>
                <Field name="phone"
                    placeholder={'phone'}
                    component={TextinputCommon}
                ></Field>
            </View>
            <View>
                <TouchableOpacity
                    style={{ minWidth: 150, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2AC062', display: 'flex', borderRadius: 5, shadowColor: '#2AC062', shadowOpacity: 0.4, shadowRadius: 20, shadowOffset: { height: 10, width: 5 }, }}
                    onPress={handleSubmit(myAction)}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>

        // </form>
    )
}


// const withnew = 

export default reduxForm({
    form: 'Test',
    validate,
})(RegisterForm);