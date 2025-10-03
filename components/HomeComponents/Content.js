import React, { useEffect, useState } from "react";

import Products from "./Products";
import Header from "./Header";

function Content(props) {
  const [category, setCategory] = useState([
    {
      id: undefined,
      category: undefined,
    },
  ]);
console.log("cate in content" , category[0].category);
  return (
    <>
      <Header category={category} setCategory={(item) => setCategory(item)} />
      <Products Category={category[0].category} />
    </>
  );
}

export default Content;

