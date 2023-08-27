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
export const elementCard = document.querySelector(".section-payment").cloneNode(true);
export const paymentContainer = document.querySelector(".order__payment");

export const items = [
  {
    src: "./images/t-shirt.jpg",
    srcInActive: "./images/t-shirt-inactive.jpg",
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
    src: "./images/case.jpg",
    srcInActive: "./images/case-inactive.jpg",
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
    src: "./images/pencils.jpg",
    srcInActive: "./images/pencils-inactive.jpg",
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
  { src: "./images/t-shirt-mini.jpg", number: 0 },
  { src: "./images/case-mini.jpg", number: 184 },
  { src: "./images/pencils-mini.jpg", number: 2 },
];

export const photoListSecond = [{ src: "./images/case-mini.jpg", number: 16 }];
