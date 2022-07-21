import { useDispatch} from "react-redux"
import React, { useState } from "react"
import { Button, StyleSheet, TextInput, View,Text } from "react-native";
import { getData } from "../state/action";
import { TouchableOpacity } from "react-native-gesture-handler";



export const Profile = ({ navigation }) => {
    const [userDetails, setUserDetails] = useState({
        chainId: 4,
        userAddress: ""
    });
    const dispatch = useDispatch();
    return (
        <View>
            <TextInput
                style={styles.TextInput}
                value={userDetails.userAddress}
                placeholder="Provide User Address to fetch data"
                onChangeText={(text)=>{setUserDetails({...userDetails,userAddress:text})}}
            />
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    dispatch(getData(userDetails))
                }}
            >
                <Text style={styles.buttonText}>Fetch UserData</Text>
            </TouchableOpacity>
            <Button
                title='Go to home'
                style={styles.buttonStyle}
                onPress={() => {
                    navigation.navigate('Home', { name: 'Home' })
                }} />
        </View>
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 10,
        backgroundColor: 'lightsalmon',
        padding: 5,
        paddingTop: 15,
        marginTop: 15,
        paddingBottom: 15,
        marginHorizontal:50,
    },
    TextInput: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: 250,
        height: 40,
        marginTop: 10,
        textAlign: 'center',
        alignSelf:'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
    },
})