import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const [n1, setN1]= useState('');
  const [n2, setN2]= useState('');
  const [n3, setN3]= useState('');
  const [n4, setN4]= useState('');
  const [media, setMedia]= useState('');

  const x=parseFloat (media);
  const por = x/4;
  
  function res(){
    setMedia(Number(n1)+ Number(n2)+Number(n3)+Number(n4));
    Keyboard.dismiss();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.btnText}> Média </Text>
      <StatusBar style="light"/>
      <Text style={styles.btnText}>Digite suas Notas</Text>
      <TextInput style={styles.input} keyboardType='decimal-pad' maxLength={3} placeholder='sua nota 1'onChangeText={int => setN1(int)}> </TextInput>
      <TextInput style={styles.input} keyboardType='decimal-pad' maxLength={3} placeholder='sua nota 2'onChangeText={int => setN2(int)}> </TextInput>
      <TextInput style={styles.input} keyboardType='decimal-pad' maxLength={3} placeholder='sua nota 3'onChangeText={int => setN3(int)}> </TextInput>
      <TextInput style={styles.input} keyboardType='decimal-pad' maxLength={3} placeholder='sua nota 4'onChangeText={int => setN4(int)}> </TextInput>
       <Text style={styles.btnText}>{n1}+{n2}+{n3}+{n4}</Text>

      <TouchableOpacity style={styles.btn} activeOpacity={0.4} onPress={res} >
        <Text style={styles.btnText}>Calcular Média</Text>  
      </TouchableOpacity>
      <Text style={styles.btnText}>Total:{media}</Text>
      <Text style={styles.btnText}>Média:{por} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#485ace',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    borderRadius:1000,
    backgroundColor:'#2dfd87',
    width:150,
    height:35,
    marginTop:10,
    justifyContent:'center',
  },
  btnText:{
    color:'#fff',
    textAlign:'center',
  },
  input:{
    borderColor:'#2dfd87',
    textAlign:'center',
    marginTop:15,
    borderLeftWidth:3,
    borderRightWidth:3,
    borderTopWidth:3,
    borderBottomWidth:3,
    borderTopLeftRadius:1000,
    borderTopRightRadius:1000,
    borderBottomRightRadius:1000,
    borderBottomLeftRadius:1000,
    width:'50%',
  }
});
