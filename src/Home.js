import React,{Component} from 'react'
import{
  Text,
  TextInput,
  StyleSheet,
  View,
  ListView,
  TouchableHighlight,
  Dimensions,
  Image,
  Animated
}from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Navbar from './Navbar'
import Familias from './Familias'
const {width , height} = Dimensions.get('window')

export default class Home extends Component{

_familias(){
 this.props.navigator.push({
   name:'Familias'
 })
} 

  render(){
    return(
    <View style={styles.container}>
      <View style={styles.contenttitle}>
       <Text style={styles.texttitle}>Enterolobium</Text>
      </View>
      <TouchableHighlight style={styles.button} onPress={() => this._familias()} > 
          <View style={styles.contentbutton}>
             <Text style={styles.textbutton}>Familias</Text>
              <Icon name='chevron-right' size={15} style={styles.iconbutton}/>
          </View>
      </TouchableHighlight>
       <TouchableHighlight style={styles.button}> 
          <View style={styles.contentbutton}>
             <Text style={styles.textbutton}>Especies</Text>
              <Icon name='chevron-right' size={15} style={styles.iconbutton}/>
          </View>
      </TouchableHighlight>
       <TouchableHighlight style={styles.button}> 
          <View style={styles.contentbutton}>
             <Text style={styles.textbutton}>Taxonomias</Text>
              <Icon name='chevron-right' size={15} style={styles.iconbutton}/>
          </View>
      </TouchableHighlight>
       <TouchableHighlight style={styles.button}> 
          <View style={styles.contentbutton}>
             <Text style={styles.textbutton}>Información</Text>
              <Icon name='chevron-right' size={15} style={styles.iconbutton}/>
          </View>
      </TouchableHighlight>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'gray'
  },
  contenttitle:{
    height: 55,
    backgroundColor: '#504657'
  },
  texttitle:{
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20
  },
  contentbutton:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button:{
    height: 50,
    marginTop: 20,
    borderWidth:1,
    backgroundColor: '#504657',
    borderColor: 'gray'
  },
  textbutton:{
    color: '#fff',
    fontSize: 20,
    marginLeft: 10
  },
  iconbutton:{
    color: '#fff',
    marginRight: 15
  },
})
