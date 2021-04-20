import axios from "axios";

interface ProductData {
  name: string;
  quantity: string;
  imageUrl: string;
  price: string;
}

const getProducts = async () => {
  let res = await axios.get("http://localhost:3000/products");
  let products = res.data;

  return products;
};

const deleteProduct = async (productId: string) => {
  console.log(productId);
  let res = await axios.delete(`http://localhost:3000/products/${productId}`);
};

const createProduct = async (productData: ProductData) => {
  const { name, price, quantity, imageUrl } = productData;
  console.log(productData);

  try {
    await axios.post(`http://localhost:3000/products`, {
      name,
      price,
      quantity,
      imageUrl,
    });
  } catch (err) {
    console.log(err);
  }
};

const editProduct = async (productValues: ProductData, productId: string) => {
  await axios.patch(`http://localhost:3000/${productId}`, { productValues });
};
export { getProducts, deleteProduct, createProduct, editProduct };
