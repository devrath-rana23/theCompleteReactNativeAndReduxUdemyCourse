import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <SafeAreaProvider>
            <View>
                <ImageDetail
                    title='Forest'
                    imageSource={require('../../assets/forest.jpg')}
                    imageRating={1}
                />
                <ImageDetail
                    title='Beach'
                    imageSource={require('../../assets/beach.jpg')}
                    imageRating='3'
                />
                <ImageDetail
                    title='Mountain'
                    imageSource={require('../../assets/mountain.jpg')}
                    imageRating='10'
                />
                <ImageDetail
                    title='Lake'
                    imageSource={require('../../assets/lake.jpeg')}
                    imageRating='7'
                />
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;