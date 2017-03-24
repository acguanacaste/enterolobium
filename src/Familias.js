import React, {Component} from 'react'
import {ListItem, List} from 'native-base';
import{
    View,
    Text,
    TextInput,
    ListView,
    Dimensions,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Request  from 'superagent'
import Navbar from './Navbar'

const URL = 'http://192.168.0.109:8000/api/especies'
const {width,height} = Dimensions.get('window')

export default class Familias extends Component{
constructor(props){
    super(props)
    
    this.requestSuperAgent = this.requestSuperAgent.bind(this)
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
    const ds2 = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
    this.state = {
        dataSource: ds.cloneWithRows([]),
        dataSource2: ds2.cloneWithRows([]),
        toggled: false,
    }
}

componentDidMount() {
  this.requestSuperAgent()
}

requestSuperAgent() {
    Request
    .get(URL)
    .then(res => {
       this.setState({
           dataSource: this.state.dataSource.cloneWithRows(JSON.parse(res.text).responseResult),
           dataSource2: this.state.dataSource2.cloneWithRows(JSON.parse(res.text).responseResult)
    }) 
    })
    .catch(err => {
        console.log(err)
    })
}

_showByThumbnail = (rowData) => {
    return(
        <View>
         <TouchableHighlight>
          <Image style={{width:120,height:120,margin:0.5}} source={{uri:rowData.urlPhoto}}/>
         </TouchableHighlight>
        </View>
    )
}

_showByName = (rowData) => {
    console.log(rowData.scientificName)
    return(
        <View style={styles.namesView}>
          <Text style={styles.textList}>{rowData.scientificName}</Text>
        </View>
    )
}

_back = () => {
    this.props.navigator.pop({
        name:'Home'
    })
}

_onPressToggle = () => {
    this.setState({toggled: !this.state.toggled})
}


    render(){
        return(
            <View container style={styles.container}>
             {this.state.toggled ? <Navbar _onPressToggle={this._onPressToggle.bind(this)} _back={this._back.bind(this)} title='Familias' iconname='th'/> : <Navbar _onPressToggle={this._onPressToggle.bind(this)} _back={this._back.bind(this)} title='Familias' iconname='sort-alpha-asc'/>}
              {
                this.state.toggled ?
                <Text></Text>
                :
              <TextInput
                style = {styles.searchText}
                placeholder = "  Search..."
                onChangeText = {(text) => this._filterSearch(text)}
                value = {this.state.text}
              />
              }
              {
                this.state.toggled ?
               <ListView
               enableEmptySections={true}
               renderRow = {this._showByName.bind(this)}
               dataSource = {this.state.dataSource2}
               />
    
              :
              <ListView
                enableEmptySections={true}
                contentContainerStyle={styles.list}
                renderRow ={ this._showByThumbnail.bind(this)}
                dataSource = {this.state.dataSource}
                pageSize={5}
                />
              }
              
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
   list:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  searchText:{
    height: 30,
    borderWidth: 1.5 ,
    borderColor: '#8494A4',
    margin: 10,
  },
  textList:{
   fontSize: 20,
   color: '#fff',
   textAlign: 'center'
  },
  namesView:{
   height: 45,
   backgroundColor: '#504657',
   borderBottomWidth: 3,
   borderColor: 'gray',
   justifyContent: 'center'
  },
})