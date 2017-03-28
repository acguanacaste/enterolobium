import React,{Component} from 'react'
import{
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Navbar extends Component{
  render(){
    return(
    <View style={styles.containerMenu}>
      <TouchableWithoutFeedback onPress={this.props._openMenu}>
       <Icon style={styles.menuIcon} name='bars' size={18}/>
      </TouchableWithoutFeedback>
      <View>
       <Text style={styles.textNavbar}>{this.props.title}</Text>
      </View>
      <TouchableWithoutFeedback onPress={this.props._onPressToggle}>
       <Icon style={styles.menuIcon} name={this.props.iconname} size={18}/>
      </TouchableWithoutFeedback>
    </View>
    )
  }
}


const styles = StyleSheet.create({
containerMenu:{
  flexDirection: 'row',
  backgroundColor: 'black',
  height: 55,
  justifyContent: 'space-between',
  paddingHorizontal: 10
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
