import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";
import ListItemText from "@mui/material/ListItemText";

const ServiceModal = ({ open, handleClose, services, handleChangeService }) => {
  const [selectedValue, setSelectedValue] = React.useState({});

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="services-modal">
        <DialogTitle>Servicios</DialogTitle>
        <div>
          {services?.map((service) => (
            <div key={service.id} className="service-options">
              <div>
                <ListItemText
                  primary={service.name}
                  secondary={"+ S/." + service.price}
                />
              </div>

              <Radio
                onChange={() => setSelectedValue(service)}
                checked={selectedValue?.id === service.id}
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
          onClick={() => handleChangeService(selectedValue)}
        >
          Aceptar
        </button>
      </div>
    </Dialog>
  );
};

export default ServiceModal;
