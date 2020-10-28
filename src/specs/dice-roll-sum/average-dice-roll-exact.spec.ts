import { averageDiceRollExact } from '../../helpers/dice-roll-sum/average-dice-roll-exact.helper';
import { DiceRollSum } from '../../models/dice-roll-sum.interface';
import { DiceRollSum1D4, DiceRollSum1D6, DiceRollSum1D8, DiceRollSum2D4, DiceRollSum2D6, DiceRollSum2D8, DiceRollSum3D4, DiceRollSum3D6, DiceRollSum3D8 } from '../../consts/average-dice-roll.const';

describe('Helper averageDiceRollExact', () => {
  let expectedResult: DiceRollSum;

  describe(('D4'), () => {
    it('should return correct value for 1 die', () => {
      expectedResult = DiceRollSum1D4;
      expect(averageDiceRollExact(4, 1)).toEqual(expectedResult);
    })
  
    it('should return correct value for 2 dice', () => {
      expectedResult = DiceRollSum2D4;
      expect(averageDiceRollExact(4, 2)).toEqual(expectedResult);
    })
  
    it('should return correct value for 3 dice', () => {
      expectedResult = DiceRollSum3D4;
      expect(averageDiceRollExact(4, 3)).toEqual(expectedResult);
    })
  });

  describe(('D6'), () => {
    it('should return correct value for 1 die', () => {
      expectedResult = DiceRollSum1D6;
      expect(averageDiceRollExact(6, 1)).toEqual(expectedResult);
    })
  
    it('should return correct value for 2 dice', () => {
      expectedResult = DiceRollSum2D6;
      expect(averageDiceRollExact(6, 2)).toEqual(expectedResult);
    })
  
    it('should return correct value for 3 dice', () => {
      expectedResult = DiceRollSum3D6;
      expect(averageDiceRollExact(6, 3)).toEqual(expectedResult);
    })
  });

  describe(('D8'), () => {
    it('should return correct value for 1 die', () => {
      expectedResult = DiceRollSum1D8;
      expect(averageDiceRollExact(8, 1)).toEqual(expectedResult);
    })
  
    it('should return correct value for 2 dice', () => {
      expectedResult = DiceRollSum2D8;
      expect(averageDiceRollExact(8, 2)).toEqual(expectedResult);
    })
  
    it('should return correct value for 3 dice', () => {
      expectedResult = DiceRollSum3D8;
      expect(averageDiceRollExact(8, 3)).toEqual(expectedResult);
    })
  });
});
