import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Services = ({ open, handleClose, ranges, handleChangeSchedule }) => {
  const [schedule, setSchedule] = React.useState({});

  return (
    <Dialog open={open} onClose={handleClose} className="services-modal">
      <DialogTitle>Rango horario</DialogTitle>
      <List sx={{ pt: 0 }}>
        {ranges?.map((range) => (
          <ListItem key={range.id} button className="list-item">
            <ListItemText
              onClick={() => setSchedule(range)}
              primary={range.starttime + " - " + range.endtime}
            />
          </ListItem>
        ))}
        <button
          className="services-btn"
          onClick={() => handleChangeSchedule(schedule)}
        >
          Aceptar
        </button>
      </List>
    </Dialog>
  );
};

export default Services;
