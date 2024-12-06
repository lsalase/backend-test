import { describe, test, expect } from "@jest/globals";
import { validarRUT } from "../../src/app/rut";

describe("Bateria de test de rut", () => {
    test("validador de rut mediante el digito", () => {

        expect(validarRUT('13870610-9')).toBe(true);
        expect(validarRUT('13870510-9')).toBe(false);
        expect(validarRUT('1')).toBe(false);
        expect(validarRUT('553500-K')).toBe(true);
        
    });
});