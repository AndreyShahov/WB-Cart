import { addItem } from "./list-item.js";
import { listItem, items } from "./data.js";

items.forEach((item) => addItem(item, listItem));
