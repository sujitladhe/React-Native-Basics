import React from 'react'
import { Text, StyleSheet, View } from 'react-native';

export const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewStyle1}></View>
            <View style={styles.viewStyle2}></View>
            <View style={styles.viewStyle3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 300,
        borderWidth: 1,
        borderColor: 'red'
        
    },
    viewStyle1: {
        backgroundColor: 'blue',
        height: 100,
        width: 100
    },
    viewStyle2: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
        top: 100
    },
    viewStyle3: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
    }
});
