﻿{
const QUOTED_STRING = {
    scope: 'string',
    begin: '"',
    end: '"'
};

const VARIABLE = {
    scope: 'variable',
    begin: '[a-zA-Z][a-zA-Z0-9_]*',
};

const FUNCTION_DECLARATION = {
    begin: [
        /function/,
        /\s+/,
        '[a-zA-Z][a-zA-Z0-9_]*'
    ],
    beginScope: {
        1: 'keyword',
        3: 'title.function',
    },
    end: '\\('
};

const VARIABLE_DECLARATION = {
    begin: [
        /var/,
        /\s+/,
        '[a-zA-Z][a-zA-Z0-9_]*'
    ],
    beginScope: {
        1: 'keyword',
        3: 'variable',
    },
    end: '='
};

hljs.registerLanguage('ndscript', function () {
    return {
        keywords: {
            built_in: ['print', 'printLine', 'printImage', 'minimize', 'cost', 'printTilemap', 'grid'],
            keyword: ['if', 'while', 'else', 'or',
                'choose', 'choose\\s+first',
                'function', 'var', 'return',
                'in', 'fail', 'foreach'],
            literal: ['false', 'true', 'null'],
            operator: '[ ] + - * / == != < > <= >= { } ='
        },
        contains: [
            FUNCTION_DECLARATION,
            VARIABLE_DECLARATION,
            QUOTED_STRING,
            //VARIABLE,
            hljs.C_LINE_COMMENT_MODE
        ]
    }
})
}