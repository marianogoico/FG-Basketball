import { View, Text, StyleSheet, TextInput, Button, FlatList, Modal} from "react-native"
import CardProduct from "./CardProduct"

const ProductsList = ({products, handleModal}) => {
    return <View style = {styles.listContainer}>
                <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CardProduct item = {item} handleModal={handleModal}/>}
                />
            </View>
}

const styles = StyleSheet.create({
    listContainer: {
        width:"100%"
      }
})

export default ProductsList