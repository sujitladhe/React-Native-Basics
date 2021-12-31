import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
  <Text style={styles.text}>Goto Components</Text>
  <Button 
    onPress={()=> {navigation.navigate('Components')}}
    title='Tap Here!Go to Components Demo'
  />
  <Button 
    title='Go to List Demo'
    onPress={() => {navigation.navigate('List')}}
  />
  <Button 
    title='Go to ImageScreen'
    onPress={() => {navigation.navigate('Image')}}
  />
  <Button 
    title='Go to Counter Demo'
    onPress={() => {navigation.navigate('Counter')}}
  />
  <Button 
    title='Go to Color Demo'
    onPress={() => {navigation.navigate('Color')}}
  />
    <Button 
    title='Go to Square Demo'
    onPress={() => {navigation.navigate('Square')}}
  />
  <Button 
    title='Go to TextScreen Demo'
    onPress={() => {navigation.navigate('Text')}}
  />
   <Button 
    title='Go to BoxScreen Demo'
    onPress={() => {navigation.navigate('Box')}}
  />
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
