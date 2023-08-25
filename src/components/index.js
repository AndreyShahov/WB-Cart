import { addItem, addPhoto } from "./list-item.js";
import {
  containerFirst,
  containerSecond,
  items,
  photoListFirst,
  photoListSecond,
  photoContainerFirst,
  photoContainerSecond,
} from "./data.js";

items.forEach((item) => addItem(item, containerFirst, containerSecond));

photoListFirst.forEach((item) => addPhoto(item.src, photoContainerFirst, item.number));
photoListSecond.forEach((item) => addPhoto(item.src, photoContainerSecond, item.number));
