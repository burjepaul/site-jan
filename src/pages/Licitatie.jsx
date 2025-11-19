import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import CardList from "../components/card-list/card-list.component";

function Licitatie() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  const productsPerPage = 10;

  useEffect(() => {
    async function fetchproducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        setProducts(data);
      }
      setLoading(false);
    }

    fetchproducts();
  }, []);

  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  if (loading) return <div>Loading products...</div>;
  
  const sortedProducts = [...products].sort((a, b) => {
    return Number(a.name) - Number(b.name);
  });
  
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);
  
  const handlePageChange = (num) => {
    if (num < 1 || num > totalPages) return;
    setCurrentPage(num);
  };
  
  // --- SMART PAGINATION WITH ELLIPSES ---
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 3; // pages near the current one
    
    if (totalPages <= 7) {
      // If few pages, show all
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    
    // Always show first page
    pages.push(1);
    
    // Add "..." if needed before current
    if (currentPage > maxVisible + 1) pages.push("...");
    
    // Pages around current page
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);
    
    for (let i = start; i <= end; i++) pages.push(i);
    
    // Add "..." if needed after current
    if (currentPage < totalPages - maxVisible) pages.push("...");
    
    // Always show last page
    pages.push(totalPages);
    
    return pages;
  };
  
  const pageNumbers = getPageNumbers();
  
  
  return (
    <div>
      <h1>All products</h1>

      <CardList key={currentPage} products={currentProducts} />

      {/* Pagination */}
      <div style={{ marginTop: "20px", display: "flex", gap: "8px", alignItems: "center" }}>

        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          {"< Prev"}
        </button>

        {pageNumbers.map((num, index) => (
          <button
          key={index}
          onClick={() => typeof num === "number" && handlePageChange(num)}
            disabled={num === "..."}
            style={{
              fontWeight: currentPage === num ? "bold" : "normal",
              cursor: num === "..." ? "default" : "pointer",
              padding: "5px 10px",
              border: "1px solid #ccc",
              background: currentPage === num ? "#eee" : "white"
            }}
          >
            {num}
          </button>
        ))}

        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          {"Next >"}
        </button>

      </div>
    </div>
  );
}

export default Licitatie;
