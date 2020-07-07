import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

function AddButton(props) {

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.addButton} onPress={props.onPress}>
            <Text style={styles.addButtonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
      addButton: {
        width: Dimensions.get('window').width * 0.8,
        height: 40,
        margin: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(150,150,150)'
      },
      addButtonText: {
        color: 'white',
        fontSize: 20
      }
    }
  )

export default AddButton