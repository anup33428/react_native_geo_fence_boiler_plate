import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text
} from 'react-native';

import GeoFencing from 'react-native-geo-fencing';

class DummyView extends Component {
  state = {
    values: []
   };

   componentDidMount() {
     const polygon = [
       { lat: 3.1336599385978805, lng: 101.31866455078125 },
       { lat: 3.3091633559540123, lng: 101.66198730468757 },
       { lat: 3.091150714460597,  lng: 101.92977905273438 },
       { lat: 2.7222113428196213, lng: 101.74850463867188 },
       { lat: 2.7153526167685347, lng: 101.47933959960938 },
       { lat: 3.1336599385978805, lng: 101.31866455078125 } // last point has to be same as first point
     ];

     alert("I am in navigator.geolocation.getCurrentPosition" );
     navigator.geolocation.getCurrentPosition(
       (position) => {
         let point = {
           lat: position.coords.latitude,
           lng: position.coords.longitude
         };
         alert('current location is ' + point );
         console.log(" Before GeoFencing.containsLocation" );
         GeoFencing.containsLocation(point, polygon)
           .then(() => alert('point is within polygon'))
           .catch(() => alert('point is NOT within polygon'))
       },
       (error) => alert(error.message + ', ' + 'location fetching failed!' ),
       { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
     );
   }

  render() {
    console.log(this.state);
    return (
    <View>
       <Text> Geo Fencing Dummy text to be debugged it on ui </Text>
    </View>
  );
}
}

export default DummyView;
