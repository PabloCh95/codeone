import { View, Text, StyleSheet } from 'react-native'
import React,{useEffect, useState} from 'react'
import useDate from '../hooks/useDate';

export default function Points({products}:any) {
  const { month } = useDate();
  
  const points = products.reduce( (acumulado:any, actual:any) => {
    if(actual['is_redemption']===false){
      return acumulado + Number(actual?.points);
    }
    return acumulado;
   }, 0);

  return (
    <View>
      <Text style={styles.textTitlePoints}>Tus Puntos </Text>
      <View style={styles.containerCardPoints}>
            <Text style={styles.textMonths}>{month(products[0]?.createdAt)}</Text>
            <Text style={styles.textPoints}>{points} pts</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    textTitlePoints:{
        color:'#9B9898', 
        fontSize:14,
        fontWeight:'800',
        marginBottom:20,
        marginLeft:20
    },
    containerCardPoints:{
        width:'73%',
        backgroundColor:'#334FFA', 
        height:143, 
        borderRadius:20, 
        marginLeft:'auto',
        marginRight:'auto',
    },
    textMonths:{
      fontSize:18, 
      fontWeight:'800', 
      fontFamily:'Avenir', 
      color:'#ffffff',
      marginLeft:19,
      marginTop:21, 
      textTransform:'capitalize'
    },
    textPoints:{
      fontSize:32, 
      fontWeight:'900', 
      fontFamily:'Avenir', 
      color:'#ffffff',
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:7
    }

});