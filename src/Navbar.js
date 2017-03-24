import React,{Component} from 'react'
import{
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Navbar extends Component{
  render(){
    return(
    <View style={styles.containerMenu}>
      <TouchableHighlight onPress={this.props._back}>
       <Icon style={styles.menuIcon} name='arrow-left' size={15}/>
      </TouchableHighlight>
      <View>
       <Text style={styles.textNavbar}>{this.props.title}</Text>
      </View>
      <TouchableHighlight onPress={this.props._onPressToggle}>
       <Icon style={styles.menuIcon} name={this.props.iconname} size={15}/>
      </TouchableHighlight>
    </View>
    )
  }
}


const styles = StyleSheet.create({
containerMenu:{
  flexDirection: 'row',
  backgroundColor: '#504657',
  height: 55,
  justifyContent: 'space-between'
},
menuIcon:{
  marginTop:22,
  margin: 5,
  color: '#fff'
},

textNavbar:{
  fontSize:20,
  marginTop: 18,
  color: '#fff',
},

})
