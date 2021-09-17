import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const DATA = [

    {
        item:
        {
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto", "cool", "great", "genius", "Idiot", "great", "genius", "Idiot", "great", "genius", "Idiot", "great", "genius", "Idiot", "great", "genius", "Idiot", "great", "genius", "Idiot"]
        },
    },
    {
        item: {
            title: "Sides",
            data: ["French Fries", "Onion Rings", "Fried Shrimps"]
        },
    },
    {
        item: {
            title: "Drinks",
            data: ["Water", "Coke", "Beer"]
        },
    },
    {
        item:
        {
            title: "Desserts",
            data: ["Cheese Cake", "Ice Cream"]
        }

    },
    {
        item: {
            title: "cool",
            data: ["cheseDec", "Pizza"]
        }
    },
    {
        item: {
            title: "cool",
            data: ["cheseDec", "Pizza"]
        }
    },
    {
        item: {
            title: "cool",
            data: ["cheseDec", "Pizza"]
        }
    },
    {
        item: {
            title: "cool",
            data: ["cheseDec", "Pizza"]
        }
    },
    {
        item: {
            title: "cool",
            data: ["cheseDec", "Pizza"]
        }
    },
    {
        item: {
            title: "cool",
            data: ["cheseDec", "Pizza"]
        }
    },
    {
        item: {
            title: "cool",
            data: ["cheseDec", "Pizza"]
        }
    },
    {
        item: {
            title: "cool",
            data: ["cheseDec", "Pizza"]
        }
    },
    {
        item: {
            title: "cool",
            data: ["cheseDec", "Pizza"]
        }
    },
    {
        item: {
            title: "cool",
            data: ["cheseDec", "Pizza"]
        }
    },
    {
        item: {
            title: "cool",
            data: ["cheseDec", "Pizza"]
        }
    },


];


let Header = ({ title }) => {
    return (
        <View style={{ backgroundColor: 'red', height: 50 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28, textAlign: 'center', margin: 5 }}>{title}</Text>
        </View>
    )
}

const Item = ({ title, data }) => (
   
        <FlatList
            
            ListHeaderComponent={() => { return (<Header title={title} />) }}
            data={data}
            renderItem={(item) => {
                console.log("++++++++++++++++++++++++++++++++++++++", item)
                return (<Text style={styles.title}>   {item.item} </Text>)
            }}

        />


  

    // <Text style={styles.title}>{title}</Text> */}


);

const SectionListScreen = () => (
    
        {/* <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      stickySectionHeadersEnabled
    /> */},
      
      
        <FlatList
            data={DATA}
            renderItem={({ item }) => {
                console.log("------------------------------", item.item.data)
                return (<Item title={item.item.title} data={item.item.data} />)
            }}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={() => { return (<Header title={'CityMall'} />) }}

        />



    
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});

export default SectionListScreen;