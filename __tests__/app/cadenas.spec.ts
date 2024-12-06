import { describe, test, expect } from "@jest/globals";
import { contarCoincidenciasEnCadena } from "../../src/app/cadenas";

describe("Bateria de test de cadena", () => {
    test("consultar una cadena", () => {

        expect(contarCoincidenciasEnCadena('hola mundo', 'mundo')).toBe(1);
        expect(contarCoincidenciasEnCadena('hola mundo y otro mundo mas', 'mundo')).toBe(2);
        
    });
});