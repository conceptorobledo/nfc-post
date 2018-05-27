import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';
import { withFormik } from 'formik';

const LoginForm = () => (
    <View>
        <TextInput
            onChangeText={text => props.setFieldValue('email', text)}
            value={props.values.email}
        />
    </View>
);

export default LoginForm;