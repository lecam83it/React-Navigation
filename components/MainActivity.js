import React, { Component } from 'react';
import {
 StyleSheet,
 View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import CustomActivity from './CustomActivity';
import HomeActivity from './HomeActivity';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedTab : 'home',
        }
    }
    
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item 
                    selected={this.state.selectedTab === 'home'}
                    title='HOME'
                    onPress={() => this.setState({ selectedTab: 'home' })}>            
                
                    <HomeActivity />
                </TabNavigator.Item>
                <TabNavigator.Item 
                    selected={this.state.selectedTab === 'custom'}
                    title='CUSTOM'
                    onPress={() => this.setState({ selectedTab: 'custom' })}>            
                
                    <CustomActivity/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
