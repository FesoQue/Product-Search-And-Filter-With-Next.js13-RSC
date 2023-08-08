import Categories from "@/components/Categories";
import Header from "@/components/Header";
import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: Array<string>;
}

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const { products } = await getProducts();

  return (
    <section className="flex items-start gap-10">
      <Categories />
      <div className="w-[70%]">
        <Header />
        <div className="grid grid-cols-3 gap-5">
          {products.map((product: Product) => {
            const { images } = product;
            return (
              <article key={product.id}>
                <div className="w-[200px] h-[200px]">
                  <img
                    src={images[0]}
                    alt={product.title}
                    className="max-w-full w-full h-full object-contain"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
