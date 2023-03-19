import Layout from '../components/layout';
import ProductItem from '../components/ProductItem';

import data from '../utilis/data';

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
