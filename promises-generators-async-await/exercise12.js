const getUnmaskedCpfAfterTwoSeconds = (cpf) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const pattern = /(\d{3}).(\d{3}).(\d{3})-(\d{2})/;
      const resultFromCpfMatchTest = cpf.match(pattern);

      if (!resultFromCpfMatchTest) return reject("Cannot deserialize this CPF");

      const [, ...algarisms] = resultFromCpfMatchTest;
      const unmaskedCpf = algarisms.join("");
      resolve(unmaskedCpf);
    }, 2000);
  });

const CPFS = [
  getUnmaskedCpfAfterTwoSeconds("473.170.300-07"),
  getUnmaskedCpfAfterTwoSeconds("476.871.180-49"),
];

(async function () {
  try {
    const [cpfA, cpfB] = await Promise.all(CPFS);
    console.log(`Unmasked CPF from Person A: ${cpfA}`);
    console.log(`Unmasked CPF from Person B: ${cpfB}`);
  } catch (e) {
    console.log(e);
  }
})();
