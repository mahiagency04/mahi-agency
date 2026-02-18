import React from "react";
import { useLocation, Link } from "react-router-dom";
import products from "../data/products";
import searchresult from "./SearchResult.module.css";
import BASE_URL from "./config";

const SearchResult = () => {
  const query = decodeURIComponent(
    new URLSearchParams(useLocation().search).get("q") || ""
  );

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={searchresult.container}>
      <h2 className={searchresult.heading}>Search results for "{query}"</h2>

      {results.length === 0 && <p className={searchresult.noResults}>No product found</p>}

     {results.map((item) => {
  const imageUrl = `${BASE_URL}${item.image}`;
  console.log("IMAGE:", imageUrl);

  return (
    <Link
      key={item.productId}
      to={`/product/${item.productId}`}
      className={searchresult.productLink}
    >
      <img
        src={imageUrl}
        alt={item.name}
        className={searchresult.productImage}
      />
      {item.name} – ₹{item.price}
    </Link>
  );
})}</div>
  );
};

export default SearchResult;


// import React from "react";
// import { useLocation, Link } from "react-router-dom";
// import products from "../data/products";
// import searchresult from "./SearchResult.module.css";
// // import BASE_URL from "./config";

// const SearchResult = () => {
//    const BASE_URL = process.env.FRONTEND_URL


//   const query = decodeURIComponent(
//     new URLSearchParams(useLocation().search).get("q") || ""
//   );

//   const results = products.filter((p) =>
//     p.name.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div className={searchresult.container}>
//       <h2 className={searchresult.heading}>Search results for "{query}"</h2>

//       {results.length === 0 && <p className={searchresult.noResults}>No product found</p>}

//       {/* {results.map((item) => ( */}
//       {results.map((item) => {
//         console.log("RAW image path =", item.image);
//   console.log("BASE_URL =", BASE_URL);

//         // यहाँ पर हर प्रोडक्ट के लिए imageUrl बनाएं
//         const imageUrl = `${BASE_URL}/${encodeURI(item.image)}`;
//         console.log("FINAL image URL =", imageUrl);

//         return (
//           <Link
//             key={item.productId}
//             to={`/product/${item.productId}`}
//             className={searchresult.productLink}
//           >
//             <img
//               // src={item.image}
//               src={imageUrl}
//               alt={item.name}
//               className={searchresult.productImage}

//               onError={(e) => {
//           e.target.src = `${BASE_URL}/uploads/image-not-found.webp`;
//         }}
//             />
//             {item.name} – ₹{item.price}
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default SearchResult;