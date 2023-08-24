import { addItem } from "./list-item.js";
import { containerFirst, containerSecond, items } from "./data.js";

items.forEach((item) => addItem(item, containerFirst, containerSecond));
