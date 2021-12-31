import React, {useState} from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';

export const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <View>
        <Text>Enter Password: </Text>
        <TextInput style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={(newText) => setPassword(newText)}
        />
        {password.length < 5? <Text>The Password Should be 5 characters long</Text> :
            <Text>Your Password Is : {password}</Text>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1
    }
});