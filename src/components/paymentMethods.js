import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";

const PaymentMethods = ({
  open,
  handleClose,
  paymentmethods,
  handleChangePayment,
}) => {
  const [selectedValue, setSelectedValue] = React.useState(0);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (id) => ({
    checked: selectedValue === id,
    onChange: handleChange,
    value: id,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": id },
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="services-modal">
        <DialogTitle>Metodos de pago</DialogTitle>
        <div>
          {paymentmethods?.map((item) => (
            <div key={item.id} className="service-options">
              <div>
                <img src={item.url} alt="payment"></img>
                {item.name}
              </div>
              <Radio
                {...controlProps(item.name)}
                sx={{
                  color: "#FF0D4A",
                  "&.Mui-checked": {
                    color: "#FF0D4A",
                  },
                }}
              />
            </div>
          ))}
        </div>
        <button
          className="services-btn"
          onClick={() => handleChangePayment(selectedValue)}
        >
          Aceptar
        </button>
      </div>
    </Dialog>
  );
};

export default PaymentMethods;
