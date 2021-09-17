
import React, { Component, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';


export default function User() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);



    let Header = () => {
        return (
            <View style={{ backgroundColor: 'red', height: 50, width: 700, marginTop: 2 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28, textAlign: 'center', margin: 5 }}>City Mall</Text>
            </View>
        )
    }
    let Footer = () => {
        return (
            <View style={{ backgroundColor: 'grey', height: 50, width: 700, marginTop: 2 }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )

    }

    let fetchUsers = () => {

        axios.get(`https://api.github.com/users?since=${page}&per_page=10`).then(response => {
            let tempUser = [...users, ...response.data];
            setUsers(tempUser)
        })
            .catch(error => {
                setError(error)
            });
    };

    useEffect(() => {
        fetchUsers(page);

    }, [])


    let fetchMoreUsers = () => {

        let newPage = parseInt(page) + 100
        setPage(newPage);

    };

    useEffect(() => {
        fetchUsers();

    }, [page])


    return (
        <FlatList
            contentContainerStyle={{
                backgroundColor: '#FBFBF8',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
            }}
            data={users}
            ListHeaderComponent={Header}
            ListFooterComponent={Footer}
            stickyHeaderIndices={[0,3,10]}
            keyExtractor={user => user.id.toString()}
            onEndReached={fetchMoreUsers}
            onEndReachedThreshold={0.5}
            initialNumToRender={10}
            renderItem={({ item }) => (
                <View
                    style={{
                        marginTop: 10,
                    }}>
                    <View>
                        <Image
                            style={{ width: 200, height: 100 }}
                            source={{ uri: item.avatar_url }}
                        />
                        <Text>{item.login}</Text>
                    </View>
                </View>
            )}
        />
    )



}





