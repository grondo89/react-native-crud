import React, { FC, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { useNavigation, createStack } from "react-native-navigation-hooks";

import { deleteProduct, getProducts } from "../api/products/products";
import Product from "../components/Product";

const MainScreen = ({ navigation }) => {
  // const { navigation } = props
  const [products, setProducts] = useState([
    { name: "", quantity: 0, quantityHistory: [], imageUrl: "", _id: "" },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await setLoading(true);
        const prod = await getProducts();
        setProducts(prod);
      } catch {
        Alert.alert("There has been an error retrieving the products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const getKeyExtractor = (product: any) => `${product._id}`;

  const handleDeleteProduct = async (productId: string) => {
    try {
      deleteProduct(productId);
    } catch (error) {
      console.log(error);
    } finally {
      const newProductSet = products.filter(
        (product) => product._id !== productId
      );
      setProducts(newProductSet);
    }
  };

  const handleEditProduct = (productId: string) => {
    // showModal({
    //   stack: createStack("EditSingleProductScreen", {
    //     productId,
    //   }),
    // });
    // Navigation.showModal({
    //   stack: {
    //     children: [
    //       {
    //         component: {
    //           name: Screens.PROFILE_NEW_ADDRESS_FORM,
    //           passProps: {
    //             address,
    //             needPhone: true,
    //             onSuccess: handleRegisterDebitCardPress,
    //           },
    //         },
    //       },
    //     ],
    //   },
    // })
  };

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        animating={loading}
        style={{ flex: 1 }}
        color="white"
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          console.log(index);
          return (
            <Product
              name={item.name}
              quantity={item.quantity}
              quantityHistory={item.quantityHistory}
              _id={item._id}
              imageUrl={item.imageUrl}
              index={index}
              handleDeleteProductPress={() => handleDeleteProduct(item._id)}
              handleEditProductPress={() => handleEditProduct(item._id)}
            />
          );
        }}
        keyExtractor={getKeyExtractor}
      />
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log("hola");
            navigation.navigate("Product");
          }}
        >
          <Icon name="plus" type="evilicon" color="#517fa4" reverse />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#023560",
    // alignItems: "center",
    // justifyContent: "space-around",
    paddingTop: 100,
  },
});

export default MainScreen;
