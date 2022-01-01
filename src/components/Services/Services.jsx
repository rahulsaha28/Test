import React from "react";
import items from "../../Data/Services.json";
import { Item } from "../Item/Item";
export const Services = () => {
  return (
    <div className="mt-4">
      <h4 className="text-center mb-5">Our amazing services</h4>

      <div className="row p-5">
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  );
};
