import React, {Component} from 'react'
import {ListItem, List} from 'native-base';
import{
    View,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    Image,
    TouchableWithoutFeedback,
    Share,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Navbar from './Navbar'
import SideMenu from 'react-native-side-menu'
import Menu from './Menu'
import Search from './Search'
import {connect} from 'react-redux'
import {fetchData2} from './actions'

const {width,height} = Dimensions.get('window')

class Genero extends Component{
constructor(props){
    super(props)
    
    this.state = {
        toggled: false,
        isOpen: false,
        openSearch: false
    }
}

componentWillMount(){
    this.props.fetchData2()
}

_showByThumbnail = (rowData) => {
     const{navigate} = this.props.navigation
    return(
         <TouchableWithoutFeedback onPress={() =>  navigate('DetailsGenus',{item:rowData})}>
          <Image style={{width:120,height:120,margin:0.5}} source={{uri:rowData.urlPhoto,cache:'force-cache'}}/>
         </TouchableWithoutFeedback>
    )
}

_showByName = (rowData) => {
     const{navigate} = this.props.navigation
    return(
        <TouchableWithoutFeedback onPress={() =>  navigate('DetailsGenus',{item:rowData})}>
            <View style={styles.namesView}>
              <Text style={styles.textList}>{rowData.taxonomyName}</Text>
            </View>
         </TouchableWithoutFeedback>
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

_onPressSearch = () => {
  this.setState({openSearch: !this.state.openSearch})
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
             {this.state.toggled ? <Navbar _onPressToggle={this._onPressToggle.bind(this)} _openMenu={this._openMenu.bind(this)} _openSearch={this._onPressSearch.bind(this)} iconprincipal='bars' title='Genero' iconcenter='search' iconname='th'/> : <Navbar _onPressToggle={this._onPressToggle.bind(this)} _openMenu={this._openMenu.bind(this)} _openSearch={this._onPressSearch.bind(this)} iconprincipal='bars' title='Genero' iconcenter='search' iconname='sort-alpha-asc'/>}
            {this.state.openSearch ? <Search/> :  null}

              {
                this.state.toggled ?
               <FlatList
               data={this.props.data.data.responseResult}
               renderItem={({item}) => this._showByName(item)}
               />
    
              :
              <FlatList
               contentContainerStyle={styles.list}
               data={this.props.data.data.responseResult}
               renderItem={({item}) => this._showByThumbnail(item)}
               initialNumToRender = {24}
                />
              }
              </View>
              </SideMenu>
        )
    }
}

//mapStateToProps
const mapStateToProps = state => {
    return { data: state.data}
}

//mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return{
        fetchData2: () => dispatch(fetchData2())
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

export default connect(mapStateToProps,mapDispatchToProps)(Genero)