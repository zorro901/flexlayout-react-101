import { IJsonModel } from "flexlayout-react";
import { ComponentOption } from "../componentTypes";

const layout: IJsonModel = {
  global: {
    // tabEnableFloat: true,
    tabSetMinWidth: 100,
    tabSetMinHeight: 100,
    borderMinSize: 100
  },
  borders: [
    {
      type: "border",
      size: 132,
      location: "left",
      children: [
        {
          type: "tab",
          id: "#d9b3dd71-7a6a-439c-b990-21932b52558b",
          name: "Navigation",
          altName: "The Navigation Tab",
          component: "grid",
          enableClose: false
        }
      ]
    }
  ],
  layout: {
    type: "row",
    id: "#d9f9ad42-ea28-4e45-955e-e829de7dda61",
    children: [
      {
        type: "tabset",
        id: "#df3d58dd-dfdb-4236-921d-5d299d4a6444",
        weight: 11.260474860335195,
        children: [
          {
            type: "tab",
            id: "#d53753d3-2f99-4403-a1ed-30b073e946f1",
            name: "One",
            component: ComponentOption.One
          }
        ]
      },
      {
        type: "tabset",
        id: "#a8b70f6a-7a56-4058-ad50-bb61c2073bdb",
        weight: 13.739525139664805,
        children: [
          {
            type: "tab",
            id: "#a7384a24-392a-4ab3-8ef6-ea305b15cfb7",
            name: "Two",
            component: ComponentOption.Two
          }
        ],
        active: true
      }
    ]
  }
};

export default layout;
