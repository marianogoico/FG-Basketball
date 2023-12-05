import { View, Text, StyleSheet, TextInput, Button, FlatList, Modal} from "react-native"

const ModalDelete = ({product, visible, onDelete, setVisible}) => {

    return  <Modal visible={visible}>
                <View style = {styles.modalContainer}>
                <Text>Are you sure you want to delete de product {product.title}?</Text>
                <Button title="Delete" onPress={onDelete}/>
                <Button title="Cancel" onPress={()=> setVisible(false)}/>
                </View>
            </Modal>
}

const styles = StyleSheet.create({
    modalContainer: {
        marginTop:50,
      }
})

export default ModalDelete