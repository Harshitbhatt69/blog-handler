import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return <BlogPostForm />;
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

export default EditScreen;
