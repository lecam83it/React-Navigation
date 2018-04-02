import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";

const SideMenu = props => (
  <View style={styles.container}>
    <Image 
        source={require('../../src/imgs/inactivediscuss.png')}
        style={{alignSelf:'center', margin: 30}}
    />
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
);

export default SideMenu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  introduce: {
    flex: 1
  },
  listItems: {
    flex: 6
  }
});
