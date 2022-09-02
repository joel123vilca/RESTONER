import React, { useEffect } from "react";
import * as businessActions from "../redux/actions/businessActions";
import { useDispatch, useSelector } from "react-redux";
import {
  businessCategoriesElements,
  ordersSelector,
} from "../redux/selectors/BusinessSelectors";
import "./cart.scss";
import classNames from "classnames";

const Cart = () => {
  const dispatch = useDispatch();
  const elements = useSelector(businessCategoriesElements);
  const orders = useSelector(ordersSelector);

  useEffect(() => {
    dispatch(businessActions.getBusinessElements(24));
  }, []);

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

  const getCount = (element) => {
    let shopping = [];
    shopping = [...shopping, ...orders];
    if (shopping.length > 0) {
      let index = shopping.findIndex(
        (item) => item.idelement === element.idelement
      );
      if (index >= 0) return shopping[index].count;
      return 0;
    }
    return 0;
  };

  return (
    <div className="cart">
      {elements?.map((item) => (
        <div
          key={item.category.idcategory}
          className="cart-category"
          id={item.category.idcategory}
        >
          <div className="category-title">{item.category.namecategory}</div>
          <div className="category-content">
            {item.elements.map((element) => (
              <div key={element.name} className="category-item">
                <div className="item-image">
                  <img src={element.urlphoto} alt="food"></img>
                </div>
                <div className="item-content">
                  <div className="item-title"> {element.name}</div>
                  <div className="item-description">{element.description}</div>
                  <div className="item-actions">
                    <div className="item-price">S/. {element.costo} </div>
                    <div className="item-add">
                      <div
                        className={classNames("add-btn", {
                          "add-active": getCount(element) > 0,
                        })}
                        onClick={() => addOrder(element, "-")}
                      >
                        -
                      </div>
                      <div className="add-number">{getCount(element)} </div>
                      <div
                        className={classNames("add-btn", {
                          "add-active": getCount(element) > 0,
                        })}
                        onClick={() => addOrder(element, "+")}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
