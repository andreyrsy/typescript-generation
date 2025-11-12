import { converter } from "./Conversor";

try {
  const reusltado = converter(123);
  console.log(reusltado)
} catch (error) {
  if (error instanceof TypeError) {
    console.error(`TypeError: ${error}`);
  } else {
    console.error(`Outro erro: ${error}`)
  }
} finally {
  console.log(`O try-catch capturou o erro!`);
}

converter(123);