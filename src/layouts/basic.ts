import { IJsonModel } from "flexlayout-react";
import { ComponentOption } from "../componentTypes";

const layout: IJsonModel = {
  global: {},
  borders: [],
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "tabset",
        weight: 50,
        children: [
          {
            type: "tab",
            name: "One",
            component: ComponentOption.One
          }
        ]
      },
      {
        type: "tabset",
        weight: 50,
        children: [
          {
            type: "tab",
            name: "Two",
            component: ComponentOption.Two
          }
        ]
      }
    ]
  }
};

export default layout;
