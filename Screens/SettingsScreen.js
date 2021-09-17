

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, View, Image, FlatList, SafeAreaView } from "react-native";
import Item from '../Components/Items'
import ItemList from "../android/app/src/components/ItemList";
import axios from 'react-native-axios'
import Loading from "../android/app/src/components/Loading";
import  User from './User'
import SectionListScreen from './SectionListScreen'
import { Section } from "react-native-paper/lib/typescript/components/List/List";
// if (loading == true )
// return loading page
// if error is true 
// return error page 
// else 
// return flatlist



let page = 1;
let ErrorPage = () => {
  return (
    <View style={{ backgroundColor: 'red' }}>
      <Text style={{ fontSize: 20, alignItems: 'center', color: 'white' }}>Error Bad network </Text>
    </View>
  )
}

const SettingsScreen = () => {
  let dataArray = [];
  const [loading, setLoading] = useState(true);
  let [errorcab, setError] = useState(false);
  const [data, setData] = useState([]);

  let loadMoreResults = () => {
    page++;
    setLoading(true);
    setError(false);
    console.log("----------------------------------------------------------------")
  }
  let loadFresh = () => {
    setError(false);
    setLoading(true);
    setData([]);

  }

  let Header = () => {
    return (
      <View style={{ backgroundColor: 'red', height: 50 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28, textAlign: 'center', margin: 5 }}>City Mall</Text>
      </View>
    )
  }


  useEffect(() => {
    let url = `https://randomuser.me/api/?page=${page}&results=10`;

    // url=toString(url);
    axios.get(url)
      .then(response => {
        console.log("heydjjjacskjcvklzcv", response.data.results[0].location.city);
        console.log("res", typeof (response));
        //   console.log(response.data[0]);
        dataArray = response.data.results;
        // response.data[0].id 
        // response.data[0].title
        let copydata = dataArray.map((element) => {
          return ({
            id: element.location.street.number,
            title: element.location.city
          })
        })
        console.log("length of copy dtaa", copydata.length)
        setData([...data, ...copydata]);
        //console.log(copydata);
        setLoading(false);
        setError(false);
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
        setError(true);
      })
  }, [loading])

  let ITEM_HEIGHT = 10;
  return (
    <SectionListScreen/>

  );
};

const styles = StyleSheet.create({
  container: {


  },
  box: {
    width: '100%',
    height: '43%',
  },
  itemContainer: {
    alignItems: 'center',

    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 20,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 2

  },
  img: {
    marginTop: 7,
    height: 70,
    width: 700,
    resizeMode: 'contain',
  },
  categoriesItem: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    marginRight: 6,
    height: 110,
    width: 110,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
  },
  categoriesItemImage: {
    height: 70,
    width: "100%",

  },
  dropdown: {
    maxWidth: 100,
    height: 35,

  }
});

export default SettingsScreen;



// import React from 'react';
// import {  View, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
// import Item from '../Components/Items';


// export default function ListRendered({prior1}){

//     const renderItem = ({ item }) => {

//         return (
//           <Item name={item.name}
//             prices={item.prices}
//             avatar={item.avatar} 
//             />
//         )

//       }

//     return (
//         <View style={styles.container}>

//         <FlatList data={prior1}
//           renderItem={renderItem}
//           horizontal={true}
//           keyExtractor={(prior1) ? item => item.id : null}
//           showsHorizontalScrollIndicator={false}
//         />
//       </View>
//     )

// }



// const styles = StyleSheet.create(
//     {
//       container: {
//         marginLeft: 0,
//         backgroundColor: 'white',
//         flexDirection: 'row',
//         height: 300,
//         marginBottom: 15

//       },
//       img: {
//         height: 200,
//         width: 500,
//         resizeMode: 'stretch'
//       },
//       imageStyle: {
//         padding: 5,
//         marginLeft: 10,
//         marginTop: 4,
//         height: 25,
//         width: 25,
//         resizeMode: 'stretch',
//         alignItems: 'center',
//       },
//       input: {
//         padding: 6,
//         flex: 1,


//       },
//       searchContainer: {

//         flexDirection: 'row',
//         borderRadius: 30,
//         height: 30,
//         borderColor: 'black',
//         borderWidth: 1,
//       },



//     }
//   )