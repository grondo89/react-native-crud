import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { createProduct } from "../api/products/products";

const ProductForm = () => (
  <Formik
    initialValues={{
      name: "",
      quantity: "",
      price: "",
      imageUrl: "",
    }}
    onSubmit={async (values) => {
      await createProduct(values);
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleChange("name")}
          onBlur={handleBlur("name")}
          value={values.name}
          placeholder={"Product name"}
        />
        <TextInput
          style={styles.input}
          onChangeText={handleChange("price")}
          onBlur={handleBlur("price")}
          value={values.price}
          placeholder={"Product price"}
        />
        <TextInput
          style={styles.input}
          onChangeText={handleChange("quantity")}
          onBlur={handleBlur("quantity")}
          value={values.quantity}
          placeholder={"Product quantity"}
        />
        <TextInput
          style={styles.input}
          onChangeText={handleChange("imageUrl")}
          onBlur={handleBlur("imageUrl")}
          value={values.imageUrl}
          placeholder={"URL Link to product image"}
        />
        <Button onPress={() => handleSubmit()} title="Submit" />
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 100,

    // backgroundColor: "red",
    alignSelf: "center",
  },
  input: {
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
});

export default ProductForm;

// import React from 'react';
//  import { Formik, Form, Field, ErrorMessage } from 'formik';

//  const Basic = () => (
//    <div>
//      <h1>Any place in your app!</h1>
//      <Formik
//        initialValues={{ email: '', password: '' }}
//        validate={values => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = 'Required';
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = 'Invalid email address';
//          }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//          }, 400);
//        }}
//      >
//        {({ isSubmitting }) => (
//          <Form>
//            <Field type="email" name="email" />
//            <ErrorMessage name="email" component="div" />
//            <Field type="password" name="password" />
//            <ErrorMessage name="password" component="div" />
//            <button type="submit" disabled={isSubmitting}>
//              Submit
//            </button>
//          </Form>
//        )}
//      </Formik>
//    </div>
//  );

//  export default Basic
