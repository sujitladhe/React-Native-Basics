import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

export const ListScreen = () => {
    const Frinds = [
        {name: "Frind #1", age: 12 },
        {name: "Frind #2", age: 21 },
        {name: "Frind #3", age: 24 },
        {name: "Frind #4", age: 43 },
        {name: "Frind #5", age: 44 },
        {name: "Frind #6", age: 34 },
        {name: "Frind #7", age: 43 },
        {name: "Frind #8", age: 56 },
        {name: "Frind #9", age: 56 },
        {name: "Frind #10", age: 55 }
    ];
    return (
        
        <FlatList 
        // horizontal
        // showsHorizontalScrollIndicator = {false}
        keyExtractor = {Frinds => (Frinds.name)}
        data = {Frinds} 
        renderItem={({item}) => {
            // If we write element into renderItem then element === { item: { name: 'Frind #1', index: 0}}
             // If we write item into renderItem then item === { name: 'Frind #1'}
            return (<Text style= {styles.textStyle}>{item.name} - Age {item.age}</Text>);
        }} 
        />
    )
}

const styles = StyleSheet.create ({
    textStyle: {
        marginVertical: 50
    }
});
