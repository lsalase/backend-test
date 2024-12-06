import app from '../src/server.js';
import request from 'supertest';

describe("Bateria de test de servidor", () => {

    test("Servidor en endpoint /", async () => {

        return await request(app)
            .get('/')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola mundo al usuario lsalas");
            });
    });

    test("Servidor en endpoint /api-key", async () => {

        return await request(app)
            .get('/api-key')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("la apikey de mi aplicacion es: default-key");
            });
    });

    test("Servidor en endpoint /validar-rut?rut=numero-rut", async () => {

        return await request(app)
            .get('/validar-rut?rut=553500-K')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El rut suministrado (553500-K) es : valido");
            });
    });
    test("Servidor en endpoint /validar-rut?rut=numero-rut", async () => {
        return await request(app)
            .get('/validar-rut?rut=1')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El rut suministrado (1) es : invalido");
            });
    });
    test("Servidor en endpoint /validar-rut?rut=numero-rut", async () => {
        return await request(app)
            .get('/validar-rut?rut=13870610-9')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El rut suministrado (13870610-9) es : valido");
            });
    });
    test("Servidor en endpoint /validar-rut?rut=numero-rut", async () => {
        return await request(app)
            .get('/validar-rut?rut=texto')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El rut suministrado (texto) es : invalido");
            });
    });
    test("Servidor en endpoint /validar-rut?rut=numero-rut", async () => {
        return await request(app)
            .get('/validar-rut?rut=3436518-0')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El rut suministrado (3436518-0) es : valido");
            });
    });
    


    test("Servidor en endpoint /buscar-subcadena?cadena=string&subcadena=substring", async () => {

        return await request(app)
            .get('/buscar-subcadena?cadena=hola mundo y mas mundo&subcadena=mundo')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("La cadeja \"hola mundo y mas mundo\" tiene 2 repeticiones de la subcadena \"mundo\"");
            });
    });


});
