import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useDate from '../hooks/useDate'

export default function ListMovements({products}:any) {
    const { navigate }=useNavigation()
    const {date} = useDate();

    return (
        <View style={{marginTop:20}}>
        <Text style={styles.textTitleMovements}>Tus Movimientos</Text>

            {products.length>0 && 
                <FlatList
                data={products}
                style={styles.flatList}
                renderItem={({item}:any)=>{
                    return( 
                    <TouchableOpacity style={styles.containerMovements} onPress={()=>navigate("MovementsScreen",{item})} disabled={item.is_redemption===true ? true:false}>
                            <Image style={styles.Image} source={{uri: item?.image}}/>
                            <View style={styles.containerText1}>
                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.textTitleItem}>{item.product}</Text>
                                <Text style={styles.textDescriptionItem}>{date(item.createdAt)}</Text>
                            </View>
                            {item.is_redemption===true ? 
                                <View style={styles.containerText2}>
                                        <Text style={{color:'#FF0000',fontWeight:'800',fontSize:16,fontFamily:'Avenir'}}>-</Text><Text style={{color:'#000000',fontFamily:'Avenir',fontSize:16,fontWeight:'800'}}>{item.points}</Text> 
                                        <Text style={{color:'#000000',fontFamily:'Avenir',fontSize:16,fontWeight:'800',marginLeft:17}}>{'>'}</Text>
                                </View>:
                                <View style={styles.containerText2}>
                                        <Text style={{color:'#00B833',fontWeight:'800',fontSize:16,fontFamily:'Avenir'}}>+</Text><Text style={{color:'#000000',fontFamily:'Avenir',fontSize:16,fontWeight:'800'}}>{item.points}</Text> 
                                        <Text style={{color:'#000000',fontFamily:'Avenir',fontSize:16,fontWeight:'800',marginLeft:17}}>{'>'}</Text>
                                </View>
                            }
                    </TouchableOpacity>
                    )
                    }
                }
                keyExtractor={(item,index:number)=>index.toString()}
                />
            }
        </View>
    )
}


const styles = StyleSheet.create({
    containerMovements:{
        height:80,
        width:'100%',
        flexDirection:'row',
        marginBottom:8
    },
    flatList:{
        backgroundColor:'#FFFFFF',
        height:"41%",
        width:'90%',
        borderRadius:10,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:20
    },
    containerText1:{
        justifyContent:'space-evenly',
        width:'45%'
    },
    textTitleItem:{
        fontSize:14, 
        fontWeight:'800', 
        fontFamily:'Avenir'
    },
    textDescriptionItem:{
        fontFamily:'Avenir',
        fontWeight:'400',
        fontSize:12
    },
    Image:{
        width:80,
        height:80,
        resizeMode:"cover",
        marginRight:10,
        marginLeft:10,
        borderRadius:10,
    },
    textTitleMovements:{
        color:'#9B9898', 
        fontSize:14,
        fontWeight:'800',
        marginLeft:20
    },
    containerText2:{
        flexDirection:'row',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        width:'25%'
    },

})