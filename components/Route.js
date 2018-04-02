import React, { Component } from "react";
import {Text, TouchableOpacity, Image} from "react-native";
import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";
import Home from "./screens/Home";
import User from "./screens/User";
import Profile from "./screens/Profile";
import Menu from "./screens/Menu";
import SideMenu from './screens/SideMenu';
import Discuss from './screens/Discuss';
const HomeStack = StackNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#5B99CA'},
        headerTitleStyle : {color : 'white', fontWeight: '100'},

        headerLeft:(
          <TouchableOpacity onPress={()=>navigation.navigate('DrawerOpen')} >
            <Image 
              source={require('../src/imgs/menu.png')}
              style={{height:20, width: 20, marginLeft: 10}}
            />
          </TouchableOpacity>
        )
      })
    },
    ProfileScreen: {
      screen: Profile,
      navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#5B99CA'},
        headerTitleStyle : {color : 'white', fontWeight: '100'},
        headerLeft:(
          <TouchableOpacity onPress={()=>navigation.goBack()} >
           <Image 
              source={require('../src/imgs/back.png')}
              style={{height:28, width: 28, marginLeft: 10}}
            />
          </TouchableOpacity>
        )
      })
    }
  },
  {
    initialRouteName: "HomeScreen",
  }
);

const UserStack = StackNavigator(
  {
    UserScreen: {
      screen: User,
      navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#5B99CA'},
        headerTitleStyle : {color : 'white', fontWeight: '100'},
        headerLeft:(
          <TouchableOpacity onPress={()=>navigation.navigate('DrawerOpen')} >
            <Image 
              source={require('../src/imgs/menu.png')}
              style={{height:20, width: 20, marginLeft: 10}}
            />
          </TouchableOpacity>
        )
      })
    }
  },
  {
    initialRouteName: "UserScreen",
  }
);
const DiscussStack = StackNavigator(
  {
    DiscussScreen: {
      screen: Discuss,
      navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#5B99CA'},
        headerTitleStyle : {color : 'white', fontWeight: '100'},
        headerLeft:(
          <TouchableOpacity onPress={()=>navigation.navigate('DrawerOpen')} >
            <Image 
              source={require('../src/imgs/menu.png')}
              style={{height:20, width: 20, marginLeft: 10}}
            />
          </TouchableOpacity>
        )
      })
    }
  },
  {
    initialRouteName: "DiscussScreen",
  }
);
const TabBar = TabNavigator(
  {
    HomeTab: {
      screen: HomeStack,
      navigationOptions:{
        tabBarLabel: 'Contest',
        tabBarIcon : ({focused})=>
        ( focused === true ? (<Image source={require('../src/imgs/activequestion.png')} style={{height: 28, width: 28,}} />) : (<Image source={require('../src/imgs/inactivequestion.png')} style={{height: 28, width: 28,}} />) )
      }
    },
    UserTab: {
      screen: UserStack,
      navigationOptions:{
        tabBarLabel: 'Solution',
        tabBarIcon : ({focused})=>
        ( focused === true ? (<Image source={require('../src/imgs/inactivesolution.png')} style={{height: 28, width: 28,}} />) : (<Image source={require('../src/imgs/activesolution.png')} style={{height: 28, width: 28,}} />) )
      }
    },
    DiscussTab: {
      screen: DiscussStack,
      navigationOptions:{
        tabBarLabel: 'Discuss',
        tabBarIcon : ({focused})=>
        ( focused === true ? (<Image source={require('../src/imgs/activediscuss.png')} style={{height: 28, width: 28,}} />) : (<Image source={require('../src/imgs/inactivediscuss.png')} style={{height: 28, width: 28,}} />) )
      }
    },
  },
  {
    initialRouteName: "HomeTab",
    tabBarPosition: "bottom",
    swipeEnabled: true,
    lazy:false,
    tabBarOptions: {
      labelStyle:{ margin:0, padding:0, },
      upperCaseLabel: false,      
      activeTintColor: "yellow",
      inactiveTintColor: "black",
      style:{
        backgroundColor: '#5B99CA',
        margin:0, padding:0,
      },
      
      showIcon: true,
    },
  }
);

export default Drawer = DrawerNavigator({
  Home : {
      screen : TabBar,
  },
  Menu : {
      screen: Menu,
  },
},
{
  initialRouteName: "Home",
  contentComponent: (props)=><SideMenu {...props}/>
}
)