self.onmessage = (e) => {
  // console.log(e, "inside worker");
  const data = e.data;
  const mappedList = data.map((item) => item * 2 - 1);

  self.postMessage(mappedList);

  // self.postMessage(e.data);
};
