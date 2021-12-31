import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ImageDetail } from "./components/ImageDetail";

export const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../assets/forest.jpg")}
        score={2}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../assets/beach.jpg")}
        score={1}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../assets/mountain.jpg")}
        score={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
