import React , {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'; 


const IndexScreen = () => {

    const {state, addBlogPost} = useContext(Context);

    return (    //onpress can be like {() => addBlogPost()} also
        <View>
        <Button title= "Add Posts" onPress = {addBlogPost}/>    
        <FlatList
        data = {state}
        keyExtractor = {blogPost => blogPost.title}
        renderItem = {({ item }) => {
            return (
            <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <Feather name="trash" style={styles.icon} />
            </View>
            );
       }
    }
        />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24,
        color: 'black'
    }
});

export default IndexScreen;