// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, View, Image, FlatList,SafeAreaView } from "react-native";
// import harpic from "./android/app/src/assets/harpic.jpg"
// import DropDownPicker from 'react-native-dropdown-picker';
// import { Button } from "react-native-paper";
// import ItemList from "./android/app/src/components/ItemList";
// import axios from 'react-native-axios'
// import Loading from "./android/app/src/components/Loading";
// // if (loading == true )
// // return loading page
// // if error is true 
// // return error page 
// // else 
// // return flatlist

// let page=1;
// let ErrorPage=()=>{
//    return (
//      <View style={{backgroundColor: 'red'}}>
//         <Text style={{fontSize: 20, alignItems: 'center'}}>Error Bad network </Text>
//      </View>
//    )
// }


// const FlexDirectionBasics = () => {
//   let dataArray = [];
//   const[loading, setLoading]=useState(true);
//   let [errorcab, setError]=useState(false);
//   const [data, setData] = useState([]);
//   let [bottom, setBottom]=useState(false);

//   let loadMoreResults=()=>{
//     page++;
//     setLoading(true);
//     setError(false);
//     console.log("----------------------------------------------------------------")
//     setBottom(true);
//   }
//   let loadFresh=()=>{
//     setError(false);
//     setLoading(true);
//     setData([]);
//    setBottom(false);
//   }

//   useEffect(() => {
//     let url = `https://randomuser.me/api/?page=${page}&results=30`;
//    // url=toString(url);
//     axios.get(url)
//       .then(response => {
//         console.log("heydjjjacskjcvklzcv",response.data.results[0].location.city);
//         console.log("res", typeof (response));
//      //   console.log(response.data[0]);
//       dataArray = response.data.results;
//         // response.data[0].id 
//         // response.data[0].title
//         let copydata = dataArray.map((element) => {
//           return ({
//             id: element.location.street.number,
//             title: element.location.city
//           })
//         })  
//         console.log("length of copy dtaa", copydata.length)
//         setData([...data,...copydata]);
//         //console.log(copydata);
//           setLoading(false);
//           setError(false);
//       })
//       .catch(err => {
//         console.log(err)
//         setLoading(false);
//         setError(true);
//       })
//   },[loading])


//   return (

//     <SafeAreaView style={styles.container}>


//       {loading? <Loading top={bottom}/>:null }
//         {  errorcab?<ErrorPage/>: <FlatList 
//           data={data}
//           onEndReached={loadMoreResults}
//           onEndReachedThreshold={0.5}

//          renderItem={({ item, index }) => {
//             return (
//               <ItemList
//                 name={item.title}
//                 id={item.email}

//               />
//             )
//           }}
//           keyExtractor={item => item.id}
//           extraData={data}  
//           onRefresh={loadFresh}   
//           refreshing={loading}

//         />
//         }    


//       {/* //  loading? */}
//       {/* //   <Loading/>:(errorcab ? */}
//       {/* //     <ErrorPage/>:null):<FlatList */}
//       {/* //     data={data}
//       //     renderItem={({ item, index }) => {

//       //       return (
//       //         // <View>
//       //         //   <Text>1</Text>
//       //         //   </View>

//       //         <ItemList
//       //           name={item.title}
//       //           id={item.id}

//       //         />
//       //       )

//       //     }}
//       //     keyExtractor={item => item.id}
//       //     extraData={data}          
//       //   />
//         */}


//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {


//   },
//   box: {
//     width: '100%',
//     height: '43%',
//   },
//   itemContainer: {
//     alignItems: 'center',

//     flex: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     paddingTop: 20,
//     borderBottomColor: "rgba(0, 0, 0, 0.1)",
//     borderBottomWidth: 2

//   },
//   img: {
//     marginTop: 7,
//     height: 70,
//     width: 700,
//     resizeMode: 'contain',
//   },
//   categoriesItem: {
//     backgroundColor: "rgba(0, 0, 0, 0.05)",
//     marginRight: 6,
//     height: 110,
//     width: 110,
//     borderRadius: 6,
//     borderWidth: 1,
//     borderColor: "rgba(0, 0, 0, 0.1)",
//     alignItems: "center",
//   },
//   categoriesItemImage: {
//     height: 70,
//     width: "100%",

//   },
//   dropdown: {
//     maxWidth: 100,
//     height: 35,

//   }
// });

// export default FlexDirectionBasics;

// New proceeding towards redux 


import AsyncStorage from '@react-native-async-storage/async-storage';

import * as React from 'react';
import { View, Button, Text, Animated, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createStore, combineReducers } from 'redux';
import countReducer from './Redux/reducers/count';
import {
  decrement,
  increment,
  sucess,
  fail

} from "./Redux/actions/counting";
import { TextInput } from 'react-native-gesture-handler';
// will write Reducer here for combination 
// const rootReducer=combineReducers({
//     counts: countReducer
// })
// use store after creation

const store = createStore(countReducer);

const db = [
  { id: 1, name: "naman" },
  { id: 2, name: "tushar" },
  { id: 3, name: "sameer" },
  { id: 5, name: "Akash" },
  { id: 6, name: "himanshu" }
]
let id = 7;

function Login({ navigation }) {
  const dispatch = useDispatch();

  React.useEffect(()=>{
   

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
        dispatch(sucess())

      }else{
        dispatch(fail())
      }
    } catch(e) {
      dispatch(fail());
      console.log('I am in the error')
    }
  }

  getData();


  },[])





  let auth = useSelector(state => state);
  const [text, setText] = React.useState("");
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const handler = (text) => {
    setText(text);
    if (text == '1') {

      dispatch(sucess());

    } else {
      dispatch(fail())
    }
  }
  const submitHandler = () => {
    console.log("element  id", id)
    console.log("element name", name);
    let find = false;
    db.map((ele) => {
      if (ele.id == id && ele.name == name) {
        find = true;
      }
    })
    if (find === true) {
      dispatch(sucess())
      // let Uid = v4();
      const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          console.log("Not able to set async storage")
        }
      }
      storeData('2224454657');

    } else {
      dispatch(fail());
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen </Text>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      <Text>Enter Id</Text>

      <TextInput
        style={styles.input}
        onChangeText={setId}
        value={id}
      />
      <Button
        title="Submit"
        onPress={() => {
          submitHandler();
        }}
      />
      {/* <TextInput
        style={styles.input}
        onChangeText={(text) => { return (handler(text)) }}
        value={text}
      /> */}
      {auth === 'true' ? <Button title="Authenticated" color="#1a8f3e" /> : auth == 'false' ? <Button title="authentication failed" color="#f54242" /> : <Button title="enter  text" style={{ backgroundColor: 'green' }} />}
      {auth === 'true' ? <Button title="Go To Home page"
        style={{ margin: 100 }}
        onPress={() => (navigation.navigate('Home'))}
      /> :
        null}
      {auth === 'false' ?
        <Button title="Want to SignUp ? " color="#d94355"
          onPress={() => (navigation.navigate('Signup'))}
        /> : null
      }


    </View>
  )
}


function Home({ navigation }) {
  let displayCount = "i am cool"
  const dispatch = useDispatch();
  displayCount = useSelector(state => state);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Text> Showing here {displayCount}</Text>

      <Button
        title="add me"
        onPress={() => {
          console.log("i amm in the add me")
          return (dispatch(sucess()))
        }}
      />
      <Button
        title="Decrement Me "
        onPress={() => {
          console.log("i amm in the add me")
          return (dispatch(fail()))
        }}
      />

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

function Signup({ navigation }) {
  const [name, setName] = React.useState("");
  const [dis, setDis] = React.useState(id);
  const [signup, setSignUp] = React.useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SignUP </Text>
      {/* <Text> Showing here {displayCount}</Text> */}
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      <Button
        title="Click here for token generation"
        onPress={() => {
          db.push({ name: name, id: id });
          setDis(id)
          id++;

          setSignUp(true);
        }}
      />
      {signup === true ?
        <Text>Success and your id is {id - 1}</Text> : null
      }
      {
        signup === true ?
          <Button
            title="Go to Login page"
            onPress={() => navigation.navigate('Login')}
          /> : null
      }

    </View>
  )
}
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerStyleInterpolator: forFade }}
      />

      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      /> */}
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerStyleInterpolator: forFade }}
      />


    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
});