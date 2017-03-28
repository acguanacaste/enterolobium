import React, {Component} from 'react'
import{View,Text,ScrollView,Image,StyleSheet,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const {width,height} = Dimensions.get('window')

export default class Menu extends Component{
    render(){
        return(
            <View style={styles.container}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    },
})