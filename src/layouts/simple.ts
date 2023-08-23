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
            name: "Something",
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
            name: "Other thing",
            component: ComponentOption.Two
          }
        ]
      }
    ]
  }
};

export default layout;
