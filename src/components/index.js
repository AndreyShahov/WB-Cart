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

photoListFirst.forEach((src) => addPhoto(src, photoContainerFirst));
photoListSecond.forEach((src) => addPhoto(src, photoContainerSecond));
