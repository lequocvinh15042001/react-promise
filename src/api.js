export const promise1 = (i) => {
  let time = 1; //Math.floor(Math.random() * 4);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: i,
        time,
      });
    }, time * 1000);
  });
};

export const promise2 = (id) => {
  let time = 1.5; //Math.floor(Math.random() + 3 + Math.random() * 2);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'name' + id,
      });
    }, time * 100);
  });
};
