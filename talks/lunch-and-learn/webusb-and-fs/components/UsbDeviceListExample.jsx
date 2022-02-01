import React, { useState, useEffect } from "react";

const UsbRequestDeviceExample = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    navigator.usb.getDevices().then(setDevices);
  }, [setDevices]);

  return (
    <div>
      {devices.map((device) => (
        <div>
          {device.productName} - {device.vendorId}:{device.productId}
        </div>
      ))}
    </div>
  );
};

export default UsbRequestDeviceExample;
