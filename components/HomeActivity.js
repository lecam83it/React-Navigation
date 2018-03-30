import React, {Component } from 'react';
import {
    StyleSheet,
    View,
    ListView,
    Text,
} from 'react-native';

export default class HomeActivity extends Component {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (o1, o2)=>{o1 !== o2}});
        this.state = {
            dataSource : ds.cloneWithRows(['r1', 'r2']),
        }
    }

    render(){
        return(
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={(item) =>
                    <View>
                        <Text>{item}</Text>
                    </View>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'yellow',
    }
});