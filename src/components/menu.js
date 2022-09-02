import React, { useEffect } from "react";
import "./menu.scss";
import back from "../assets/back.svg";
import * as businessActions from "../redux/actions/businessActions";
import { useDispatch, useSelector } from "react-redux";
import {
  businessCategoriesSelector,
  businessSelector,
} from "../redux/selectors/BusinessSelectors";

const Menu = () => {
  const dispatch = useDispatch();
  const categories = useSelector(businessCategoriesSelector);
  const business = useSelector(businessSelector);

  useEffect(() => {
    dispatch(businessActions.getBusiness());
    dispatch(businessActions.getBusinessCategories());
  }, []);

  return (
    <div className="menu">
      <div className="main">
        <div className="main-content">
          <button className="back-btn">
            <img src={back} alt="back"></img>
            <div>Ver negocio</div>
          </button>
          <div className="title">{business.name}</div>
          <div className="schedule">
            <div className="schedule-title">Horario</div>
            <div className="schedule-content">8:00 AM - 5:00 PM</div>
          </div>
          <div className="date">
            <div className="date-title">Carta</div>
            <div className="date-action">fechaa</div>
          </div>
        </div>

        <div className="categories">
          <div className="categories-title">Categorias</div>
          {categories?.map((category) => (
            <a href={"#" + category.idcategory} key={category.idcategory}>
              {category.namecategory} ({category.elements})
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
