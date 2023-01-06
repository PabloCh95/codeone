import { View, SafeAreaView } from 'react-native'
import React,{useEffect,useState} from 'react'
import {getProducts} from '../api/products';
import AccountName from '../components/AccountName';
import ListMovements from '../components/ListMovements';
import Points from '../components/Points';
import ButtonFilter from '../components/ButtonFilter';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [previousProducts, setPreviousProducts] = useState([]);
  const [ allActive, setAllActive ] = useState(false);
  
  
  useEffect(()=>{
    getProducts().then(res=>{
      setProducts(res);
      setPreviousProducts(res);
    }).catch(error=>console.log(error));
  },[])

  useEffect(()=>{},[products,previousProducts]);

  

  const redeem= () => {
    let value = products.filter((item)=>{
      return item['is_redemption'] === true;
    })
    setProducts(value)
    setAllActive(true)
  }

  const won = () => {
    let value = products.filter((item)=>{
      return item['is_redemption'] === false;
    })
    setProducts(value)
    setAllActive(true)
  }
  const all = () =>{
    
    setProducts(previousProducts);
    setAllActive(false);
  }

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1}}>
        <AccountName/>
        <Points products={previousProducts}/>
        <ListMovements products={products}/>
        <ButtonFilter redeem={redeem} won={won} all={all} allActive={allActive}/>
    </View>
    </SafeAreaView>
  )
}