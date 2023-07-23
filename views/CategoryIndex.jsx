import {StyleSheet } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryList from "../cmps/Category/CategoryList";
import { LinearGradient } from "expo-linear-gradient";

export default function CategoryIndex() {
  return (
    <LinearGradient colors={["#414360", "#f7f7ff"]}  style={styles.container}>
      <CategoryList categories={CATEGORIES} />
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  