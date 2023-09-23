import { findPackagePrice } from "../Utils/find";
import DropdownSelect from "./DropdownSelect";
import { useState } from "react";

export default function CartCard({ service, initialPrice, handleChangePrice }) {
  const [selectedPackage, setSelectedPackage] = useState(
    service.package[0].packname
  );

  // Callback function to handle package selection
  const handlePackageChange = (selectedValue) => {
    console.log(selectedValue);
    handleChangePrice(
      initialPrice -
        findPackagePrice(service.id, selectedPackage) +
        findPackagePrice(service.id, selectedValue)
    );
    setSelectedPackage(selectedValue);
  };

  return (
    <div
      className="w-100 cart-card-container ai-s flex"
      style={{ width: "100%", padding: "1rem" }}
    >
      <img
        src={service.image}
        alt={service.title}
        className="cart-card-image"
        style={{ width: "150px" }}
      />
      <div className="flex jc-sb w-100 cart-card-price">
        <div className="flex ai-s fd-c">
          <div>{service.title}</div>
          <DropdownSelect
            options={service.package.map((packageOption) => ({
              value: packageOption.packname,
              label: packageOption.packdesc,
            }))}
            onChange={handlePackageChange}
            text="Select Package"
            defaultValue={selectedPackage}
          />
        </div>
        <div className="flex fd-c ai-e">
          <div>IDR</div>
          <div>{findPackagePrice(service.id, selectedPackage)}</div>
        </div>
      </div>
    </div>
  );
}
