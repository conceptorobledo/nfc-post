import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';
import { withFormik } from 'formik';

const LoginForm = () => (
    <View>
        <TextInput
            onChangeText={text => this.setFieldValue('email', text)}
            value={this.values.email}
        />
        <Button onPress={this.handleSubmit}/>
    </View>
);

export default LoginForm;