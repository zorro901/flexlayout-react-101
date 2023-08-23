import {
  FunctionComponent,
  ReactElement,
  useState,
  useCallback,
  useEffect
} from "react";
import { Layout, Model, TabNode, Action, IJsonModel } from "flexlayout-react";

import "./flexlayout-light.css";
import { ComponentOption } from "./componentTypes";

const Sample = ({ num }: { num: string }) => {
  const [count, setCount] = useState(0);
  console.log("render");
  useEffect(() => {
    setInterval(()=>{
      setCount((p) => p + 1);
    },1000)
  }, []);
  return (
    <div style={{
      background:'palegreen'
    }}>
      <div>{num}</div>
      <div>{count}</div>
      <button onClick={() => setCount((p) => p + 1)}>up</button>
    </div>
  );
};

const components: Record<ComponentOption, ReactElement> = {
  one: <Sample num={"one"} />,
  two: <Sample num={"two"} />
};

interface LayoutManagerProps {
  layout: IJsonModel;
}

export const LayoutManager: FunctionComponent<LayoutManagerProps> = ({
                                                                       layout
                                                                     }) => {
  const [model, setModel] = useState(Model.fromJson(layout));

  const factory = useCallback((node: TabNode) => {
    // console.log(node);
    const component = node.getComponent() as ComponentOption;
    // console.log(component);
    if (component) {
      return components[component];
    }
    return <div />;
  }, []);

  // this is actually onChanged, happens after the fact
  const onModelChange = useCallback((model: Model) => {
    console.log("model changed");
  }, []);
  const onAction = useCallback(
    (action: Action) => {
      const newModel = Model.fromJson(model.toJson());
      newModel.doAction(action);
      setModel(newModel);
      // console.log("action");
      // already did the action, don't do it again
      return undefined;
    },
    [model]
  );

  useEffect(() => {
    const newModel = Model.fromJson(layout);
    setModel(newModel);
  }, [layout]);

  return (
    <Layout
      model={model}
      factory={factory}
      onModelChange={onModelChange}
      onAction={onAction}
    />
  );
};
