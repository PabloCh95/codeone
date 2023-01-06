import { View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import useDate from '../hooks/useDate';

export default function MovementsScreen({route,navigation}:any) {
  const { date } = useDate()
  const { item }=route.params;
 
  console.log('PROPS:',navigation);
  return (
    <SafeAreaView style={{flex:1,}}>
        <View style={{flex:1}}>
          <View style={{width:'100%',height:'14.3%',backgroundColor:'#CFD6FF',justifyContent:'flex-end'}}>
              <Text style={{marginLeft:20,fontFamily:"Avenir",fontWeight:"800",fontSize:24,marginBottom:18}}>{item.product}</Text>
          </View>
          <Image style={{height:'42.7%',width:'90%',resizeMode:'cover',marginBottom:32,marginLeft:'auto',marginRight:'auto',marginTop:19, borderRadius:10}} source={{uri: item?.image}}/>
          <View style={{width:'100%'}}>
            <Text style={{color:"#9B9898",fontWeight:'800',fontFamily:"Avenir",marginLeft:20,marginBottom:20,fontSize:14}}>Detalles del producto:</Text>
            <Text style={{fontFamily: 'Avenir',fontWeight: "800",marginLeft:20,marginBottom:20,fontSize: 16 }}>Comprado el {date(item.createdAt)}</Text>
            <Text style={{color:"#9B9898",fontWeight:'800',marginLeft:20,fontFamily:"Avenir",fontSize:14,marginBottom:20}}>Con esta compra acumulaste:</Text>
            <Text style={{fontFamily: 'Avenir',fontWeight: "800",marginLeft:20,fontSize:24}}>{item.points} puntos</Text>
          </View>

          <TouchableOpacity style={{backgroundColor:"#334FFA",width:'90%',marginTop:47,marginLeft:'auto',marginRight:'auto',height:50,alignItems:'center',justifyContent:'center',borderRadius:10}} onPress={()=>navigation.goBack()}>
              <Text style={{color:"#FFFFFF",fontFamily:"Avenir",fontSize:16,fontWeight:"800"}}>ACEPTAR</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}