import React, {Component} from 'react'
import {Text,StyleSheet,Image,View,TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Navbar from './Navbar'
import SideMenu from 'react-native-side-menu'
import Menu from './Menu'
import config from './config/config'

export default class Information extends Component{

 constructor(props){
    super(props) 
    this.state = {
        toggled: false,
        isOpen: false,  
        itemSelected: 'Información'
    }
    this.itemSelected = this.itemSelected.bind(this)

}


itemSelected(item){
    this.setState(
        {
            itemSelected: item,
            isOpen: false
        }
    )
}

_openMenu = () => {
   this.setState({isOpen: !this.state.isOpen})
}

_updateMenu = (isOpen) => {
    this.setState({isOpen})
}


static navigationOptions = {
        header: null
 }

     render(){
          const menu = <Menu navigation={this.props.navigation} itemSelected= {this.itemSelected} itemSelectedValue={this.state.itemSelected}/>
         return(
            <SideMenu
              menu={menu}
              isOpen={this.state.isOpen}
              onChange={(isOpen) => this._updateMenu(isOpen)}
            >
                <View style={styles.containerBar}>
                     <TouchableWithoutFeedback onPress={() => this._openMenu()}>
                        <Icon name='bars'
                        size={18}
                        style={styles.iconBar}/>
                     </TouchableWithoutFeedback>
                     <Text style={styles.title}>Información</Text>
                 </View>        
                <View style={styles.body}>
                     <Image style={styles.image}source={require('./img/logo-area-conservacion-guana.png')}/>
                     <Text style={styles.text}>{config.appInfo.text}                     </Text>
                </View>
              </SideMenu>
         )
     }
}

const styles = StyleSheet.create({
   container:{
        flex: 1,
        backgroundColor: '#898653',
    },
    containerBar:{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#68923C',
        height: 55,
        borderBottomWidth: 2,
        borderColor: '#3A4C1A',
    },
    iconBar:{
        position: 'absolute',
        color: '#181818',
        top: 22,
        left: 10,
        backgroundColor: 'transparent',
        zIndex: 1
    },
    body:{
        flex:1 ,
        alignItems: 'center',
        backgroundColor: '#898653'
    },
    title:{
        marginTop: 18,
        fontSize: 20,
    },
    text:{
        color: '#181818',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle:'normal', 
        marginTop: 10,
        textAlign: 'center'
    },
    image:{
        marginTop: 25,
    }
})