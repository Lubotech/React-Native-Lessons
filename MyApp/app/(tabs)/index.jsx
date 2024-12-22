import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import React from "react";

import { Link } from 'expo-router';

import icedCoffeeImg from "@/assets/images/iced-coffee.png";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={icedCoffeeImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Coffee Shop</Text>

        <Link href="/contact" style={{marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
           <Text style={styles.buttonText}>Contact Us</Text>  
          </Pressable>
        </Link>

      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontSize: 42,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    marginBottom: 20,
  },
  link: {
    fontSize: 42,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    textDecorationLine: "underline",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    height: 60,
    justifyContent: 'center',
    padding: 6,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
});
