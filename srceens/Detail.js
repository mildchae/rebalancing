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
          <TouchableOpacity style={styles.backicon} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={25} color="#fff"  />         
          </TouchableOpacity>
    
          <Text style={styles.headerText}>
            포트폴리오 만들기
          </Text>
        </View>

        <Modal visible={ modal }
        transparent={true}
        onRequestClose={_ => setModal(false) }>
            <TouchableOpacity style={styles.modalBackground} onPress={_ => setModal(false)}>

            </TouchableOpacity>
            <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                  <Text style={{flex:1, textAlign:'center', fontSize:20}}>add stock</Text>
                  <TouchableOpacity style={styles.closeicon} onPress={_ => setModal(false) }>
                      <Icon name="close" size={30} color="#333" />
                  </TouchableOpacity>
                </View>
                <View style={styles.modalContent}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => onChangeVolumn(text)}
                    value={volumn}
                    placeholder="total volumn($)"
                  />
                </View>

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
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: 'rgb(106,188,86)',
        
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
      modalContainer: {
       backgroundColor : 'white',
       position: 'absolute',
       bottom: 0,
       width: '100%', 
       height: '40%',
       borderTopRightRadius: 16,
       borderTopLeftRadius: 16,
       zIndex: 2,

      },
      modalBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 1
      },
      modalHeader:{
        // backgroundColor: 'red',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
      },
      closeicon:{
        position: 'absolute',
        right: 20,

      },
      modalContent:{
        justifyContent: 'center',
        alignItems: 'center',
      }

    }
  )
  

  export default DetailsScreen