import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks'
import products from "../../assets/products.json"



const ProductDetailsPage = () => {
   const {id}=useLocalSearchParams()
  const product=products.find(p=>p.id===Number(id))
   
  return (
    <ScrollView style={styles.container}>
    <View style={styles.box}>
     <Text style={styles.name}>{product.name}</Text>
         <Image style={styles.img} src={product.image}></Image>
         <Text style={styles.price}>$ {product.price}</Text>
         <Text style={styles.description}>{product.description}</Text>
        <TouchableOpacity>
         <Text style={styles.button} >Add toCart</Text>
        </TouchableOpacity>
    </View>
    <Text>Previous Orders of this product :</Text>
    <View style={styles.orders}>
      <Text>user@user.com</Text>
      <Text>ordered on :22/05/2025</Text>
    </View>
    <View style={styles.orders}>
      <Text>user@user.com</Text>
      <Text>ordered on :22/05/2025</Text>
    </View>
    <View style={styles.orders}>
      <Text>user@user.com</Text>
      <Text>ordered on :22/05/2025</Text>
    </View>
    <View style={styles.orders}>
      <Text>user@user.com</Text>
      <Text>ordered on :22/05/2025</Text>
    </View>
    
    </ScrollView>
  )
}

export default ProductDetailsPage

const styles=StyleSheet.create({
  container: {
    flex: 1,
  height:1000,
    objectFit:"contain",
    
  
   
  
  },
  box:{
   display:"flex",
    alignItems: "center",
    justifyContent:"center",
    padding: 24,
  
   width:"auto",
   height:550,
  
    backgroundColor:"grey"
  
  },
  img:{
    flex: 1,
    margin:10,
    padding:10,
    objectFit:"fill",
    alignItems: "center",
    height:350,
    width:250,
    borderRadius:10
    
  },
  name:{
    color:"black",
     fontSize:25,
  },
  price:{
    color:"#fff",
    fontSize:30,
  },
  description:{
    backgroundColor:"white",
    margin:10,
    padding:8,
    borderRadius:8
  },
  button:{
    backgroundColor:"brown",
    color:"white",
    padding:5,
    borderRadius:10

  },
  orders:{
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
    padding: 4,
    margin:2,
   width:"auto",
   height:100,
  
    backgroundColor:"grey"
  }


})