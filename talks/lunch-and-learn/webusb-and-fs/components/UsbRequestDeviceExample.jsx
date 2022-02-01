import React, { useState } from "react";

const UsbRequestDeviceExample = () => {
  const [device, setDevice] = useState();

  return (
    <div>
      <button
        onClick={async () => {
          const d = await navigator.usb.requestDevice({ filters: [] });
          setDevice(d);
        }}
      >
        Select device
      </button>
      {device && (
        <div>
          {device.productName} - {device.vendorId}:{device.productId}
        </div>
      )}
    </div>
  );
};

export default UsbRequestDeviceExample;
