import React, { useState } from 'react'
import { Button, StyleSheet, View, Text, TextInput, Dimensions, Modal, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AddButton from '../components/add-button'

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
          <AddButton title='add stock' onPress={() => {setModal(true)}} />
        </View>

        <View style={styles.HeaderContainer}>
          <Icon style={styles.backicon} name="arrow-left" size={30} color="#fff" onPress={() => navigation.goBack()} />
          <Text style={styles.headerText}>
            포트폴리오 만들기
          </Text>
        </View>

        <Modal visible={ modal }
        animationType="slide" transparent={true}
        onRequestClose={_ => setModal(false) }>
            <View style={styles.modalContainer}>

                <Text>123123</Text>
                {/* For example, I am adding a close button */}
                <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={_ => setModal(false) }>
                    <Icon type="FontAwesome" name='times' style={ styles.closeIcon } />
                </TouchableOpacity>
            </View>
        </Modal>

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
      lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin: 10,
        width: Dimensions.get('window').width * 0.8

      },
      modalContainer: {
       backgroundColor : 'white',
       position: 'absolute',
       bottom: 0,
       width: '100%', 
       height: '70%',
       borderTopRightRadius: 16,
       borderTopLeftRadius: 16,

      }

    }
  )
  

  export default DetailsScreen