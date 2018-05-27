import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';
import { withFormik } from 'formik';

const LoginForm = () => (
    <View>
        <TextInput
            onChangeText={text => props.setFieldValue('email', text)}
            value={props.values.email}
        />
        <Button onPress={props.handleSubmit}/>
    </View>
);

export default LoginForm;