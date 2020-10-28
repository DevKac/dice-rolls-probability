import { averageDiceRollApproximation } from '../../helpers/dice-roll-sum/average-dice-roll-approximation.helper';
import { DiceRollSum } from '../../models/dice-roll-sum.interface';
import { DiceRollSum1D4, DiceRollSum1D6, DiceRollSum1D8, DiceRollSum2D4, DiceRollSum2D6, DiceRollSum2D8, DiceRollSum3D4, DiceRollSum3D6, DiceRollSum3D8 } from '../../consts/average-dice-roll.const';

describe('Helper averageDiceRollApproximation', () => {
  let expectedResult: DiceRollSum;
  let result: DiceRollSum;
  let acceptableAccuracy: number;

  describe(('Default number of samples'), () => {
    beforeEach(() => {
      acceptableAccuracy = 1;
    });

    describe(('D4'), () => {
      it('should return value with acceptable accurancy for 1 die', () => {
        expectedResult = DiceRollSum1D4;
        result = averageDiceRollApproximation(4, 1);
        
        expect(result).toBeTruthy();
        expect(result.mean).toBeCloseTo(expectedResult.mean, acceptableAccuracy);
        expect(result.variance).toBeCloseTo(expectedResult.variance, acceptableAccuracy - 1);
        expect(result.standardDeviation).toBeCloseTo(expectedResult.standardDeviation, acceptableAccuracy - 1);
      })

      it('should return value with acceptable accurancy for 2 dice', () => {
        expectedResult = DiceRollSum2D4;
        result = averageDiceRollApproximation(4, 2);
        
        expect(result).toBeTruthy();
        expect(result.mean).toBeCloseTo(expectedResult.mean, acceptableAccuracy);
        expect(result.variance).toBeCloseTo(expectedResult.variance, acceptableAccuracy - 1);
        expect(result.standardDeviation).toBeCloseTo(expectedResult.standardDeviation, acceptableAccuracy - 1);
      })

      it('should return value with acceptable accurancy for 3 dice', () => {
        expectedResult = DiceRollSum3D4;
        result = averageDiceRollApproximation(4, 3);
        
        expect(result).toBeTruthy();
        expect(result.mean).toBeCloseTo(expectedResult.mean, acceptableAccuracy);
        expect(result.variance).toBeCloseTo(expectedResult.variance, acceptableAccuracy - 1);
        expect(result.standardDeviation).toBeCloseTo(expectedResult.standardDeviation, acceptableAccuracy - 1);
      })

    });

    describe(('D6'), () => {
      it('should return value with acceptable accurancy for 1 die', () => {
        expectedResult = DiceRollSum1D6;
        result = averageDiceRollApproximation(6, 1);
        
        expect(result).toBeTruthy();
        expect(result.mean).toBeCloseTo(expectedResult.mean, acceptableAccuracy);
        expect(result.variance).toBeCloseTo(expectedResult.variance, acceptableAccuracy - 1);
        expect(result.standardDeviation).toBeCloseTo(expectedResult.standardDeviation, acceptableAccuracy - 1);
      })

      it('should return value with acceptable accurancy for 2 dice', () => {
        expectedResult = DiceRollSum2D6;
        result = averageDiceRollApproximation(6, 2);
        
        expect(result).toBeTruthy();
        expect(result.mean).toBeCloseTo(expectedResult.mean, acceptableAccuracy);
        expect(result.variance).toBeCloseTo(expectedResult.variance, acceptableAccuracy - 1);
        expect(result.standardDeviation).toBeCloseTo(expectedResult.standardDeviation, acceptableAccuracy - 1);
      })

      it('should return value with acceptable accurancy for 3 dice', () => {
        expectedResult = DiceRollSum3D6;
        result = averageDiceRollApproximation(6, 3);
        
        expect(result).toBeTruthy();
        expect(result.mean).toBeCloseTo(expectedResult.mean, acceptableAccuracy);
        expect(result.variance).toBeCloseTo(expectedResult.variance, acceptableAccuracy - 1);
        expect(result.standardDeviation).toBeCloseTo(expectedResult.standardDeviation, acceptableAccuracy - 1);
      })

    });

    describe(('D8'), () => {
      it('should return value with acceptable accurancy for 1 die', () => {
        expectedResult = DiceRollSum1D8;
        result = averageDiceRollApproximation(8, 1);
        
        expect(result).toBeTruthy();
        expect(result.mean).toBeCloseTo(expectedResult.mean, acceptableAccuracy);
        expect(result.variance).toBeCloseTo(expectedResult.variance, acceptableAccuracy - 1);
        expect(result.standardDeviation).toBeCloseTo(expectedResult.standardDeviation, acceptableAccuracy - 1);
      })

      it('should return value with acceptable accurancy for 2 dice', () => {
        expectedResult = DiceRollSum2D8;
        result = averageDiceRollApproximation(8, 2);
        
        expect(result).toBeTruthy();
        expect(result.mean).toBeCloseTo(expectedResult.mean, acceptableAccuracy);
        expect(result.variance).toBeCloseTo(expectedResult.variance, acceptableAccuracy - 1);
        expect(result.standardDeviation).toBeCloseTo(expectedResult.standardDeviation, acceptableAccuracy - 1);
      })

      it('should return value with acceptable accurancy for 3 dice', () => {
        expectedResult = DiceRollSum3D8;
        result = averageDiceRollApproximation(8, 3);
        
        expect(result).toBeTruthy();
        expect(result.mean).toBeCloseTo(expectedResult.mean, acceptableAccuracy);
        expect(result.variance).toBeCloseTo(expectedResult.variance, acceptableAccuracy - 1);
        expect(result.standardDeviation).toBeCloseTo(expectedResult.standardDeviation, acceptableAccuracy - 1);
      })

    });
  });
});
