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
    Share,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Request  from 'superagent'
import Navbar from './Navbar'
import SideMenu from 'react-native-side-menu'
import Menu from './Menu'

const URL = 'http://192.168.230.128:8000/api/taxonomias/tipoTaxonomia/family'
//http://192.168.230.128:8000/api/taxonomias/tipoTaxonomia/genus
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
        isOpen: false,
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
          <Image style={{width:120,height:120,margin:0.5}} source={{uri:rowData.urlPhoto,cache:'force-cache'}}/>
         </TouchableHighlight>
        </View>
    )
}

_showByName = (rowData) => {
    return(
        <View style={styles.namesView}>
          <Text style={styles.textList}>{rowData.taxonomyName}</Text>
        </View>
    )
}

_onPressToggle = () => {
    this.setState({toggled: !this.state.toggled})
}

_openMenu = () => {
   this.setState({isOpen: !this.state.isOpen})
}

_updateMenu = (isOpen) => {
    this.setState({isOpen})
}

_openSearch = () => {
  this.props.navigator.push({
  name: 'Search',
})
}

static navigationOptions = {
        header: null
 }


    render(){
        const menu = <Menu navigation={this.props.navigation}/>
        return(
            <SideMenu
              menu={menu}
              isOpen={this.state.isOpen}
              onChange={(isOpen) => this._updateMenu(isOpen)}
            >
             <View container style={styles.container}>
             {this.state.toggled ? <Navbar _onPressToggle={this._onPressToggle.bind(this)} _openMenu={this._openMenu.bind(this)} _openSearch={this._openSearch.bind(this)} iconprincipal='bars' title='Familias' iconcenter='search' iconname='th'/> : <Navbar _onPressToggle={this._onPressToggle.bind(this)} _openMenu={this._openMenu.bind(this)} _openSearch={this._openSearch.bind(this)} iconprincipal='bars' title='Familias' iconcenter='search' iconname='sort-alpha-asc'/>}
              
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
                initialListSize={15}
                pageSize={30}
                />
              }
              </View>
              </SideMenu>
        )
    }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#898653'
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
    color: '#b3b3b3',
    fontSize: 20,
    marginLeft: 10
  },
  iconbutton:{
    color: '#b3b3b3',
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
   fontWeight: 'bold',
   color: '#181818',
   textAlign: 'center'
  },
  namesView:{
   height: 45,
   backgroundColor: '#898653',
   borderBottomWidth: 1,
   borderColor: '#181818',
   justifyContent: 'center'
  },
})