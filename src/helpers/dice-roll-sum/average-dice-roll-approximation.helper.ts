import { DiceRollSum } from '../../models/dice-roll-sum.interface';

export function averageDiceRollApproximation(sidesOnDice: number, numberOfDice: number, sampleSize: number = 100000): DiceRollSum {
  if (!sidesOnDice || isNaN(sidesOnDice) || sidesOnDice < 1) {
    throw new Error('Parameter sidesOnDice must be a positive number!')
  }
  if (!numberOfDice || isNaN(numberOfDice) || numberOfDice < 1) {
    throw new Error('Parameter numberOfDice must be a positive number!')
  }
  if (!sampleSize || isNaN(sampleSize) || sampleSize < 1) {
    throw new Error('Parameter sampleSize must be a positive number!')
  }

  let currentDiceRoll: number[] = [];
  let diceRollMeanNominator: number = 0;
  let currentDiceRollSum: number;
  let n: number = 0;
  const diceRollSums: number[] = [];
  do {
    n++;
    currentDiceRoll = Array.from({length: numberOfDice}, () => rollDice(sidesOnDice));
    currentDiceRollSum = currentDiceRoll.reduce((a, b) => a + b);
    diceRollMeanNominator += currentDiceRollSum;
    diceRollSums.push(currentDiceRollSum);
  } while (n < sampleSize)

  const diceRollMean: number = diceRollMeanNominator / sampleSize;
  let varianceNominator: number = 0;
  diceRollSums.forEach((diceRollSum: number) => {
    varianceNominator += Math.pow(diceRollSum - diceRollMean, 2);
  })
  const diceRollVariance: number = varianceNominator / sampleSize;
  const diceRollStandardDeviation: number = Math.sqrt(diceRollVariance);

  return {
    mean: diceRollMean,
    variance: diceRollVariance,
    standardDeviation: diceRollStandardDeviation,
  }
}

function rollDice(sidesOnDice: number): number {
  return 1 + Math.floor(Math.random() * sidesOnDice);
}
