import { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button, FlatList, Modal} from "react-native"
import uuid from 'react-native-uuid'

const App = ()=> {
  
  //states
  const [newTitleProduct, setnewTitleProduct] = useState("")
  const [newPriceProduct, setnewPriceProduct] = useState("")
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  //handleFunctions
  const handleAddProducts = () => {
    const newProduct = {
      id:uuid.v4(),
      title:newTitleProduct, 
      price:newPriceProduct
    }
    setProducts(current => [...current, newProduct])
    setnewTitleProduct("")
    setnewPriceProduct("")
  }

  const handleModal = (item) => {
    setSelectedProduct(item)
    setModalVisible(true)
  }

  const handleDeleteProduct = () => {
    setProducts(current => current.filter(products => products.id !== selectedProduct.id))
    setModalVisible(false)
  }

  return (

    <View style = {styles.container}>
      <View style = {styles.inputContainer}>
        <TextInput 
        style = {styles.input}
        placeholder="Product"
        value={newTitleProduct}
        onChangeText={(t)=> setnewTitleProduct(t)}/>
        <TextInput 
        style = {styles.input}
        placeholder="Price"
        value={newPriceProduct}
        onChangeText={(t)=> setnewPriceProduct(t)}/>
        <Button title="ADD" onPress={handleAddProducts}/>
      </View>
      
      <View style = {styles.listContainer}>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => <View style = {styles.cardProduct}>
                                    <Text>{item.title}</Text>
                                    <Text>{item.price}</Text>
                                    <Button title="DEL" onPress={() => handleModal(item)}/>
                                  </View>}
        />
      </View>

      <Modal visible={modalVisible}>
        <View style = {styles.modalContainer}>
          <Text>Are you sure you want to delete de product {selectedProduct.title}?</Text>
          <Button title="Delete" onPress={handleDeleteProduct}/>
          <Button title="Cancel" onPress={()=>setModalVisible(false)}/>
        </View>
      </Modal>

    </View>
  )
}


//css
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:'start', 
  },
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
  },
  listContainer: {
    width:"100%"
  },
  cardProduct: {
    borderWidth:1,
    borderColor:"gray",
    flexDirection:"row",
    padding:10,
    margin:10,
    justifyContent:"space-around",
    alignItems:"center"
  },
  modalContainer: {
    marginTop:50,
  }
})



export default App