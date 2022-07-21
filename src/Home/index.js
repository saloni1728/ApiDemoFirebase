import {  ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
export const Home = ({ navigation }) => {
    const image={uri:'https://i.pinimg.com/originals/e0/77/ee/e077eec5651d294de5ffd25b340f9e13.jpg'}
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={styles.mainContainer}>
                {/* <ScrollView contentInsetAdjustmentBehavior='automatic' style={styles.scrollView} > */}
                    <ImageBackground style={styles.image} resizeMode='cover' source={image}>
                    <View style={styles.body}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => {
                                navigation.navigate('Register', { name: 'Register' })
                            }}
                        >
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => {
                                navigation.navigate('Content', { name: 'Content' })
                            }}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    </ImageBackground>
                {/* </ScrollView> */}
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
    },
    body: {
        paddingHorizontal: 70,
    },
    image: {
        flex:1,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    scrollView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    buttonStyle: {
        borderRadius: 10,
        backgroundColor: 'lightsalmon',
        padding: 5,
        paddingTop: 15,
        marginTop: 15,
        paddingBottom: 15,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
    },

})