import React , {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import BlogContext from '../context/BlogContext'


const IndexScreen = () => {

    const {data, addBlogPost} = useContext(BlogContext);

    return (    //onpress can be like {() => addBlogPost()} also
        <View>
        <Text>Index Screen</Text>
        <Button title= "Add Posts" onPress = {addBlogPost}/>    
        <FlatList
        data = {data}
        keyExtractor = {blogPost => blogPost.title}
        renderItem = {({ item }) => {
            return <Text>{item.title}</Text>;
        }}
        />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;