export const listItemTemplate = document
  .querySelector("#in-stock__list-item")
  .content.querySelector(".in-stock__list-item");

export const container = document.querySelector(".in-stock__list");

export const items = [
  {
    src: "./images/t-shirt.jpg",
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
