import { Link } from "expo-router"
import { Text,StyleSheet, View, Image, Button, TouchableOpacity, Pressable } from "react-native"


export default function ProductListItem({product}){
  return(
    <Link href={`/products/${product.id}`} asChild >
    <Pressable style={styles.box}>
    <Text style={styles.name}>{product.name}</Text>
   
    <Image style={styles.img} src={product.image}/>
    
    <Text style={styles.price}>$ {product.price}</Text>
   <TouchableOpacity>
    <Text style={styles.button} >Add to Cart</Text>
   </TouchableOpacity>
    </Pressable></Link>
  )
}

const styles=StyleSheet.create({
  box:{
    flex: 1,
    alignItems: "center",
    padding: 24,
    margin:4,
   width:150,
   height:300,
    color:"#fff",
    backgroundColor:"grey"
  },
  img:{
    flex: 1,
    margin:8,
    objectFit:"fill",
    alignItems: "center",
    height:100,
    width:100,
    borderRadius:10
  },
  name:{
    color:"#fff",
     fontSize:20,
  },
  price:{
    color:"#fff",
    fontSize:10,
  },
  button:{
    backgroundColor:"#ddd",
    padding:3,
    fontSize:15
  }

})
