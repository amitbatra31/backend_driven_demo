import React from "react";
import {View, Text,StyleSheet} from 'react-native';

type BoxProps = {
    title : string;
    subtitle?: string;
}
export default function Box(props: BoxProps) {
    return <View style={styles.container}>
        <Text style= {styles.titleText}> {props.title}</Text>
        {props.subtitle ? <Text style={styles.subtitleText}> {props.subtitle}</Text>:null }
    </View>
}

const styles = StyleSheet.create({
    container : {
        padding: 20,
        backgroundColor: 'red',
        borderRadius: 10,
        margin: 10,
    },
    titleText: {
        fontSize: 20,
        lineHeight: 24,
        color: 'white',
        marginBottom: 10,
    },
    subtitleText: {
        fontSize: 14,
        lineHeight: 18,
        color: 'white',
        marginBottom: 10,
    }
})