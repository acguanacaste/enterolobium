import React, {Component} from 'react'
import{View,Text,ScrollView,Image,StyleSheet,Dimensions,TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Especies from './Especies'
import Familias from './Familias'
import {StackNavigator} from 'react-navigation'
const {width,height} = Dimensions.get('window')

export default class Menu extends Component{

    render(){
        const{navigate} = this.props.navigation
        return(
            <View style={styles.container}>
              <ScrollView style={styles.scrollContainer}>
                    <View sytle={styles.imageProfile}>
                        <Image style={styles.image}source={require('./img/logo-area-conservacion-guana.png')}/>
                    </View>
                    <TouchableWithoutFeedback onPress={() => navigate('Especies')}>
                        <View style={styles.items}>  
                            <Icon name='database' size={15} style={styles.iconbutton}/>                  
                            <Text style={styles.text} >Especies</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigate('Familias')}>
                        <View style={styles.items}>                    
                            <Icon name='database' size={15} style={styles.iconbutton}/>                  
                            <Text style={styles.text} >Familias</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigate('Genero')}>
                        <View style={styles.items}>                    
                           <Icon name='database' size={15} style={styles.iconbutton}/>                  
                            <Text style={styles.text} >Genero</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={null}>
                        <View style={ styles.items}>                    
                           <Icon name='info' size={15} style={styles.iconbutton}/>                  
                            <Text style={styles.text} > Información</Text>
                        </View>
                    </TouchableWithoutFeedback>
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
    }
})