import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonFilter({redeem,won,allActive,all}:any) {
  return (
    <View style={styles.container}>
        {
         allActive===false ?
                <>
                    <TouchableOpacity style={styles.button} onPress={won}>
                        <Text style={styles.text}>Ganados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={redeem}>
                        <Text style={styles.text}>Canjeados</Text>
                    </TouchableOpacity>
                </>:
                <>
                    <TouchableOpacity style={{...styles.button,width:'90%'}} onPress={all}>
                        <Text style={styles.text}>Todos</Text>
                    </TouchableOpacity>
                </>
        }
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:43
    },
    button:{
        backgroundColor:"#334FFA", 
        width:170,
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#ffffff',
        fontFamily:'Avenir',
        fontWeight:'800'
    },
})