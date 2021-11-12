import { getSaludo } from '../../base/02-template-string';

describe('Pruebas em 02-template-string.js', () => {
  test('getSaludo deberia retornar hola Eder Marcos', () => {
    const name = 'Eder Marcos';
    const saludo = getSaludo(name);

    expect(saludo).toBe(`Hola ${ name }`);
  })

  // getSaludo deberia retornar Hola carlos si no hay nada
  test('Deberia retornar Hola carlos cuando no se pasa un parametro', () => {
    const saludo = getSaludo();

    expect(saludo).toBe('Hola Carlos');
  })
})
