"use client";
import React, {
  ComponentType,
  ReactElement,
  ReactNode,
  createElement,
  useEffect,
  useState,
} from "react";

const ClientImport = ({ children }: { children?: ReactNode }) => {
  const [Component, setComponent] = useState<ReactElement | null>(null);

  const renderElement = (element: any): any => {
    const { type, props } = element;

    // Check if the element has children
    if (props && props.children) {
      const childrenA = Array.isArray(props.children)
        ? props.children.map((child: any, index: any) =>
            renderElement({ type: child.type, props: child.props, key: index })
          )
        : typeof props.children === "object"
        ? renderElement({
            type: props.children.type,
            props: props.children.props,
            key: 0,
          })
        : props?.children;
console.log(props)
      return React.createElement(
        type,
        { key: props?.key, ...props },
        childrenA
      );
    }

    // If the element does not have children, create a simple element
  };



  //  --------------------------------------------------------------------------

  useEffect(() => {
    const worker = new Worker(
      new URL("../workers/importerWorker.js", import.meta.url),
      { type: "module" }
    );

    worker.onmessage = (e) => {
      const comp = e.data;
      // console.log(comp);
      if (!!comp.module) {
        const parsed = JSON.parse(comp.module);
        const ElementFromWorker = renderElement(parsed);

        setComponent(ElementFromWorker);
      }
    };
    // dirName: Doğu
    worker.postMessage({ modulePath: "./importFromWorkerJs.jsx" });

    return () => {
      worker.terminate();
    };
  }, []);
  console.log(Component);
  return Component;

  //  <div>{!!Component && Component}</div>;
};

export default ClientImport;
