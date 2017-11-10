import React, {Component} from 'react'
import {StyleSheet,Text,ScrollView,View,Image,Dimensions,FlatList,TouchableWithoutFeedback} from 'react-native'
import MapView,{Marker} from 'react-native-maps'
import Navbar from'./Navbar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import ImageSlider from 'react-native-image-slider'
import {connect} from 'react-redux'
import api from './api/api'
import {replaceRequest} from './lib'
import Config from './config/config'
import Especies from './Especies'
const array = ''
const {width,height} = Dimensions.get('window')

class Details extends Component{

constructor(props){
    super(props)
    this.state = {
        name: '',
        images: null,
        places: null,
    }  
}

componentDidMount(){
  let name = '' 
  const {params} = this.props.navigation.state
  let type = params.item[1]
  const {taxonomyName} = params.item[0]
  name = taxonomyName
  if(taxonomyName === undefined){
  const {scientificName} = params.item[0]
  name = scientificName
  }
  const request = replaceRequest(type,name)
  api.getInfoDetail(request).then(res => { 
    const data = res
     const arrayMarkers = []
         data[1].responseResult.map((element, i)=>{
               arrayMarkers.push(
                 <Marker
                 key={i}
                 coordinate = {{
                   latitude: Number (element.decimalLatitude),
                   longitude: Number (element.decimalLongitude)
                 }}
                 />
               )
             }
             )

     this.setState({
         name: name,
         images: data[1].responseResult,
         places: arrayMarkers
     })
  })

}

_onShare = () =>{
    Share.share({
        title: 'Hola Mundo',
        url: '',
        message: 'Awesome Butterfly'
    },{
        //android
        dialogTitle: 'Share this awesome ',
        //ios
        excludeActivityTypes:[
            'com.apple.UIKit.activity.PostToTwitter'
        ]
    })
}

_renderItem = (item) => {
  return(
    <Image style={{width:175,height:180,margin:3}} source={{uri:item.urlPhoto,cache:'force-cache'}}/>
  )
}

_keyExtractor = (item, index) => item._id

goBack(){
    const {navigate} = this.props.navigation 
    const {params} = this.props.navigation.state
    let type = params.item[1]
    navigate(type)
}

static navigationOptions = {
        header: null
 }

    render(){
        const ASPECT_RATIO = width / height;
        const {responseResult} = this.props.data.data
        return(
        <ScrollView style={styles.container}>
          <View style={styles.containerBar}>
          <Text style={styles.title}>{this.state.name}</Text>
           <TouchableWithoutFeedback onPress={() => this.goBack()}>
              <Icon name='arrow-left'
                        size={20}
                        style={styles.iconBar}/>
            </TouchableWithoutFeedback>
           
          </View>
          <FlatList
              horizontal = {true}
              data={this.state.images}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => this._renderItem(item)}
                />
         <MapView style={styles.map}  initialRegion={{
                latitude: 10.83575,
                longitude: -85.61384,
                latitudeDelta: 1,
                longitudeDelta: (1 * Number(ASPECT_RATIO)),
                }}>
              {        
                  this.state.places
               }    
          </MapView>         
        </ScrollView>
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
        fetchDataInfo: (item) => dispatch(fetchDataInfo(item))
    }
}


const styles =  StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#898653',
    },
    containerBar:{
        backgroundColor: '#68923C',
        height: 65,
        borderBottomWidth: 2,
        borderColor: '#3A4C1A',
    },
    iconBar:{
        position: 'absolute',
        top: 10,
        padding: 15,
        color: '#181818'
    },
    map:{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        marginTop: 20,
        height: 350,
    },
    text:{
        color: '#fff',
        fontSize: 20
    },
    title:{
        textAlign: 'center',
        fontSize:20,
        marginTop: 22,
        color: '#181818'
    },
   thumbnail:
   {
       height: 180,
       borderColor:'grey',
       borderWidth: 2
   }

})

export default connect (mapStateToProps,mapDispatchToProps)(Details)
