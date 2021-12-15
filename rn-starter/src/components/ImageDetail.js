import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// const ImageDetail = props => {
const ImageDetail = ({ imageSource, title, imageRating }) => {
    // console.log(props)
    return (
        <View>
            <Image
                style={styles.image}
                source={imageSource}
            />
            {/* <Text>Title - {props.title}</Text> if argument is props */}
            <Text>Title - {title}</Text>
            <Text>Rating - {imageRating}/10</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 160,
    }
});

export default ImageDetail;