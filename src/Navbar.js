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
       <Icon style={styles.menuIcon} name={this.props.iconprincipal} size={18}/>
      </TouchableWithoutFeedback>
      <View>
       <Text style={styles.textNavbar}>{this.props.title}</Text>
      </View>
      <View style={styles.containerSearchButton}>
      <TouchableWithoutFeedback onPress={this.props._openSearch}>
       <Icon style={styles.menuIcon} name={this.props.iconcenter}size={18}/>
      </TouchableWithoutFeedback>
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
  backgroundColor: '#68923C',
  height: 65,
  justifyContent: 'space-between',
  paddingHorizontal: 10,
  borderBottomWidth: 2,
  borderColor: '#3A4C1A',
},
containerSearchButton:{
  position: 'absolute',
  right: 50
},
menuIcon:{
  marginTop:10,
  padding: 15,
  color: '#181818'
},
textNavbar:{
  fontSize:20,
  marginTop: 22,
  color: '#181818',
},

})
