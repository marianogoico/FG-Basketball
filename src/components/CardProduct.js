import { View, Text, StyleSheet, TextInput, Button, FlatList, Modal} from "react-native"

const CardProduct = ({handleModal, item}) => {
    return <View style = {styles.cardProduct}>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
                <Button title="DEL" onPress={() => handleModal(item)}/>
            </View>
}

const styles = StyleSheet.create({
    cardProduct: {
        borderWidth:1,
        borderColor:"gray",
        flexDirection:"row",
        padding:10,
        margin:10,
        justifyContent:"space-around",
        alignItems:"center"
      }
})


export default CardProduct