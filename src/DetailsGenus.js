import React, {Component} from 'react'
import {StyleSheet,Text,ScrollView,View,Image,Dimensions,FlatList,TouchableWithoutFeedback} from 'react-native'
import MapView from 'react-native-maps'
import Navbar from'./Navbar'
import Request  from 'superagent'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import ImageSlider from 'react-native-image-slider'

const {width,height} = Dimensions.get('window')



export default class Map extends Component{

constructor(props){
    super(props)
    this.requestSuperAgent = this.requestSuperAgent.bind(this)
    this.state = {
        rawData: [],
        images: [],
        latitude: [],
        longitude: [],
        region:{
        }
    }
    
}

componentDidMount(){
  this.requestSuperAgent()
}

 requestSuperAgent() {
const {params} = this.props.navigation.state
const {taxonomyName} = params.item
const URLF = 'http://localhost:8000/api/Observaciones/genero/'+ taxonomyName
  Request
  .get(URLF)
  .then(res => {
     const data = JSON.parse(res.text).responseResult
     let newData = this._getUrlPhoto(data)
     let latitude = this._getLatitude(data)
     let longitude = this._getLongitude(data)
    this.setState({
      rawData: data,
      images: newData,   /*Estos deben colocarse en el mismo orden de arriba this.state... */
      latitude,
      longitude
    })
  })
  .catch(err => {
    console.log(err)
  })
}

_getUrlPhoto = (data) => {
  return data.map(function(item) {
    return item.urlPhoto
  })
}

_getLatitude = (data) => {
  return data.map(function(item) {
    return item.decimalLatitude
  })
}

_getLongitude = (data) => {
  return data.map(function(item) {
    return item.decimalLongitude
  })
}

_goBack = () =>{
  const{goBack} = this.props.navigation
  goBack()
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
    <Image style={{width:175,height:180,margin:3}} source={{uri:item}}/>
  )
}

static navigationOptions = {
        header: null
 }

    render(){
        const ASPECT_RATIO = width / height;
        return(
        <ScrollView style={styles.container}>
          <View style={styles.containerBar}>
           <TouchableWithoutFeedback onPress={()=>this._goBack()}>
              <Icon name='arrow-left'
                        size={18}
                        style={styles.iconBar}/>
            </TouchableWithoutFeedback>
          </View>
          <FlatList
              horizontal = {true}
              data={this.state.images}
              renderItem={({item}) => this._renderItem(item)}
                />
         <MapView style={styles.map}  initialRegion={{
                latitude: 10.83575,
                longitude: -85.61384,
                latitudeDelta: 1,
                longitudeDelta: (1 * Number(ASPECT_RATIO)),
                }}
>
              {
               this.state.latitude.map((itemlat) => this.state.longitude.map((itemlon) =>
               <MapView.Marker
                coordinate={{latitude: Number(itemlat), longitude: Number(itemlon)}}
               /> )
               )
             }

            </MapView>
            
        </ScrollView>
        )
    }
}


const styles =  StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#898653',
    },
    containerBar:{
        backgroundColor: '#68923C',
        height: 55,
        borderBottomWidth: 2,
        borderColor: '#3A4C1A',
    },
    iconBar:{
        marginTop:22,
        margin: 5,
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
   thumbnail:
   {
       height: 180,
       borderColor:'grey',
       borderWidth: 2
   }

})