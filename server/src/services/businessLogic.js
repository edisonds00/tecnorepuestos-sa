/**
 * Calcula el total de una compra/venta dado un arreglo de líneas.
 * Cada línea tiene cantidad y precio_unitario.
 * Retorna la suma de (cantidad * precio_unitario).
 */
function calcularTotalLineas(lineas) {
  if (!Array.isArray(lineas)) throw new Error('Se requiere un arreglo de líneas');
  return lineas.reduce((total, linea) => {
    if (linea.cantidad <= 0 || linea.precio_unitario < 0) {
      throw new Error('Cantidad debe ser positiva y precio no negativo');
    }
    return total + (linea.cantidad * linea.precio_unitario);
  }, 0);
}

/**
 * Determina si un producto tiene stock bajo.
 * Retorna true si stockActual <= stockMinimo.
 */
function esStockBajo(stockActual, stockMinimo) {
  if (typeof stockActual !== 'number' || typeof stockMinimo !== 'number') {
    throw new Error('Los parámetros deben ser números');
  }
  return stockActual <= stockMinimo;
}

module.exports = { calcularTotalLineas, esStockBajo };