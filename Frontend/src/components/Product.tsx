import React, { FC } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { deleteProduct, getProducts } from "../api/products/products";

const DEFAULT_IMAGE = require("../static/images/default-image.jpeg");

export type ProductProps = {
  name: string;
  quantity: number;
  quantityHistory: number[];
  imageUrl: string;
  _id: string;
  index: number;
  handleDeleteProductPress: () => void;
  handleEditProductPress: () => void;
};

const Product: FC<ProductProps> = ({
  name,
  quantity,
  quantityHistory,
  imageUrl,
  handleDeleteProductPress,
  handleEditProductPress,
  _id,
  index,
}) => {
  // const handleDeleteProductPress = async () => {
  //   await deleteProduct(_id);
  //   getProducts();
  // };

  return (
    <View style={styles.productContainer}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={{ uri: imageUrl }}
          resizeMode="contain"
          defaultSource={DEFAULT_IMAGE}
        />
      </TouchableOpacity>
      <View style={styles.productDescription}>
        <Text style={styles.productText}>Product name: {name}</Text>
        <Text style={styles.productText}>Stock: {quantity}</Text>
        <Text style={styles.productText}>
          Stock history: {quantityHistory.toString()}
        </Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={handleEditProductPress}>
            <Icon name="pencil" type="evilicon" color="#517fa4" reverse />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDeleteProductPress}>
            <Icon name="trash" type="evilicon" color="#517fa4" reverse />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    paddingBottom: 30,
    // alignSelf: "baseline",
    justifyContent: "space-around",
  },
  productDescription: {
    // flexDirection: "row",
  },
  productText: {
    paddingBottom: 12,
  },
  logo: {
    width: 66,
    height: 66,
    borderRadius: 34,
  },
  iconsContainer: {
    flexDirection: "row",
  },
});

export default Product;
