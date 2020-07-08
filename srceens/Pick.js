import React, { useState } from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
const DATA = [
  {
    id: '1',
    title: 'APPL',
    desc: 'Apple Inc.',
  },
  {
    id: '2',
    title: 'TSLA',
    desc: 'Tesla Inc.',
  },
  {
    id: '3',
    title: 'SBUX',
    desc: 'starbucks',
  },
];

function Item({ title, setTicker, desc }) {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={()=>{setTicker(title)}}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{marginLeft:10}}>{desc}</Text>
      </View>
      <View style={styles.line}></View>
    </TouchableOpacity>
  );
}

function PickScreen({ navigation }) {
  const [ticker, setTicker] = useState('')

  return(
    <View style={styles.Container}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity style={styles.backicon} onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={35} color="#fff"  />         
        </TouchableOpacity>
        <TextInput
                style={styles.textInput}
                onChangeText={text => setTicker(text)}
                value={ticker}
                placeholder="ticker"
              />
        <TouchableOpacity style={styles.done} onPress={() => navigation.goBack()}>
          <Icon name="done" size={35} color="#fff"  />         
        </TouchableOpacity>
      </View>
      <View style={styles.Content}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} desc={item.desc} setTicker={setTicker} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

// const styles = StyleSheet.
const styles = StyleSheet.create(
  {
    Container: {
      flex: 1,
      height: '100%',
      width: '100%'
    },
    Content: {
      // backgroundColor:"yellow",
      paddingTop : 60,
      zIndex: -1,
      height: '100%'
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
      width: 30,
      height: 30,
      // backgroundColor: 'red'
    },
    headerText: {
      color: 'white',
      fontSize: 18
    },
    done: {
      position: 'absolute',
      right: 20,
      width: 30,
      height: 30,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      height: 40, 
      width: Dimensions.get('window').width * 0.6,
      borderColor: 'gray', 
      borderWidth: 1,
      margin: 8,
      borderRadius: 8,
      borderColor: 'white',
      backgroundColor: 'white'
    },
    itemContainer: {
      paddingLeft: 10,
      marginVertical: 10,
    
    },
    item: {
      // backgroundColor: '#f9c2ff',
      flexDirection: 'row',

      // padding: 20,
      // marginHorizontal: 16,
    },
    title: {
      fontSize: 26,
    },
    line:{
      borderWidth: 0.5,
      borderColor:'black',
      alignSelf: 'flex-end',
      width: Dimensions.get('window').width * 0.8,
      marginTop: 5
    },
  }
)

export default PickScreen