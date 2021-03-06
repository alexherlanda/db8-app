import React from "react";
import { Select } from "antd";

function CountriesCatalog(props) {
  const { ...other } = props;
  const { Option } = Select;

  const dataSource = [
    { value: "MX", label: "México" },
    { value: "PE", label: "Perú" },
    { value: "CO", label: "Colombia" },
    { value: "ES", label: "España" },
    { value: "US", label: "Estados Unidos de América" },
    { value: "EC", label: "Ecuador" },
    { value: "PA", label: "Panamá" },
    { value: "VE", label: "Venezuela" },
    { value: "BR", label: "Brasil" },
    { value: "CL", label: "Chile" },
  ];

  const renderOptions = (options) => {
    return options.map((option) => {
      return (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      );
    });
  };

  return <Select {...other}>{renderOptions(dataSource)}</Select>;
}

export default CountriesCatalog;
