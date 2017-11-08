import React, {Component} from 'react'
import{View,Text,ScrollView,Image,StyleSheet,Dimensions,TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {StackNavigator} from 'react-navigation'
const {width,height} = Dimensions.get('window')
import Config from './config/config'

export default class Menu extends Component{

    _renderItemsMenu(){
        const genres = Config.labels.menu.items
        const {itemSelectedValue} = this.props
        const{navigate} = this.props.navigation
        return genres.map((element,key) => (
             <TouchableWithoutFeedback key={key} onPress={() => {this.props.itemSelected(element),navigate(element)}}>
                        <View style={element == itemSelectedValue ? [styles.items,styles.itemSelected] : styles.items}>        
                            <Text style={styles.text} >{element}</Text>
                        </View>
             </TouchableWithoutFeedback>
        ) )
    }

    render(){
     
        return(
            <View style={styles.container}>
              <ScrollView style={styles.scrollContainer}>
                    <View sytle={styles.imageProfile}>
                        <Image style={styles.image}source={require('./img/logo-area-conservacion-guana.png')}/>
                    </View>
                       {this._renderItemsMenu()}
                </ScrollView>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: width,
        height: height,
        backgroundColor: '#68923C',
    },
    text:{
        color: '#181818',
        fontSize: 20
    },
    items:{
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 5,
        flex:1,
        flexDirection: 'row',
    },
    iconbutton:{
        color: '#181818',
        paddingRight: 35,
        paddingLeft: 20,
        marginTop: 6
    },
  image:{
        marginTop:25,
        marginLeft: 50,    
    },
  itemSelected:{
        borderLeftWidth: 5,
        borderColor: '#3A4C1A',
  },

})