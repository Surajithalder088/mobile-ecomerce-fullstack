import { Button, StyleSheet, Text, View ,FlatList} from "react-native";
import products from "../assets/products.json"
import ProductListItem from "./components/ProductListItem";



export default function Page() {
  return (
    <View style={styles.container}>
    
        <FlatList  data={products} 
        numColumns={2}
        renderItem={({item})=><ProductListItem product={item} />
      }/>
       
       
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    objectFit:"fill",
    padding: 6,
    backgroundColor:"#ddd"
  },
 
});
