self.onmessage = function (event) {
  const data = event.data;
  // const modulePath = new URL(data?.modulePath);
  // Dynamically import the module
  import(data?.modulePath).then((module) => {
    self.postMessage({ module: module.default });
  });
};
