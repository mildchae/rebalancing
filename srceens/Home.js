import React, { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated, Platform, ScrollView, TouchableOpacity } from 'react-native';

const HEADER_MIN_HEIGHT = 80
const HEADER_MAX_HEIGHT = 200

function HomeScreen({ navigation }) {
  
  const scrollYAnimatedValue  =  useRef(new Animated.Value(0)).current
  const [data, setData] = useState([])

  useEffect(() => {
    setData([...Array(1).keys()])
  }, [])

  const headerHeight = scrollYAnimatedValue.interpolate(
    {
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    }
  )
  const borderRadius = scrollYAnimatedValue.interpolate(
    {
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      outputRange: [25, 5],
      extrapolate: 'clamp'
    }
  )
  const headerBackground = scrollYAnimatedValue.interpolate(
    {
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      outputRange: ['rgb(133,162,228)', 'rgb(255,255,255)'],
      extrapolate: 'clamp'
    }
  )
  const test = () => {
    setData([...Array(data.length+1).keys()])
  }
  useEffect( () => {
    console.log(headerHeight)
  })

  
    return (
      <View style={styles.container}>

      <ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT+20 }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator = {false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollYAnimatedValue } } }]
        )}
      >
          {
            data.map((item, key) =>
              (
                <View key={key} style={styles.item}>
                  <Text style={styles.itemText}>Row No : {item}</Text>
                </View>
              ))
          }
          <TouchableOpacity activeOpacity={0.8} style={styles.addButton} onPress={() => navigation.navigate('Details')}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

      </ScrollView>


      <Animated.View 
        style={[styles.animatedHeaderContainer, 
          {
            height:headerHeight, 
            borderBottomLeftRadius: borderRadius, 
            borderBottomRightRadius: borderRadius,
          }]}
      >
        <Text style={styles.headerText}>
          포트폴리오를 설정 해보세요 !
        </Text>
      </Animated.View>
    </View>
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text style={styles.text}>Home Screen</Text>
      //   <Button
      //     title="Go to Details"
      //     onPress={() => navigation.navigate('Details')}
      //   />
      // </View>
    );
  }

  const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      animatedHeaderContainer: {
        position: 'absolute',
        top: (Platform.OS == 'ios') ? 20 : 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: 'rgb(133,162,228)',
        
      },
      headerText: {
        color: 'white',
        fontSize: 18
      },
      item: {
        backgroundColor: '#eee',
        margin: 8,
        height: 155,
        width: 300,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.56,
        shadowOffset: { width: 10, height: 1},
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'white'
      },
      itemText: {
        color: 'black',
        fontSize: 16
      },
      addButton: {
        width: 300,
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
  
  export default HomeScreen