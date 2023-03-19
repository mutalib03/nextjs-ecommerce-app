import Link from 'next/link';
import Image from 'next/image';

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <div >
        <Link href={`/product/${product.slug}`}  >
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"  
            className={'image'}
          />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
