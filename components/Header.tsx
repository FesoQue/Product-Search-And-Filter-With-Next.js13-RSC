"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const [categories, setCategories] = useState(null || Array<string>);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  return (
    <header className="flex items-center justify-between mb-12">
      <input
        type="search"
        name=""
        id=""
        className="h-12 rounded-full px-3"
        placeholder="what are you looking for?"
      />

      <div className="flex items-center gap-5">
        {categories?.map((category: string) => {
          return (
            <button
              key={category}
              className="px-4 py-2 border"
              onClick={() => router.push(`/?category=${category}`)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <button>Sort</button>
    </header>
  );
};

export default Header;
