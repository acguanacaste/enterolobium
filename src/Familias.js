import React, {Component} from 'react'
import{
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Navbar from './Navbar'

export default class Familias extends Component{


_back(){
    this.props.navigator.pop({
        name:'Home'
    })
}

_showFotografias(){
    this.props.navigator.push({
        name: 'FotografiasFamilias'
    })
}

    render(){
        return(
            <View container style={styles.container}>
             <Navbar _back={this._back.bind(this)} title='Familias'/>
             <TouchableHighlight style={styles.button} onPress={() => this._showFotografias()} > 
                 <View style={styles.contentbutton}>
                     <Text style={styles.textbutton}>Buscar por Fotografia</Text>
                     <Icon name='chevron-right' size={15} style={styles.iconbutton}/>
                </View>
             </TouchableHighlight>
             <TouchableHighlight style={styles.button}> 
                <View style={styles.contentbutton}>
                    <Text style={styles.textbutton}>Buscar por Nombre</Text>
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