import React, { useState } from 'react'
import { Button, StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AddButton from '../components/add-button'
import StockModal from '../components/StockModal'
function DetailsScreen({ navigation }) {
    const [name, onChangeName] = useState('')
    const [volumn, onChangeVolumn] = useState('')
    const [modal, setModal] = useState(false)

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
            placeholder="total volumn($)"
          />
          <View style = {styles.lineStyle} />
          
          {/* <AddButton title='add stock' onPress={() => {setModal(true)}} /> */}
          <AddButton title='add ticker' onPress={() => navigation.navigate('pick')} />

        </View>

        {/* <StockModal modal = {modal} setModal ={setModal}/> */}
        <View style={styles.HeaderContainer}>
          <TouchableOpacity style={styles.backicon} onPress={() => navigation.goBack()}>
            <Icon name="keyboard-arrow-left" size={35} color="#fff"  />         
          </TouchableOpacity>
    
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
        paddingTop: 110,
        flex: 1,
        alignItems: 'center'
      },
      textInput: {
        height: 40, 
        width: Dimensions.get('window').width * 0.8,
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
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: 'rgb(133,162,228)',
        
      },
      backicon: {
        position: 'absolute',
        left: 20,
        right: 0,
        width: 30,
        height: 30,
        // backgroundColor: 'red'
      },
      headerText: {
        color: 'white',
        fontSize: 18
      },
      lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin: 10,
        width: Dimensions.get('window').width * 0.8

      },


    }
  )
  

  export default DetailsScreen