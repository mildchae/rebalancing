import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


function DetailsScreen({ navigation }) {
    const [name, onChangeName] = useState('');
    const [volumn, onChangeVolumn] = useState('');

    return (
      <View style={styles.container}>
        <View style={styles.initSetting}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeName(text)}
            value={name}
            placeholder= "name"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeVolumn(text)}
            value={volumn}
            placeholder="volumn"
          />
        </View>
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
        {/* <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        /> */}

        <View style={styles.HeaderContainer}>
          <Icon style={styles.backicon} name="arrow-left" size={30} color="#fff" onPress={() => navigation.goBack()} />
          <Text style={styles.headerText}>
            포트폴리오 만들기
          </Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
      },
      initSetting: {
        paddingTop: 120,
        flex: 1,
        alignItems: 'center'
      },
      textInput: {
        height: 40, 
        width: 300,
        borderColor: 'gray', 
        borderWidth: 1,
        margin: 8,
        borderRadius: 8
      },
      HeaderContainer: {
        position: 'absolute',
        top: (Platform.OS == 'ios') ? 20 : 0,
        left: 0,
        right: 0,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: 'rgb(106,188,86)',
        
      },
      backicon: {
        position: 'absolute',
        left: 10,
        right: 0,
      },
      headerText: {
        color: 'white',
        fontSize: 18
      },

    }
  )
  

  export default DetailsScreen