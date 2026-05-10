const request = require('supertest');
// Importa la app (sin iniciar el servidor)
const app = require('../app');

describe('POST /api/v1/productos', () => {
  test('crea un producto y retorna 201', async () => {
    const res = await request(app)
      .post('/api/v1/productos')
      .send({ nombre: 'Cable HDMI', precio_unitario: 5.99 })
      .expect('Content-Type', /json/)
      .expect(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body.nombre).toBe('Cable HDMI');
    expect(res.body.precio_unitario).toBe(5.99);
  });

  test('falla si falta nombre', async () => {
    const res = await request(app)
      .post('/api/v1/productos')
      .send({ precio_unitario: 5.99 })
      .expect(400);
    expect(res.body.error).toBeDefined();
  });
});