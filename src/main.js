const minhaPromisse = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(console.log('OK'))
    resolve('OK')
  }, 2500)
});

async function executaPromisse() {
  const response1 = await minhaPromisse();
  const response2 = await minhaPromisse();
  const response3 = await minhaPromisse();
  const response4 = await minhaPromisse();
}

async function executaPromisse2() {
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
}

// executaPromisse2();

const executaPromisse3 = async () => {
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());

}
executaPromisse3();
