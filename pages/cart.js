import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { HiXCircle } from "react-icons/hi";

import Layout from '../components/layout';
import { storeContext } from '../store/store';

const CartScreen = () => {

  const { state, dispatch } = useContext(storeContext);
  const cartItems = state.cart.cartItems;
 
  

  return (
    <Layout title={'Shopping Cart'}>
      <h1 className="mb-4 text-xl"> Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          cart is empty. <Link href={'/'}>Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">Item</th>
                  <th className="px-5 text-right">quantity</th>
                  <th className="px-5 text-right">price</th>
                  <th className="px-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link href={`/product/${item.slug}`}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        &nbsp;
                        {item.name}
                      </Link>
                    </td>
                    <td className="p-5 text-right">{item.quantity}</td>
                    <td className="p-5 text-right">{item.price}</td>
                   
                    <td className="p-5 text-center">
                      <button>
                      <HiXCircle></HiXCircle>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CartScreen;
