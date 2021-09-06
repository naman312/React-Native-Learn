import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, View, Image, FlatList,SafeAreaView } from "react-native";
import harpic from "./android/app/src/assets/harpic.jpg"
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from "react-native-paper";
import ItemList from "./android/app/src/components/ItemList";
import axios from 'react-native-axios'
// const Itemlist = () => {

//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState('500 ml');
//   const [items, setItems] = useState([
//     { label: '1 L', value: '1 L' },
//     { label: '500 ml', value: '500 ml' }
//   ]);


//   return (
//     <TouchableNativeFeedback>
//       <View style={styles.itemContainer}>
//         <View style={styles.categoriesItem}>
//           <Text
//             ellipsizeMode="tail"
//             numberOfLines={2}
//             style={styles.categoriesItemText}>
//             Offer
//           </Text>
//           <Image
//             source={harpic}
//             style={styles.categoriesItemImage}
//             resizeMode="contain"
//           />
//         </View>
//         <View style={{ marginLeft: 30 }} >
//           <Text style={{ marginBottom: 5, fontWeight: '400' }}>SunnyFresh Toilet Cleaner </Text>
//           <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
//             <Text style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 5, marginRight: 18 }}>{'\u20B9'}145</Text>
//             <Text style={{ fontSize: 15, marginBottom: 5, textDecorationLine: 'line-through', marginRight: 18 }}>{'\u20B9'}154</Text>
//             <Text style={{ fontSize: 15, marginBottom: 5, color: "rgba(0, 0, 0.5, 0.9)", fontWeight: '400' }}>({'\u20B9'}290/L)</Text>
//           </View>

// <View style={{flexDirection: 'row'}}>
//   <View style={{flex: 1,marginRight: 10}}>

//   <DropDownPicker
//             open={open}
//             value={value}
//             items={items}
//             setOpen={setOpen}
//             setValue={setValue}
//             setItems={setItems}

//             style={styles.dropdown}
//           />
//   </View>
//   <View style={{flex: 1, flexDirection: 'row'}}>

//   <Button
//   style={{backgroundColor: 'white', borderColor: 'red',borderWidth: 2 }}
//         title="Press me"
//       /> 
//       <Button style={{backgroundColor: 'red'}}/>
// </View>
// </View>
//         </View>
//       </View>
//     </TouchableNativeFeedback>


//   )



// }

// const DATA = [
//   {
//     id: "1",
//     name: "Sunny Fresh"
//   },
//   {
//     id: "2",
//     name: "phenyl"
//   },
//   {
//     id: "3",
//     name: "toilet cleaner"
//   },
//   {
//     id: "4",
//     name: "chips"
//   }
// ]



const FlexDirectionBasics = () => {
  let dataArray = [];

  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/todos/').then((response) => {
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

      }).catch(function () {

        console.log("i am in the error")
      })

    }
    catch (err) {
      console.log('i am in error of catch block')
    }


  }, [])




  // axios.get('https://api.github.com/users/mapbox')
  //   .then((response) => {
  //     console.log(response.data);
  //     console.log(response.status);
  //     console.log(response.statusText);
  //     console.log(response.headers);
  //     console.log(response.config);
  //   });
  return (

    <SafeAreaView style={styles.container}>
      {/* <View style={[styles.box]}>
        <Item />
      </View> */}

      {
        data.length == 0 ? (<Text>Empty</Text>) : <FlatList
          data={data}
          renderItem={({ item, index }) => {

            return (
              // <View>
              //   <Text>1</Text>
              //   </View>

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

