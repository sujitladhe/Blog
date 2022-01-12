import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';

export const IndexScreen = () => {
    const BlogPosts = useContext(BlogContext);
    return (
        <View>
        <Text>IndexScreen</Text>
        <FlatList 
            data={BlogPosts}
            keyExtractor={(BlogPost)=>BlogPost.title}
            renderItem={({item})=>{
                return(
                    <Text>{item.title}</Text>
                )
            }}
        />
        </View>
    )
}

const styles = StyleSheet.create({});
  