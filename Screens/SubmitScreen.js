import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, View, Image, FlatList, SafeAreaView } from "react-native";
import burger from '../android/app/src/assets/burger.jpeg'
import mexican from '../android/app/src/assets/mexican.jpeg'
export default function SubmitScreen() {
    return (
        <View style={{ flex: 1, position: 'relative' , backgroundColor: '#f5f5f5'}}>
            <View style={{ backgroundColor: '#e8b730', height: '20%', paddingTop: 50  }}>
                <Text style={{ color: "#6f4aae", fontWeight: 'bold', fontSize: 42, marginLeft: 4, }} >Checkout</Text>
            </View>

            <View style={{ backgroundColor: 'white', width: '95%', borderRadius: 8, marginLeft: '2%', height: '15%', marginRight: '2%', padding: 12, position: 'absolute', top: 120, elevation: 10 }}>
                <View style={{ marginLeft: 10, borderBottomWidth: 0.3, borderColor: '#bea9c8', height: 40 }}>

                    <Text style={{ color: '#966fd5', fontSize: 18, fontWeight: 'bold',marginRight: '2%' }}>Lenina str, ta, Dnipro, Ukraine</Text>
                </View>
                <View style={{ marginLeft: 10, borderColor: '#bea9c8', height: 40, borderBottomWidth: 0.3, padding: 10 }}>
                    <Text style={{ color: '#966fd5', fontSize: 18, fontWeight: 'bold' }}>Time of delivery, 45min</Text>
                </View>
            </View>


            {/* part -2  */}

            <View style={{ position: 'absolute', top: 240, width: '100%', flex:1}}>
                <Text style={{ fontSize: 28, color: "#6f4aae", fontWeight: 'bold' }}> Your Order </Text>
                <View style={{ backgroundColor: 'white', width: '95%', marginLeft: '2%', borderRadius: 8, padding: 10, paddingTop: 0, elevation: 4 }}>
                    
                    <View style={{ flexDirection: 'row' }}>

                        <View>
                            <Image
                                style={{ resizeMode: 'contain', borderRadius: 8, marginRight: 10 }}
                                source={burger}
                                height={70}
                                width={70}
                            />

                        </View>


                        <View style={{width: '75%'}}>
                            <View>
                                <Text style={{ flex: 1, marginTop: 8, color: "#6f4aae", fontSize: 16, fontWeight: 'bold' }} >Smoking Beaf</Text>

                            </View>
                            <View style={{padding:0, flex:1, flexDirection: 'row'}} >
                            <Text style={{fontSize: 14, color: "#bea9c8", fontWeight: 'bold', flex:1 }}>500g</Text>

                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#6f4aae", textAlign: 'right', flex:1 }}>$10.00</Text>
                            </View>
                                 
                        </View>

                    </View>
                

                    {/* order component started                      */}
                    <View style={{ flexDirection: 'row' }}>

                        <View >
                            <Image
                                style={{ resizeMode: 'contain', borderRadius: 8, marginRight: 10 }}
                                source={mexican}
                                height={70}
                                width={70}
                            />

                        </View>


                        <View style={{width: '75%'}}>
                            <View>
                                <Text style={{ flex: 1, marginTop: 8, color: "#6f4aae", fontSize: 16, fontWeight: 'bold' }} >Mexican Styke</Text>

                            </View>
                            <View style={{padding:0, flex:1, flexDirection: 'row'}} >
                            <Text style={{fontSize: 14, color: "#bea9c8", fontWeight: 'bold', flex:1 }}>600g</Text>

                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#6f4aae", textAlign: 'right', flex:1 }}>$20.00</Text>
                            </View>
                                 
                        </View>

                    </View>
                
                    {/* order component end */}

 
                    
                    <View style={{ flexDirection: 'row' }}>

                        <View>
                            <Image
                                style={{ resizeMode: 'contain', borderRadius: 8, marginRight: 10 }}
                                source={mexican}
                                height={70}
                                width={70}
                            />

                        </View>


                        <View style={{width: '75%'}}>
                            <View>
                                <Text style={{ flex: 1, marginTop: 8, color: "#6f4aae", fontSize: 16, fontWeight: 'bold' }} >Smoking Beaf</Text>

                            </View>
                            <View style={{padding:0, flex:1, flexDirection: 'row'}} >
                            <Text style={{fontSize: 14, color: "#bea9c8", fontWeight: 'bold', flex:1 }}>500g</Text>

                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#6f4aae", textAlign: 'right', flex:1 }}>$10.00</Text>
                            </View>
                                 
                        </View>

                    </View>
                <View style={{borderTopWidth: 0.5, marginTop: 5, flexDirection: 'row'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#bea9c8', flex: 1,marginTop: 10}}>Total </Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#bea9c8', flex: 1,marginTop: 10, textAlign: 'right'}}>$ 45.00</Text>
                </View>

                
                
                
                
                
                
                </View> 
            </View>

            {/* part-3 */}
            <View style={{ position: 'absolute', top: 550, width: '100%'}}>
                <Text style={{ fontSize: 28, color: "#6f4aae", fontWeight: 'bold', marginBottom: 8 }}> Payment </Text>
                <View style={{ backgroundColor: 'white', width: '95%', marginLeft: '2%', borderRadius: 8, padding: 10, paddingTop: 0, elevation: 4 }}>
                    
                <View style={{ marginTop: 5, flexDirection: 'row'}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', flex: 1,marginTop: 10}}>VISA****1234 </Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ea4c89', flex: 1,marginTop: 10, textAlign: 'right'}}>Change</Text>
                </View>

            
                </View> 
            </View>

            <View  style={{ position: 'absolute', top: 690, width: '100%',backgroundColor: '#ea4c89', height: 40, width: '95%',borderRadius: 25, marginLeft: '2%', justifyContent: 'center',alignContent: 'center'}}>
                <Text style={{color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold',}}> Submit </Text>
            </View>

        </View>
    )
}