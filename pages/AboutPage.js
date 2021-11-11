import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function AboutPage({navigation}) {

  useEffect(()=>{
    navigation.setOptions({
        title:"소개 페이지",
        headerStyle: {
          backgroundColor: '#251a7a',
          shadowColor: "#251a7a",
        },
        headerTintColor: "#fff",
    })
  },[])

  return (
    <ScrollView style={styles.mainBackground}>
      <StatusBar style="light" />
      <View style={styles.textContainer}>
        <Text style={styles.headerTextStyle}>Hi! 스파르타코딩 앱개발 반에 오신 것을 환영합니다</Text>
      </View>

      <View style={styles.mainBlock}>
        <View style={styles.imageContainer}>
          <Image
            source= {{uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"}}
            style={styles.mainImage}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style = {styles.mainTitle}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
        </View> 
        <View>
          <Text style={styles.contentText}>꼭 완주하셔서 여러분 것으로 만들어 가시길 바랍니다.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.instaButton}>
            <Text style={styles.buttonText}>여러분의 인스타 계정</Text>
          </TouchableOpacity>
        </View>
      </View> 
    </ScrollView>


  )

}

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: "#251a7a",
    flex: 1,
  },
  textContainer: {
    marginTop: 70,
    marginHorizontal: 30,

  },
  headerTextStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center'
  },
  mainBlock: {
    backgroundColor: '#fff',
    marginHorizontal: 30,
    marginVertical: 70,
    borderRadius: 40,
    padding: 20,
    height: 500
  },
  imageContainer: {
    width: "100%",
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  mainImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  titleContainer: {
    marginTop: 10,
    marginBottom: 20
  },
  mainTitle: {
    fontWeight: "700",
    fontSize: 20,
    textAlign: 'center',
  },
  contentText: {
    fontWeight: "700",
    fontSize: 15,
    textAlign: 'center',
    color: "#333",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  instaButton: {
    backgroundColor: '#fcc265',
    justifyContent: 'center',
    borderRadius: 20,
    height: 70,
    width: 200
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: "700",
    textAlign: 'center'
  }
})