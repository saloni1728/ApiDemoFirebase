import { useState } from "react"
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../state/action";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ceil } from "react-native-reanimated";

export const Register = ({ navigation }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        chainId: 4,
        username: "",
        mobileNumber: "",
        email: "",
        customUrl: "",
        userAddress: "",
        bio: "",
        profilePic: "",
        country: "",
        countrySymbol: "",
        countryCode: "",
    });
    const result = useSelector(x => x.ProfilePic.urlbase64);
    // console.log(data);
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Register</Text>
            <TextInput
                style={styles.TextInput}
                value={data.username}
                placeholder="User Name"
                onChangeText={(text) => { setData({ ...data, username: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.mobileNumber}
                placeholder="MobileNumber"
                onChangeText={(text) => { setData({ ...data, mobileNumber: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.email}
                placeholder="Email"
                onChangeText={(text) => { setData({ ...data, email: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.customUrl}
                placeholder="Custom Url"
                onChangeText={(text) => { setData({ ...data, customUrl: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.userAddress}
                placeholder="User Address"
                onChangeText={(text) => { setData({ ...data, userAddress: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.bio}
                placeholder="Bio"
                onChangeText={(text) => { setData({ ...data, bio: text }) }}
            />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Camera', { name: 'Camera' });
                }}
                style={styles.to}
            >
                <Text style={styles.text} >Profile Pic +</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.TextInput}
                value={data.country}
                placeholder="Country"
                onChangeText={(text) => { setData({ ...data, country: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.countrySymbol}
                placeholder="Country Symbol"
                onChangeText={(text) => { setData({ ...data, countrySymbol: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.countryCode}
                placeholder="Country Code"
                onChangeText={(text) => { setData({ ...data, countryCode: text }) }}
            />
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    console.log(result);
                    setData({ ...data, profilePic: result });
                    dispatch(postData(data));
                }}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6FA',
        alignItems: 'center',
        marginTop: StatusBar.height,

    },
    TextInput: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: 250,
        height: 40,
        marginTop: 10,
        textAlign: 'center'
    },
    text: {
        color:'lightgray',
        textAlign:'center'
    },
    to:{
        borderRadius:5,
        height: 40,
        marginTop: 10,
        backgroundColor: 'white',
        width:250,
        justifyContent:'center'
    },
    buttonStyle: {
        borderRadius: 10,
        backgroundColor: 'lightsalmon',
        width: 200,
        marginTop: 10,
        paddingTop: 6,
        paddingBottom: 6
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
    },
})

// {
//     "chainId": 4,
//     "username": "sonaliVerma",
//     "mobileNumber": "0192837465",
//     "email": "veramsonali1@gmail.com",
//     "customUrl": "Nothing",
//     "userAddress": "Punjabi colony,jhansi",
//     "bio": "NA",
//     "profilePic": "NA",
//     "country": "India",
//     "countrySymbol": "NA",
//     "countryCode": "+91"
//  }   

// {
//     "headers": {
//         "content-type": "application/json",
//             apiKey: "xCNpcsufSi5yYvGVCncEx0HAw1LonW1JoFY",
//                 Authorization:
//         "eyJhbGciOiJIUzI1NiJ9.MHhqNkY0OHViMzR2Zjg3Yg.4B6Cw_VnheVrQfngZVkU2yrHyLI2dPnJq4oEhgj7Xfo",
//         }
// }

// { "url": "https://plugxrapi.brugu.io/dev/v1/addUser" }