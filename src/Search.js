import React, {Component} from 'react'
import {ListItem, List} from 'native-base';
import{
    View,
    Text,
    TextInput,
    ListView,
    Dimensions,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const {width,height} = Dimensions.get('window')


export default class Menu extends Component{
    
    constructor(props){
    super(props)
    this.state = {
        text:''
    }
}

 _deleteData = () => {
        this.setState=({text:''})
    }
    
 _filter = () => {
        this.setState=({text:''})
    }

static navigationOptions ={
    headers: {
        visible: false
    }
}

    render(){
        return(
            <View style={styles.container}>
                  <Icon
                        name='search'
                        color='grey'
                        size={18}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        value={this.state.text}
                        onChangeText={(text)=> this._filter(text)}
                        style={styles.input}
                        placeholder="Buscar"
                        placeholderTextColor="grey"
                    />
                    {this.state.text ? 
                     <TouchableWithoutFeedback onPress={() => this._deleteData()}>
                        <Icon
                        name='times-circle'
                        color='grey'
                        size={18}
                        style={styles.iconInputClose}
                       />
                     </TouchableWithoutFeedback>
                     : null
                    }
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    height: 40,  
    backgroundColor: '#898653'
  },
  searchIcon:{
        position: 'absolute',
        top: 10,
        right: 13,
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    iconInputClose:{
        position: 'absolute',
        top: 5,
        right: 90,
        backgroundColor: 'transparent',
        zIndex: 1
    },
    input:{
        marginHorizontal: 5,
        marginTop: 5,
        height:30,
        backgroundColor: '#323232',
        borderRadius: 3
    },
  
})