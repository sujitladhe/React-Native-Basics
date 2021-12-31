import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'

export const ImageDetail = ({imageSource, title, score}) => {
    return (
        <View>
        <Image source= {imageSource}/>
        <Text>{title}</Text>
        <Text>Image score - {score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
});