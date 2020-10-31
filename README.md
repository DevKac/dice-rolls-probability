# Dice Rolls Probability

Dice Rolls Probability is a javascript library for calculationg most likely results of a dice rolls

## Installation

```bash
npm i dice-rolls-probability
```

## Usage

Just import like any other librarym e.g.
```javascript
const diceRollsProbability = require('dice-rolls-probability');

diceRollsProbability.averageDiceRollExact(6, 9)
diceRollsProbability.averageDiceRollApproximation(6, 9)
```

## Functions

averageDiceRollExact: function takes as parameters how many sides the die has and how many dice you wish to throw. Then it calculates mean, variance and standardDeviation using all possible results of a roll. Recommended to use on smaller number of dice for higher accurancy.

averageDiceRollApproximation: function takes as parameters how many sides the die has, how many dice you wish to throw and how many rolls to make (default 100 000). Then it calculates mean, variance and standardDeviation using speciefied number of random samples. Recommended to use on a higher number of dice for faster calculations.
