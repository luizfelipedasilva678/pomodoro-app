export default function getRandomArbitrary(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomNumber(): number {
  return new Date().getTime();
}

export { randomNumber };
