import { addItem } from "./list-item.js";
import { container, items } from "./data.js";

items.forEach((item) => addItem(item, container));
