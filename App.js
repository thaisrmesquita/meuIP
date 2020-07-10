import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import logo from './assets/logo.png';

export default function App() {

  const [data, setData] = useState('');

  async function findMyIp() {
    setData('Descobrindo o meu IP');
    const ip = await fetch('http://httpbin.org/ip')
    const data = await ip.json();
    setData(data.origin)
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={logo}/>
        <Text style={styles.ip}>{data}</Text>
        <Button title="Descobrir meu IP" onPress={findMyIp}/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.made}>Feito por Thaís Ribeiro</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2336',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  ip:{
    color:'white',
    paddingTop: 20,
    paddingBottom: 20
  },
  footer: {
    paddingBottom:10,
    paddingTop: 10
  },
  made:{
    color:'white',
    textAlign: 'center'
  }
});
