import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import CardList from "../components/card-list/card-list.component";

function Licitatie() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchproducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*"); // get all columns and all rows

      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        setProducts(data);
      }
      setLoading(false);
    }

    fetchproducts();
  }, []);

  if (loading) return <div>Loading products...</div>;

  return (
    <div>
      <h1>All products</h1>
      <CardList products={products}/>
    </div>
  );
}

export default Licitatie;