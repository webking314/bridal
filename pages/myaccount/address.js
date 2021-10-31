import React, { useState, useRef, useEffect } from "react";
import { RiArrowRightLine, RiCloseFill } from "react-icons/ri";
import _ from "lodash";

let basicAddress = {
  addressName: "",
  firstName: "",
  lastNaem: "",
  company: "",
  street: "",
  additionalInformation: "",
  land: "",
  zipCode: "",
  houseNumber: "",
  addition: "",
  phoneNumeber: "",
  town: "",
};

export default function Address() {
  const [addressData, setAddressData] = useState([basicAddress]);
  useEffect(() => {
    console.log(addressData);
  }, [addressData]);

  const removeItem = (index) => {
    _.remove(addressData, (item, id) => id == index);
    setAddressData([...addressData]);
  };

  return (
    <div className="address_panel">
      <div className="title-panel d-flex justify-content-between">
        <h3 className="m-0">My Address</h3>
        <button
          className="btn btn-creat"
          onClick={() => setAddressData([...addressData, basicAddress])}
        >
          CREATE NEW ADDRESS
        </button>
      </div>
      {addressData.length > 0 &&
        addressData.map((address, index) => (
          <div className="address-panel row" key={index}>
            {index > 0 && (
              <div className="btn-panel text-end mb-3">
                <button
                  className="btn btn-remove p-0"
                  onClick={() => removeItem(index)}
                >
                  <RiCloseFill />
                </button>
              </div>
            )}
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="ADDRESS NAME *"
              />
              <input
                type="text"
                className="form-control"
                placeholder="FIRST NAME *"
              />
              <input
                type="text"
                className="form-control"
                placeholder="LAST NAME *"
              />
              <input
                type="text"
                className="form-control"
                placeholder="COMPANY(OPTIONAL)"
              />
              <input
                type="text"
                className="form-control"
                placeholder="STREET *"
              />
              <input
                type="text"
                className="form-control"
                placeholder="ADDITIONAL INFORMATION(OPTIONAL)"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="LAND *"
              />
              <input
                type="text"
                className="form-control"
                placeholder="ZIP CODE *"
              />
              <input
                type="text"
                className="form-control"
                placeholder="HOUSE NUMBER *"
              />
              <input
                type="text"
                className="form-control"
                placeholder="ADDITION(OPTIONAL)"
              />
              <input
                type="text"
                className="form-control"
                placeholder="TOWN *"
              />
              <input
                type="text"
                className="form-control"
                placeholder="TELEPHONE NUMBER *"
              />
            </div>
          </div>
        ))}
      <button className="btn blue-btn btn-apply d-flex justify-content-between align-items-center">
        APPLY
        <RiArrowRightLine />
      </button>
    </div>
  );
}
