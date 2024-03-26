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
      <ul>
        <li>- Your challenge is to build a brand filter for products.</li>
        <li>
          - The parameters for the brand filter, i.e, brand names should appear
          when you search for the brand name in an input box
        </li>
      </ul>
      <input
        type="text"
        placeholder="search brand..."
        onChange={(e) => {
          filterBrandsHandler(e.target.value);
        }}
      />
      <ul>
        {filteredBrands?.map((item) => (
          <>
            <li>{item.brandName}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Question1;
