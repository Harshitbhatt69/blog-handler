import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

//this will crash while navigating from createscreen cuz we are not providing any initialValues from there, its from editscreen
const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

//help to save crashing from navigating creatscreen to blogscreen
BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 22,
    marginBottom: 10,
    margin: 5,
  },
});

export default BlogPostForm;
