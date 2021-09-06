import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, View, Image, FlatList,SafeAreaView } from "react-native";
import harpic from "./android/app/src/assets/harpic.jpg"
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from "react-native-paper";
import ItemList from "./android/app/src/components/ItemList";
import axios from 'react-native-axios'
import Loading from "./android/app/src/components/Loading";
// if (loading == true )
// return loading page
// if error is true 
// return error page 
// else 
// return flatlist
let ErrorPage=()=>{
   return (
     <View style={{backgroundColor: 'red'}}>
        <Text style={{fontSize: 20, alignItems: 'center'}}>Error Bad network </Text>
     </View>
   )
}

const FlexDirectionBasics = () => {
  let dataArray = [];
  const[loading, setLoading]=useState(true);
  let [errorcab, setError]=useState(false);
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(response => {
        console.log(response);
        console.log("res", typeof (response));
        console.log(response.data[0]);
        dataArray = response.data;
        // response.data[0].id 
        // response.data[0].title
        let copydata = dataArray.map((element) => {
          return ({
            id: element.id,
            title: element.title
          })
        })  
        console.log("length of copy dtaa", copydata.length)
        setData(copydata);
        //console.log(copydata);
          setLoading(false);
          setError(false);
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
        setError(true);
      })
  },[])


  return (

    <SafeAreaView style={styles.container}>
     

      {loading? <Loading/>:null }
        {  errorcab?<ErrorPage/>: <FlatList 
          data={data}
         renderItem={({ item, index }) => {
            return (
              <ItemList
                name={item.title}
                id={item.id}
              />
            )
          }}
          keyExtractor={item => item.id}
          extraData={data}          
        />
        }    
        

      {/* //  loading? */}
      {/* //   <Loading/>:(errorcab ? */}
      {/* //     <ErrorPage/>:null):<FlatList */}
      {/* //     data={data}
      //     renderItem={({ item, index }) => {

      //       return (
      //         // <View>
      //         //   <Text>1</Text>
      //         //   </View>

      //         <ItemList
      //           name={item.title}
      //           id={item.id}

      //         />
      //       )

      //     }}
      //     keyExtractor={item => item.id}
      //     extraData={data}          
      //   />
        */}
      

    </SafeAreaView>
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

export default FlexDirectionBasics;

