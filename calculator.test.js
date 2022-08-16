const calculator = require('./calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new calculator();
  } );
  
  it('should add two numbers', () => {
    expect(calc.add(1, 2)).toBe(3);
  } );

  it('should add two negative numbers', () => {
    expect(calc.add(-1, -2)).toBe(-3);
  } );

  it('should add two positive numbers', () => {
    expect(calc.add(5, 2)).toBe(7);
  } );
  
  it('should subtract two numbers', () => {
    expect(calc.subtract(3, 2)).toBe(1);
  } );

  it('should subtract two numbers', () => {
    expect(calc.subtract(5, 2)).toBe(3);
  } );
  it('should subtract two numbers', () => {
    expect(calc.subtract(-2, -4)).toBe(2);
  } );

  it('should multiply two numbers', () => {
    expect(calc.multiply(3, 2)).toBe(6);
  } );

  it('should multiply two negative numbers', () => {
    expect(calc.multiply(-3, -5)).toBe(15);
  } );
  it('should multiply two numbers', () => {
    expect(calc.multiply(7, 4)).toBe(28);
  } );
  
  it('should divide two numbers', () => {
    expect(calc.divide(6, 2)).toBe(3);
  } );

  it('should divide two negative numbers', () => {
    expect(calc.divide(-20, -10)).toBe(2);
  } );

  it('should divide two numbers', () => {
    expect(calc.divide(8, 2)).toBe(4);
  } );
});
