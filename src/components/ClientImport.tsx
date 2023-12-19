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

      return React.createElement(
        type,
        { key: props?.key, ...props },
        childrenA
      );
    }

    // If the element does not have children, create a simple element
  };

  //  --------------------------------------------------------------------------

  const recursiveCreater = (element: any, key?: any): any => {
    const e = createElement(element.type, null);
    if (Array.isArray(element?.props?.children)) {
      console.log("childIsArray");
      console.log(element);
      element?.props?.children?.map((item: any, index: number) => {
        if (Array.isArray(item?.props?.children)) {
          console.log("isArrayAgain");
          return createElement(
            item.type,
            { key: item?.key || index },
            recursiveCreater(item)
          );
        }
        console.log("isNotArray");
        return createElement(item?.type, null, item?.props?.children);
      });
      // return createElement(
      //   element?.type,
      //   { key: element?.key || key },
      //   children
      // );
    }
    if (!Array.isArray(element?.props?.children)) {
      return createElement(element?.type, null, element?.props?.children);
    }
    // return createElement(
    //   element?.type || "div",
    //   { key: element.key || key },
    //   element?.props?.children
    // );
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
        // const ElementFromWorker = createElement(
        //   parsed.type,
        //   null,
        //   // parsed.props.children
        //   //   // parsed.props.children.map((item: any, i: number) => (
        //   //   //   <div key={i}>{item}</div>
        //   //   // ))
        //   recursiveCreater(parsed)
        // );

        // const element = recursiveCreater(parsed);
        // const ElementFromWorker = recursiveCreater(parsed);
        // const ElementFromWorker = renderElement({
        //   type: "div",
        //   key: null,
        //   ref: null,
        //   props: {
        //     children: [
        //       {
        //         type: "div",
        //         key: "0",
        //         ref: null,
        //         props: {
        //           children: {
        //             type: "p",
        //             key: null,
        //             ref: null,
        //             props: {
        //               children: "This is First",
        //             },
        //           },
        //         },
        //       },
        //       // ... (other elements)
        //     ],
        //   },
        // });
        // console.log(ElementFromWorker);
        // console.log(parsed);
        // const x = createElement(...parsed);
        const ElementFromWorker = renderElement(parsed);

        setComponent(ElementFromWorker);
      }
    };
    // dirName: Doğu
    worker.postMessage({ modulePath: "./ImportFromWorkerJs.js" });

    return () => {
      worker.terminate();
    };
  }, []);
  console.log(Component);
  return Component;

  //  <div>{!!Component && Component}</div>;
};

export default ClientImport;
