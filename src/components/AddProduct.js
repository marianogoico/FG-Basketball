import { View, Text, StyleSheet, TextInput, Button, FlatList, Modal} from "react-native"

const AddProduct = ({titleProduct, priceProduct, setTitleProduct, setPriceProduct, handleAddProducts}) => {
    return <View style = {styles.inputContainer}>
                <TextInput 
                style = {styles.input}
                placeholder="Product"
                value={titleProduct}
                onChangeText={(t)=> setTitleProduct(t)}/>
                <TextInput 
                style = {styles.input}
                placeholder="Price"
                value={priceProduct}
                onChangeText={(t)=> setPriceProduct(t)}/>
                <Button title="ADD" onPress={handleAddProducts}/>
            </View>
}

const styles = StyleSheet.create({
    input:{
        borderWidth:2,
        borderColor:"gray",
        width:150,
        paddingVertical:5,
        borderRadius: 2
      },
      inputContainer: {
        flexDirection: "row",
        padding:10,
        marginTop:50,
        justifyContent: "space-between",
        alignSelf:"stretch"
      }
})

export default AddProduct