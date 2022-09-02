import React, { useState, useEffect } from "react";
import "./order.scss";
import send from "../assets/send.svg";
import back from "../assets/backblack.svg";
import ListItemText from "@mui/material/ListItemText";
import * as businessActions from "../redux/actions/businessActions";
import { useDispatch, useSelector } from "react-redux";
import { ordersSelector } from "../redux/selectors/BusinessSelectors";
import Services from "./services";
import PaymentMethods from "./paymentMethods";
import ServiceModal from "./serviceModal";
import { businessSelector } from "../redux/selectors/BusinessSelectors";

const Order = () => {
  const dispatch = useDispatch();
  const business = useSelector(businessSelector);

  const orders = useSelector(ordersSelector);
  const [openService, setService] = useState(false);
  const [openPayment, setPayment] = useState(false);
  const [openSchedule, setSchedule] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [scheduleType, setScheduleType] = useState("");

  const addOrder = (element, type) => {
    let shopping = [];
    shopping = [...shopping, ...orders];
    let order = {
      ...element,
      count: 1,
    };
    let data = [];
    let count = 0;
    if (shopping.length > 0) {
      let index = shopping.findIndex(
        (item) => item.idelement === element.idelement
      );
      if (index >= 0) {
        if (type === "-") {
          count = shopping[index].count - 1;
        } else {
          count = shopping[index].count + 1;
        }
        order = { ...shopping[index], count: count };
        shopping[index] = order;
        data = shopping.filter((shop) => shop.count > 0);
      } else {
        data = [...shopping, order];
      }
    } else {
      data.push(order);
    }
    dispatch(businessActions.setOrders(data));
  };

  const totalPay = () => {
    let sum = 0;
    let shopping = [];
    shopping = [...shopping, ...orders];
    for (let i = 0; i < shopping.length; i++) {
      sum += shopping[i].costo * shopping[i].count;
    }
    return sum;
  };

  const handleChangeService = (service) => {
    setServiceType(service);
    setService(false);
  };

  const handleChangeSchedule = (range) => {
    setScheduleType(range);
    setSchedule(false);
  };

  const handleChangePayment = (payment) => {
    setPaymentType(payment);
    setPayment(false);
  };

  useEffect(() => {
    dispatch(businessActions.getBusiness());
  }, []);

  return (
    <div>
      <div className="order">
        <div className="order-head">
          <div>
            <img src={back} alt="back"></img>{" "}
          </div>
          <div className="title">Ver pedido</div>
        </div>
        <div className="order-elements">
          <div className="elements-title">Elementos: </div>
          {orders?.map((element) => (
            <div className="element" key={element.idelement}>
              <div className="element-image">
                <img src={element.urlphoto} alt="food"></img>
              </div>
              <div className="element-content">
                <div className="title">{element.name}</div>
                <div className="description">
                  brownie description ...
                  <a>ver más</a>
                </div>
                <div className="actions">
                  <div className="price">S/. {element.costo}</div>
                  <div
                    className="add-btn"
                    onClick={() => addOrder(element, "-")}
                  >
                    -
                  </div>
                  <div className="add-number">{element.count}</div>
                  <div
                    className="add-btn"
                    onClick={() => addOrder(element, "+")}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="order-service">
          <div className="service-title">Servicio: </div>
          <div className="service">
            <div class="customerStyle" onClick={() => setService(true)}>
              {serviceType.length && (
                <ListItemText
                  primary={serviceType?.name}
                  secondary={"+ S/." + serviceType?.price}
                />
              )}
            </div>
          </div>
        </div>
        <div className="order-address">
          <div className="address-title">Dirección</div>
          <div className="address">Av brasil</div>
          <div className="btn">
            <a>cambiar</a>
          </div>
        </div>
        <div className="order-schedule">
          <div className="schedule-title">Rango horario: </div>
          <div className="schedule-content">
            <div class="customerStyle" onClick={() => setSchedule(true)}>
              {scheduleType.length && (
                <ListItemText
                  primary={
                    scheduleType?.starttime + " - " + scheduleType?.endtime
                  }
                />
              )}
            </div>
          </div>
        </div>
        <div className="order-schedule">
          <div className="schedule-title">Metodo de pago: </div>
          <div className="schedule-content">
            <div class="customerStyle" onClick={() => setPayment(true)}>
              {paymentType.length > 0 && <ListItemText primary={paymentType} />}
            </div>
          </div>
        </div>
        <div className="order-note">
          <div className="note-title">Nota</div>
          <input placeholder="Ejm. monto"></input>
        </div>
        <div className="order-alert">
          <div></div>
          <div>
            Si usted detecta que el precio total debe ser menos al que se
            muestra, recuerde que el anfitrión puede agregar descuentos globales
            o descuentos por elementos en cualquier momento a su pedido
          </div>
        </div>
        <div className="order-paymeny">
          <img src={send} alt="send"></img>
          <div>Enviar pedido</div>
          <div> S/. {totalPay()} </div>
        </div>
      </div>
      <Services
        open={openSchedule}
        ranges={business?.schedule}
        handleChangeSchedule={handleChangeSchedule}
        handleClose={() => setSchedule(false)}
      ></Services>
      <PaymentMethods
        open={openPayment}
        handleChangePayment={handleChangePayment}
        handleClose={() => setPayment(false)}
        paymentmethods={business?.paymentmethods}
      ></PaymentMethods>
      <ServiceModal
        open={openService}
        services={business?.services}
        handleChangeService={handleChangeService}
        handleClose={() => setService(false)}
      ></ServiceModal>
    </div>
  );
};

export default Order;
