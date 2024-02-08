/**
 * @fileoverview Descrição da regra aqui.
 * @author Seu Nome
 */
"use strict";

// eslint-disable-next-line node/no-missing-require, node/no-unpublished-require
const { rules } = require('@typescript-eslint/eslint-plugin');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    messages: {
      someMessageId: 'Some error message',
    },
    type: 'problem',
    docs: {
      description: "Descrição da regra aqui",
      recommended: false,
      url: "URL para documentação da regra",
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return rules['@typescript-eslint/no-unused-vars'](context);
  },
};
