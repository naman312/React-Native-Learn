import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import harpic from "../android/app/src/assets/harpic.jpg"
import burger from "../android/app/src/assets/burger.jpeg"
const DATA = [

    {

        title: "Popular dishes",
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

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

        title: "Sides",
        data: "Fried Shrimps",
        highlight: 'false',

    }, {

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
            <Text style={{ fontWeight: 'bold', fontSize: 28, margin: 5, color: 'white', backgroundColor: 'blue', textAlign: 'center' }}>{title}</Text>
        </View>
    )
}

const Item = ({ title, data, highlight }) => {
    // <FlatList

    //     ListHeaderComponent={() => { return (<Header title={title} />) }}
    //     data={data}
    //     renderItem={(item) => {
    //         console.log("++++++++++++++++++++++++++++++++++++++", item)
    //         return (<Text style={styles.title}>   {item.item} </Text>)
    //     }}

    // />


    // <Text style={styles.title}>{title}</Text> */}
    if (highlight == 'true') {
        console.log("9999999999999999999999999999999999999999999")
        return (
            <Text style={styles.header}>   {title} </Text>
        )
    }

    return (
        <View style={styles.item}>

            <View>
                <Image source={burger} resizeMode={'contain'} style={styles.avatar} />

            </View>


            <View style={{ marginLeft: 10, marginTop: 6 }}>
                <View style={{ color: 'yellow', flexDirection:'row', flex:1 }}>
                    <Text style={{ color: '#6f4aae', textAlign: 'left', fontSize: 18,flex: 1 }}>{data}</Text>
                    <View style={{marginTop: 10, flexDirection: 'row', paddingLeft: 50}}>
                    <View style={{backgroundColor: 'yellow', borderRadius: 8, width: 8,height:8,textAlign: 'right',marginRight: 3}}></View>
                    <View style={{backgroundColor: 'yellow', borderRadius: 8, width: 8,height:8,textAlign: 'right',marginRight: 3}}></View>
                    <View style={{backgroundColor: 'yellow', borderRadius: 8, width: 8,height:8,textAlign: 'right',marginRight: 3}}></View>
                    <View style={{backgroundColor: 'yellow', borderRadius: 8, width: 8,height:8,textAlign: 'right',marginRight: 3}}></View>
                    <View style={{backgroundColor: 'yellow', borderRadius: 8, width: 8,height:8,textAlign: 'right',marginRight: 3}}></View>
                    <View style={{backgroundColor: 'yellow', borderRadius: 8, width: 8,height:8,textAlign: 'right',marginRight: 3}}></View>

                    </View>
                   

                </View>


                <Text style={{ fontSize: 12, color: "#bea9cb" }}>Traditional Ukranian dish,{"\n"}
                    Soup with meat anvegetables</Text>

                <View style={{marginTop:20,marginBottom: 10}}> 
                    <Text style={{ fontWeight: 'bold', color: '#6f4aae', textAlign: 'left', fontSize: 22 }}>12$               Order</Text>
                </View>
            </View>
        </View>


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

    let dynamicSticky = [];
    for (let i = 0; i < DATA.length; i++) {
        if (DATA[i].highlight == 'true') {
            dynamicSticky.push(i);
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
        // ListHeaderComponent={() => { return (<Header title={'CityMall'} />) }}

        />


    )




};

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    item: {
        backgroundColor: "white",
        marginLeft: 14,
        marginVertical: 8,
        flexDirection: 'row',
        paddingLeft: 10,
        marginRight: 14,
        borderRadius: 6,
        elevation: 1,
        height: 150



    },
    header: {
        paddingTop: 10,
        fontSize: 24,
        backgroundColor: "white",
        color: 'purple',
        fontWeight: 'bold',
        height: 50,


    },
    title: {
        fontSize: 24,

    },
    avatar: {
        marginTop: 20,
        width: 150,
        margin: 0,
        height: 100,
        borderRadius: 8
    }
});

export default SectionListScreen;