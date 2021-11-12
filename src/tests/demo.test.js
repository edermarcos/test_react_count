describe('Este es un describe', () => {
  test('deberia ser true', () => {
    const mensaje = 'Hola mundo';
    const mensaje2 = `Hola mundo`;
    expect(mensaje).toBe(mensaje2);
  })
});
