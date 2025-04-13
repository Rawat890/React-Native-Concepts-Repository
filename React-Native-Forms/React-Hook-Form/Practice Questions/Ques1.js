import { View, Text, TextInput, Button } from "react-native-web";
import React from "react";
import { useFormik } from "formik";


function Ques1() {

  const formik = useFormik({
    initialValues: {
      user: '',
      password: ''
    },
    onSubmit: values => console.log(values),
    validate: (values) => {
      const errors = {}
    }
  })

}

export default Ques1;