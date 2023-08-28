import tShirt from "../images/t-shirt.jpg";
import tShirtInactive from "../images/t-shirt-inactive.jpg";
import casePhoto from "../images/case.jpg";
import caseInactive from "../images/case-inactive.jpg";
import pencils from "../images/pencils.jpg";
import pencilsInactive from "../images/pencils-inactive.jpg";
import tShirtMini from "../images/t-shirt-mini.jpg";
import caseMini from "../images/case-mini.jpg";
import pencilsMini from "../images/pencils-mini.jpg";

export const listItemTemplate = document
  .querySelector("#basket__list-item")
  .content.querySelector(".basket__list-item");
export const unavailabilityItemTemplate = document
  .querySelector("#basket__list-item_unavailability")
  .content.querySelector(".basket__list-item");

export const containerFirst = document.querySelector(".basket__list_availability");
export const containerSecond = document.querySelector(".basket__list_unavailability");
export const photoContainerFirst = document.querySelector("#photosFirst");
export const photoContainerSecond = document.querySelector("#photosSecond");
export const address = document.querySelector("#address");
export const deliveryAddress = document.querySelector(".order__delivery-address");
export const costShipping = document.querySelector(".cost-shipping").cloneNode(true);
export const container = document.querySelector(".order__delivery");

export const items = [
  {
    src: tShirt,
    srcInActive: tShirtInactive,
    header: "Футболка UZcotton мужская",
    color: "Цвет: белый",
    size: "Размер: 56",
    textFirst: "Коледино WB",
    textSecond: "OOO Вайлдберриз",
    remains: "Осталось 2 шт.",
    priceNew: "522",
    priceOld: "1051",
  },
  {
    src: casePhoto,
    srcInActive: caseInactive,
    header:
      "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    color: "Цвет: прозрачный",
    size: "",
    textFirst: "Коледино WB",
    textSecond: "OOO Мегапрофстиль",
    remains: "",
    priceNew: "2 100 047",
    priceOld: "2 300 047",
  },
  {
    src: pencils,
    srcInActive: pencilsInactive,
    header: `Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell`,
    color: "",
    size: "",
    textFirst: "Коледино WB",
    textSecond: "OOO Вайлдберриз",
    remains: "Осталось 2 шт.",
    priceNew: "494",
    priceOld: "950",
  },
];

export const photoListFirst = [
  { src: tShirtMini, number: 0 },
  { src: caseMini, number: 184 },
  { src: pencilsMini, number: 2 },
];

export const photoListSecond = [{ src: caseMini, number: 16 }];
