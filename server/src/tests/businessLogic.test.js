const { calcularTotalLineas, esStockBajo } = require('../services/businessLogic');

describe('calcularTotalLineas', () => {
  test('calcula correctamente con líneas válidas', () => {
    const lineas = [
      { cantidad: 2, precio_unitario: 10.5 },
      { cantidad: 3, precio_unitario: 4.0 }
    ];
    expect(calcularTotalLineas(lineas)).toBe(33.0);
  });

  test('lanza error si las líneas no son un arreglo', () => {
    expect(() => calcularTotalLineas('no array')).toThrow('Se requiere un arreglo de líneas');
  });

  test('lanza error si cantidad es negativa o cero', () => {
    const lineas = [{ cantidad: 0, precio_unitario: 10 }];
    expect(() => calcularTotalLineas(lineas)).toThrow('Cantidad debe ser positiva y precio no negativo');
  });
});

describe('esStockBajo', () => {
  test('retorna true si stock actual es menor que mínimo', () => {
    expect(esStockBajo(5, 10)).toBe(true);
  });

  test('retorna true si son iguales', () => {
    expect(esStockBajo(10, 10)).toBe(true);
  });

  test('retorna false si stock actual es mayor', () => {
    expect(esStockBajo(15, 10)).toBe(false);
  });

  test('lanza error si parámetros no son números', () => {
    expect(() => esStockBajo('5', 10)).toThrow('Los parámetros deben ser números');
  });
});