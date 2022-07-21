import { View, StyleSheet, Button, Alert } from "react-native";
import { useCamera } from "react-native-camera-hooks";
import { RNCamera } from "react-native-camera";
import React, { useState } from "react";
import RNFS from 'react-native-fs';
import CustomButton from "../utils/CustomButton";
import { useDispatch } from "react-redux";
import { Profileuri } from "../state/action";

export const Camera = ({navigation}) => {
    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const dispatch=useDispatch();
    const captureHandle = async () => {
        try {
            const data = await takePicture();
            const filePath = data.uri;
            const res=data.uri.split("file:///Users/salonijain/Library/Developer/CoreSimulator/Devices/FF79E57C-3DD2-4259-A5C0-C8BF321E1010/data/Containers/Data/Application/639290CA-BCC3-4BA2-979A-2B3851211719/Library/Caches/Camera/").pop();
            const newFilePath = RNFS.LibraryDirectoryPath + res;
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
                })
                .catch(error => {
                    console.log(error);
                }) 
            
            var res64 = await RNFS.readFile( newFilePath, 'base64').then(res => { return res });
            console.log(res64);
            dispatch(Profileuri(res64));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
                <CustomButton
                    title="Capture"
                    color='#1eb900'
                    onPressFunction={() => {
                        captureHandle();
                        navigation.navigate('Register',{name:'Register'})
                    }}
                />
            </RNCamera>
        </View>
    );
}


const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }

})
// const ShowButtonAlert = () => {
//         Alert.alert("First Attempt", "Alert Message", [
//             {
//                 text: 'Later',
//                 onPress: () => {
//                     console.log("Ok button pressed")
//                 }
//             },
//             {
//                 text: 'Cancel',
//                 onPress: () => {
//                     console.log('Ok Cancel Pressed')
//                 }
//             }
//         ])
//     };