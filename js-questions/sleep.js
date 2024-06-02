async function sleep(delay) {
  return new Promise((res, rej) => setTimeout(res, delay));
}

async function sayHello() {
  console.log("start");
  await sleep(2000);
  console.log("End");
}

sayHello();
