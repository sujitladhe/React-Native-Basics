import React from 'react'
import { Text, StyleSheet, View } from 'react-native';

export const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle1}>Child #1</Text>
        <Text style={styles.textStyle2}>Child #2</Text>
        <Text style={styles.textStyle3}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
    },
    textStyle1: {
        borderWidth: 1,
        borderColor: 'yellow',
    },
    textStyle2: {
        borderWidth: 1,
        borderColor: 'orange',
    },
    textStyle3: {
        borderWidth: 1,
        borderColor: 'red',
    }
});
