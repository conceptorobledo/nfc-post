import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';
import { withFormik } from 'formik';

const LoginForm = () => (
    <View>
        <TextInput
        />
        <Button onPress={this.handleSubmit}/>
    </View>
);

export default LoginForm;