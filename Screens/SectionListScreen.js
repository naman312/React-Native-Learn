import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const DATA = [

    {

        title: "Main dishes",
        data: "Pizza",
        highlight: 'true',
    },
    {

        title: "Main dishes",
        data: "Burger",
        highlight: 'false',
    },

    {

        title: "Main dishes",
        data: "Risotto",
        highlight: 'false',
    },
    {

        title: "Main dishes",
        data: "cool",
        highlight: 'false',
    },
    {

        title: "Main dishes",
        data: "great",
        highlight: 'false',
    },
    {

        title: "Main dishes",
        data: "genius",
        highlight: 'false',
    },
    {

        title: "Main dishes",
        data: "Idiot",
        highlight: 'false',
    },



    {

        title: "Sides",
        data: "French Fries",
        highlight: 'true',

    },
    {

        title: "Sides",
        data: "Onion Rings",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },{

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    },

];

// const DATA2 = [
//     {
//         title: "Main Dishes",
//         highlight: 'true',
//         data=""

//     }
// ]


let Header = ({ title }) => {
    return (
        <View style={{ height: 50 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 28, margin: 5 }}>{title}</Text>
        </View>
    )
}

const Item = ({ title, data,highlight }) => { 
    // <FlatList

    //     ListHeaderComponent={() => { return (<Header title={title} />) }}
    //     data={data}
    //     renderItem={(item) => {
    //         console.log("++++++++++++++++++++++++++++++++++++++", item)
    //         return (<Text style={styles.title}>   {item.item} </Text>)
    //     }}

    // />


    // <Text style={styles.title}>{title}</Text> */}
        if(highlight=='true'){
            console.log("9999999999999999999999999999999999999999999")
            return (
                <Text style={styles.header}>   {title} </Text>
            )
        }

        return (
            <Text style={styles.item}>   {data} </Text>
        )

};

const SectionListScreen = () => { 

    // <SectionList
    //     sections={DATA}
    //     keyExtractor={(item, index) => item + index}
    //     renderItem={({ item }) => <Item title={item} />}
    //     renderSectionHeader={({ section: { title } }) => (
    //         <Text style={styles.header}>{title}</Text>
    //     )}
    //     stickySectionHeadersEnabled
    // />

let dynamicSticky=[];
    for(let i=0;i<DATA.length;i++){
            if(DATA[i].highlight=='true'){
                dynamicSticky.push(i+1);
            }
}
console.log("dynamic sticky ", dynamicSticky)

return (
    <FlatList
        data={DATA}
        renderItem={({ item }) => {
            console.log("------------------------------", item)
            return (<Item title={item.title} data={item.data} highlight={item.highlight} />)
        }}
        stickyHeaderIndices={dynamicSticky}
        ListHeaderComponent={() => { return (<Header title={'CityMall'} />) }}

    />


)
    



    };

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
        backgroundColor: "red",
        color: 'white'
    },
    title: {
        fontSize: 24,

    }
});

export default SectionListScreen;