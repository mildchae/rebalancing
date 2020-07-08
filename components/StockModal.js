import React, {useState} from 'react'
import {View, StyleSheet, Modal, TouchableOpacity, Text, TextInput, Dimensions,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const DATA = [
  {
    id: 'bd7a1bea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7a3bea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a428-fbd913a97f63',
    title: '345',
  },
  {
    id: '58694a0f-3da1-471f-bd36-145571129d72',
    title: '123123',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad43abb28ba',
    title: '123',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd913a97f63',
    title: '345',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571129d72',
    title: '123123',
  },
];
function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

function StockModal({modal, setModal}) {
  const [test1, setTest] = useState("")
  return (
    <Modal visible={ modal }
        transparent={true}
        onRequestClose={_ => setModal(false) }>
        <TouchableOpacity style={styles.modalBackground} onPress={_ => setModal(false)} />

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
                onChangeText={text => setTest(text)}
                value={test1}
                placeholder="ticker"
              />
            </View>
            <View style={styles.list}>
              <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
              />
            </View>


        </View>
    </Modal>
  )
}

const styles = StyleSheet.create(
  {
    modalContainer: {
      backgroundColor : 'white',
      position: 'absolute',
      bottom: '50%',
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
     },
     textInput: {
      height: 40, 
      width: Dimensions.get('window').width * 0.8,
      borderColor: 'gray', 
      borderWidth: 1,
      margin: 8,
      borderRadius: 8
    },
    list: {
      height: 100,
      alignItems: 'center'
    },
    item: {
      width: Dimensions.get('window').width * 0.8,
      backgroundColor: 'gray',
      height: 30,
      margin: 8
    }
  }
)

export default StockModal