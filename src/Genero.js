import React, {Component} from 'react'
import {ListItem, List} from 'native-base'
import{
    ActivityIndicator,
    View,
    Text,
    FlatList,
    Dimensions,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    VirtualizedList,
    StyleSheet,
    ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Navbar from './Navbar'
import SideMenu from 'react-native-side-menu'
import Menu from './Menu'
import Search from './Search'
import {connect} from 'react-redux'
import {fetchData} from './actions'
import {replaceUrl} from './lib'
const {width,height} = Dimensions.get('window')


class Genero extends Component{
constructor(props){
    super(props)
    this.state = {
        toggled: false,
        isOpen: false,
        openSearch: false,
        itemSelected: 'Generos'
    }
    this.itemSelected = this.itemSelected.bind(this)
}

componentDidMount(){
  const request =  replaceUrl(this.state.itemSelected)
  this.props.fetchData(request)  
}

itemSelected(item){
    this.setState(
        {
            itemSelected: item,
            isOpen: false
        }
    )
}

renderActivityIndicator(){
  const {activityIndicatorContainer} = styles
  return(
    <View style = {activityIndicatorContainer}>
      <ActivityIndicator size='large' color= 'black'/>
    </View>
  )
}

_showByThumbnail = rowData => {
    const{navigate} = this.props.navigation
    return(
         <TouchableWithoutFeedback onPress={() => navigate('Details',{item:[rowData,this.state.itemSelected]})}>
          <Image style={{width:120,height:120,margin:0.5}} source={{uri:rowData.urlPhoto,cache:'force-cache'}}/>
         </TouchableWithoutFeedback>
    )
}

_showByName = rowData => {
    const{navigate} = this.props.navigation
    return(
        <TouchableWithoutFeedback onPress={() =>  navigate('Details',{item:[rowData,this.state.itemSelected]})}>
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

_updateMenu = isOpen => {
    this.setState({isOpen})
}

_onPressSearch = () => {
  this.setState({openSearch: !this.state.openSearch})
}

static navigationOptions = {
        header: null
 }


    render(){
        const menu = <Menu navigation={this.props.navigation} itemSelected= {this.itemSelected} itemSelectedValue={this.state.itemSelected}/>
        const {responseResult} = this.props.data.data  
        return(
            <SideMenu
              menu={menu}
              isOpen={this.state.isOpen}
              onChange={(isOpen) => this._updateMenu(isOpen)}
            >
            <View container style={styles.container}>
            {this.state.toggled ? <Navbar _onPressToggle={this._onPressToggle.bind(this)} _openMenu={this._openMenu.bind(this)} _openSearch={this._onPressSearch.bind(this)} iconprincipal='bars' title={this.state.itemSelected} iconcenter='search'iconname='th'/> : <Navbar _onPressToggle={this._onPressToggle.bind(this)} _openMenu={this._openMenu.bind(this)} _openSearch={this._onPressSearch.bind(this)} iconprincipal='bars' title={this.state.itemSelected} iconcenter='search' iconname='sort-alpha-asc'/>}      
            {this.state.openSearch ? <Search/> :  null}    
             {!responseResult ? this.renderActivityIndicator() : null }      
            {this.state.toggled ?
               <FlatList
                data={responseResult}
                renderItem={({item}) => this._showByName(item)}
               />    
               :             
              <FlatList
               contentContainerStyle={styles.list}
               data={responseResult}
               renderItem={({item}) => this._showByThumbnail(item)}
               initialNumToRender = {20}
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
        fetchData: (item) => dispatch(fetchData(item))
    }
}

const styles = StyleSheet.create({
 activityIndicatorContainer:{
    flex: 1,
    justifyContent: 'center',
  },
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
  text: {
    color: '#181818',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 180
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
  // backgroundColor: '#8B8C49',
   borderBottomWidth: 1,
   borderColor: '#181818',
   justifyContent: 'center'
  },
})

export default connect (mapStateToProps,mapDispatchToProps)(Genero)