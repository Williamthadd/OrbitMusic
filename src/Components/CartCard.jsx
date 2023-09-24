import { formatNumberToK } from "../Utils/convert";
import { findPackagePrice } from "../Utils/find";
import DropdownSelect from "./DropdownSelect";
import { useState } from "react";

export default function CartCard({
  service,
  initialPrice,
  handleChangePrice,
  pack,
  handlePackageChange,
  handleDeleteCart,
}) {
  const [selectedPackage, setSelectedPackage] = useState(pack);

  // Callback function to handle package selection
  const changePackage = (selectedValue) => {
    console.log(selectedValue);
    handleChangePrice(
      initialPrice -
        findPackagePrice(service.id, selectedPackage) +
        findPackagePrice(service.id, selectedValue)
    );
    handlePackageChange(service.id, selectedValue);
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
          <div className="mb-1">{service.title}</div>
          <DropdownSelect
            options={service.package.map((packageOption) => ({
              value: packageOption.packname,
              label: packageOption.packdesc,
            }))}
            onChange={changePackage}
            text="Select Package"
            defaultValue={selectedPackage}
          />
          <button
            className="button1 mt-2"
            onClick={() => handleDeleteCart(service.id)}
          >
            Delete from cart
          </button>
        </div>
        <div className="price-card flex fd-c ai-e jc-c mr-4">
          <div
            className=""
            style={{
              color: "#FFF",
              fontFamily: "Open Sans",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            IDR
          </div>
          <div
            style={{
              color: "#FFF",
              fontFamily: "Open Sans",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              marginTop: "-5px",
            }}
          >
            {findPackagePrice(service.id, selectedPackage) !== null
              ? formatNumberToK(findPackagePrice(service.id, selectedPackage))
              : "0"}
          </div>
        </div>
      </div>
    </div>
  );
}
