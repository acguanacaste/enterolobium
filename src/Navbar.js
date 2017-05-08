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
      <View style={styles.containerSearcButton}>
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
  height: 55,
  justifyContent: 'space-between',
  paddingHorizontal: 10,
  borderBottomWidth: 2,
  borderColor: '#3A4C1A',
},
containerSearcButton:{
  position: 'absolute',
  right: 40
},
menuIcon:{
  marginTop:22,
  margin: 5,
  color: '#181818'
},

textNavbar:{
  fontSize:20,
  marginTop: 18,
  color: '#181818',
},

})
