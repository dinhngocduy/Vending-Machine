import React, { Component, PureComponent } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Platform } from "react-native";
import colors from "res/colors";
export const AppStatusBar = ({ backgroundColor = colors.primaryColor, ...props }) => (
  <SafeAreaView style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} barStyle={"light-content"} />
  </SafeAreaView>
);

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  },
  appBar: {
    backgroundColor: "#79B45D",
    height: APPBAR_HEIGHT
  },
  content: {
    flex: 1,
    backgroundColor: "#33373B"
  }
});
