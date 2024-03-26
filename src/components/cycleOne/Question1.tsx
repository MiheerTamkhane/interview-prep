import React, { useState } from "react";

const Question1 = () => {
  const brands1 = [
    { id: "0a", brandName: "puma" },
    { id: "0b", brandName: "adiddas" },
    { id: "0c", brandName: "wildcraft" },
    { id: "0d", brandName: "levis" },
    { id: "0e", brandName: "celio" },
  ];
  const [filteredBrands, setFilteredBrands] = useState(brands1);

  const filterBrandsHandler = (value: string): void => {
    const data = brands1?.filter((item) => item.brandName.includes(value));
    setFilteredBrands(data);
  };
  return (
    <div>
      <p>- Your challenge is to build a brand filter for products.</p>
      <p>
        - The parameters for the brand filter, i.e, brand names should appear
        when you search for the brand name in an input box
      </p>
      <input
        type="text"
        placeholder="search brand..."
        onChange={(e) => {
          filterBrandsHandler(e.target.value);
        }}
      />
      {filteredBrands?.map((item) => (
        <>
          <p>{item.brandName}</p>
        </>
      ))}
    </div>
  );
};

export default Question1;
