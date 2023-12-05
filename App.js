import { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button, FlatList, Modal} from "react-native"
import uuid from 'react-native-uuid'
import ModalDelete from "./src/components/ModalDelete"
import AddProduct from "./src/components/AddProduct"
import ProductsList from "./src/components/ProductsList"

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

      <AddProduct titleProduct = {newTitleProduct} priceProduct = {newPriceProduct} setPriceProduct = {setnewPriceProduct} setTitleProduct = {setnewTitleProduct} handleAddProducts = {handleAddProducts}/>

      <ProductsList products={products} handleModal={handleModal}/>
      
      <ModalDelete product = {selectedProduct} onDelete={handleDeleteProduct} visible= {modalVisible} setVisible = {setModalVisible}/>

    </View>
  )
}


//css
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:'start', 
  }
})



export default App