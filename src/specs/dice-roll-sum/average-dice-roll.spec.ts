import { averageDiceRoll } from '../../helpers/dice-roll-sum/average-dice-roll.helper';
import { DiceRollSum } from '../../models/dice-roll-sum.interface';

describe('Helper averageDiceRoll', () => {
  let expectedResult: DiceRollSum;

  describe(('D4'), () => {
    it('should return correct value for 1 die', () => {
      expectedResult = {
        mean: 2.5,
        variance: 1.25,
        standardDeviation: 1.118033988749895,
      }
      expect(averageDiceRoll(4, 1)).toEqual(expectedResult);
    })
  
    it('should return correct value for 2 dice', () => {
      expectedResult = {
        mean: 5,
        variance: 2.5,
        standardDeviation: 1.5811388300841898,
      }
      expect(averageDiceRoll(4, 2)).toEqual(expectedResult);
    })
  
    it('should return correct value for 3 dice', () => {
      expectedResult = {
        mean: 7.5,
        variance: 3.75,
        standardDeviation: 1.9364916731037085,
      }
      expect(averageDiceRoll(4, 3)).toEqual(expectedResult);
    })
  });

  describe(('D6'), () => {
    it('should return correct value for 1 die', () => {
      expectedResult = {
        mean: 3.5,
        variance: 2.9166666666666665,
        standardDeviation: 1.707825127659933,
      }
      expect(averageDiceRoll(6, 1)).toEqual(expectedResult);
    })
  
    it('should return correct value for 2 dice', () => {
      expectedResult = {
        mean: 7,
        variance: 5.833333333333333,
        standardDeviation: 2.41522945769824,
      }
      expect(averageDiceRoll(6, 2)).toEqual(expectedResult);
    })
  
    it('should return correct value for 3 dice', () => {
      expectedResult = {
        mean: 10.5,
        variance: 8.75,
        standardDeviation: 2.958039891549808,
      }
      expect(averageDiceRoll(6, 3)).toEqual(expectedResult);
    })
  });

  describe(('D8'), () => {
    it('should return correct value for 1 die', () => {
      expectedResult = {
        mean: 4.5,
        variance: 5.25,
        standardDeviation: 2.29128784747792,
      }
      expect(averageDiceRoll(8, 1)).toEqual(expectedResult);
    })
  
    it('should return correct value for 2 dice', () => {
      expectedResult = {
        mean: 9,
        variance: 10.5,
        standardDeviation: 3.24037034920393,
      }
      expect(averageDiceRoll(8, 2)).toEqual(expectedResult);
    })
  
    it('should return correct value for 3 dice', () => {
      expectedResult = {
        mean: 13.5,
        variance: 15.75,
        standardDeviation: 3.968626966596886,
      }
      expect(averageDiceRoll(8, 3)).toEqual(expectedResult);
    })
  });
});
