import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import data from '../../utilis/data';
import { useContext } from 'react';
import { storeContext } from '../../store/store';

const ProductScreen = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(storeContext);
  const { slug } = router.query;

  const product = data.products.find((product) => product.slug === slug);
  console.log(product, router.query);

  if (!product) {
    return <div> Product Not Found</div>;
  }

  const addToCartHandler = () => {
    //  
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug )
     const quantity =  existItem ? existItem.quantity + 1 : 1 

     if (quantity > product.countInStock) {
       alert("Sorry, product out of stock")
     }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity}});
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
