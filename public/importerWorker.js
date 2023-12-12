self.onmessage = function (event) {
  const data = event.data;

  // Dynamically import the module
  import(data?.modulePath).then((module) => {
    self.postMessage({ module: module.default });
  });
};
