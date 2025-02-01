import { Button, StyleSheet, Text, View ,FlatList} from "react-native";
import products from "../assets/products.json"
import ProductListItem from "./components/ProductListItem";



export default function Page() {
  return (
    <View style={styles.container}>
    
        <FlatList  data={products} renderItem={({item})=><ProductListItem product={item} />
      }/>
       
       
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor:"#ddd"
  },
 
});
