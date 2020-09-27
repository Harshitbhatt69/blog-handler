import React , {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext'


const IndexScreen = () => {

    const {state, addBlogPost} = useContext(Context);

    return (    //onpress can be like {() => addBlogPost()} also
        <View>
        <Text>Index Screen</Text>
        <Button title= "Add Posts" onPress = {addBlogPost}/>    
        <FlatList
        data = {state}
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