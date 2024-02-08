/**
 * @fileoverview llluuuu
 * @author lucas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/lucas"),
  { RuleTester } = require("eslint");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  // eslint-disable-next-line node/no-missing-require, node/no-unpublished-require
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2018, // ou a versão do ECMAScript utilizada em seu projeto
    sourceType: 'module', // ou 'script' se for um projeto Node.js
  },
});

ruleTester.run("lucas", rule, {
  valid: [
    // Dê exemplos de código que não irão disparar um aviso
  ],

  invalid: [
    {
      code: "import foo from 'bar';",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
