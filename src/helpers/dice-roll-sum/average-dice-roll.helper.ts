import { DiceRollSum } from '../../models/dice-roll-sum.interface';

export function averageDiceRoll(sidesOnDice: number, numberOfDice: number): DiceRollSum {
  if (!sidesOnDice || isNaN(sidesOnDice) || sidesOnDice < 1) {
    throw new Error('Parameter sidesOnDice must be a positive number!')
  }
  if (!numberOfDice || isNaN(numberOfDice) || numberOfDice < 1) {
    throw new Error('Parameter numberOfDice must be a positive number!')
  }
  
  const numberOfCombinations: number = Math.pow(sidesOnDice, numberOfDice);
  const diceRollMean: number = (numberOfDice + numberOfDice * sidesOnDice) / 2;

  let currentDiceRoll: number[] = [];
  let varianceNominator: number = 0;
  let currentDiceRollSum: number;
  let n: number = 0;
  do {
    n++;
    currentDiceRoll = currentDiceRoll && currentDiceRoll.length ? getNextResult(currentDiceRoll, sidesOnDice, numberOfDice) : Array(numberOfDice).fill(1);
    currentDiceRollSum = currentDiceRoll.reduce((a, b) => a + b);
    varianceNominator += Math.pow(currentDiceRollSum - diceRollMean, 2);
  } while (n < numberOfCombinations)

  const diceRollVariance: number = varianceNominator / numberOfCombinations;
  const diceRollStandardDeviation: number = Math.sqrt(diceRollVariance);

  return {
    mean: diceRollMean,
    variance: diceRollVariance,
    standardDeviation: diceRollStandardDeviation,
  }
}

function getNextResult(currentDiceRoll: number[], sidesOnDice: number, dieNumber: number): number[] {
  if (currentDiceRoll[dieNumber - 1] < sidesOnDice) {
    currentDiceRoll[dieNumber - 1]++;
    return currentDiceRoll;
  } else if (currentDiceRoll[dieNumber - 1] = sidesOnDice) {
    currentDiceRoll[dieNumber - 1] = 1;
    return getNextResult(currentDiceRoll, sidesOnDice, dieNumber - 1);
  } else {
    throw new Error('Parameter die number is out of range!');
  }
}
