import Header from "@/components/Header";
import { log } from "console";
import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

type Props = {
  // params?: {
  //   num?: string;
  // };
  searchParams?: {
    category?: string;
  };
};

const page = async (props: Props) => {
  const category = props.searchParams?.category;

  const getProducts = async () => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };
  const products = await getProducts();

  return (
    <section className="">
      <Header />
      <div className="grid grid-cols-4 gap-5">
        {products.map((product: Product) => {
          return (
            <article key={product.id} className="w-full bg-white p-4">
              <div className="w-[200px] h-[200px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full w-full h-full object-contain"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default page;
