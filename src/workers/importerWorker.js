self.onmessage = function (event) {
  const data = event.data;
  // const modulePath = new URL(data?.modulePath);
  // Dynamically import the module
  const url = new URL("../components/importFromWorkerJs.js", import.meta.url);
  import("../components/ImportFromWorkerJs.js").then((module) => {
    const stringified = JSON.stringify(module.default());
    // console.log(module.default());
    // console.log(stringified, "from worker");

    self.postMessage({ module: stringified });
  });
};
