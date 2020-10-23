/* eslint-disable sort-keys */
/* eslint-disable max-lines */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-magic-numbers */

/*
 Dependencies:
  "@typescript-eslint/eslint-plugin",
  "@typescript-eslint/parser",
  "eslint",
  "eslint-plugin-import"
*/

module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "project": "./tsconfig.json",
    "createDefaultProgram": true,
  },
  "env": {
    "es2021": true,
    "amd": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
  ],
  "plugins": [
    "import",
    "@typescript-eslint",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "rules": {
    /** ------------------- JavaScript ------------------- */

    /** --------- Possible errors --------- */
    // * This project allow console
    "no-console": "off",
    "no-extra-parens": ["error", "functions"],
    "no-promise-executor-return": "error",
    "no-template-curly-in-string": "error",
    "no-unreachable-loop": "error",

    /** --------- Best practice --------- */
    "array-callback-return": "error",
    "curly": ["error", "multi-or-nest", "consistent"],
    "class-methods-use-this": "error",
    "default-case-last": "error",
    "dot-location": ["error", "property"],
    "eqeqeq": "error",
    "grouped-accessor-pairs": "error",
    "max-classes-per-file": ["error", 1],
    "no-alert": "error",
    "no-caller": "error",
    "no-constructor-return": "error",
    "no-else-return": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extra-label": "error",
    "no-implicit-coercion": ["error", {
      "boolean": false,
      "number": true,
      "string": false,
      "allow": ["!!", "~"],
    }],
    "no-implied-eval": "error",
    "no-lone-blocks": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "prefer-promise-reject-errors": "off",
    "prefer-regex-literals": "error",
    "require-await": "error",
    "wrap-iife": ["error", "inside"],
    "yoda": ["error", "never", { "exceptRange": true }],

    /** --------- Stylistic --------- */
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent"],
    "block-spacing": ["error", "always"],
    "capitalized-comments": "error",
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "eol-last": ["error", "never"],
    "func-names": ["error", "as-needed"],
    "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "consistent"],
    "implicit-arrow-linebreak": ["error", "beside"],
    "jsx-quotes": ["error", "prefer-single"],
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true,
      "mode": "strict",
    }],
    "line-comment-position": ["error", { "position": "above" }],
    "lines-around-comment": ["error", {
      "beforeBlockComment": false,
      "allowBlockStart": true,
      "allowBlockEnd": false,
      "allowObjectStart": true,
      "allowObjectEnd": false,
      "allowArrayStart": true,
      "allowArrayEnd": false,
      "allowClassStart": true,
      "allowClassEnd": false,
    }],
    "max-depth": ["error", 4],
    "max-len": ["error", {
      "code": 100,
      "tabWidth": 2,
      "ignoreUrls": true,
      "ignoreStrings": true,
      // Ignore require and single-line imports from very long module
      "ignorePattern":
        // Ignore require statement
        "(^\\s*(var|const)\\s.+=\\s*require\\s*\\()"
        // Ignore single-line import statement
        + "|(^import\\s([a-zA-Z0-9]+)\\sfrom\\s')"
        // Ignore last-line of import statement
        + "|(^\\}\\sfrom\\s')",
    }],
    "max-lines": ["error", { "max": 300 }],
    "max-lines-per-function": ["error", 50],
    "max-nested-callbacks": ["error", 4],
    "max-params": ["error", 4],
    "max-statements-per-line": ["error", { "max": 2 }],
    "multiline-comment-style": "off",
    "new-cap": "error",
    "new-parens": "error",
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "no-bitwise": "error",
    "no-inline-comments": "error",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 0,
      "maxBOF": 0,
    }],
    "no-negated-condition": "error",
    "no-new-object": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "error",
    "no-useless-escape": "warn",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": ["error", "beside", {
      "overrides": {
        "while": "below",
        "do": "any",
        "for": "below",
        "if": "any",
      },
    }],
    "object-curly-newline": ["error", { "consistent": true }],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "before"],
    "padded-blocks": ["error", "never"],
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "quote-props": ["error", "as-needed"],
    "semi-spacing": ["error", {
      "before": false,
      "after": true,
    }],
    "semi-style": ["error", "last"],
    "sort-keys": ["error", "asc", {
      "caseSensitive": true,
      "natural": true,
      "minKeys": 20,
    }],
    "space-before-blocks": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", {
      "words": true,
      "nonwords": false,
    }],
    "spaced-comment": ["error", "always"],
    "switch-colon-spacing": ["error", {
      "after": true,
      "before": false,
    }],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": "off",
    "wrap-regex": "off",

    /** --------- ES6+ --------- */
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", {
      "after": true,
      "before": true,
    }],
    "generator-star-spacing": ["error", {
      "before": true,
      "after": false,
    }],
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": ["error", {
      "array": true,
      "object": true,
    }, { "enforceForRenamedProperties": false }],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": "error",
    // @TODO: Enforce this
    "sort-imports": ["off", {
      "ignoreCase": false,
      "ignoreDeclarationSort": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
      "allowSeparatedGroups": false,
    }],
    "symbol-description": "error",
    "template-curly-spacing": ["error", "never"],
    "yield-star-spacing": ["error", "after"],

    /** --------- Plugin: import --------- */
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "off",
    "import/named": "off",

    /** ------ Overriden by typescript-eslint ------ */

    "brace-style": "off",
    "@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],

    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "only-multiline",
    }],

    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error", {
      "before": false,
      "after": true,
    }],

    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error", "never"],

    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": ["error"],

    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      { "exceptAfterSingleLine": true },
    ],

    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": ["error"],

    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"],

    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": ["error"],

    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error"],

    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        "ignoreEnums": true,
        "ignoreNumericLiteralTypes": true,
        "ignoreReadonlyClassProperties": true,
        "ignore": [0, 1, -1],
        "ignoreArrayIndexes": true,
        "ignoreDefaultValues": true,
        "enforceConst": true,
        "detectObjects": true,
      },
    ],

    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": ["error"],

    "quotes": "off",
    "@typescript-eslint/quotes": ["error", "single"],

    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always",
    }],

    "semi": "off",
    "@typescript-eslint/semi": ["error", "never"],

    "indent": "off",
    "@typescript-eslint/indent": ["error", 2, {
      "flatTernaryExpressions": false,
      "SwitchCase": 1,
      "ignoreComments": false,
    }],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",

    /** ------------------- TypeScript-specific ------------------- */

    // Use "type[]" for array type
    "@typescript-eslint/array-type": ["error", {
      default: "array",
      readonly: "array",
    }],
    // Use interface for  definitions
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    // Use 'type' imports
    "@typescript-eslint/consistent-type-imports": ["error", {
      "prefer": "no-type-imports",
      "disallowTypeAnnotations": true,
    }],
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/no-inferrable-types": ["error", {
      "ignoreParameters": true,
      "ignoreProperties": true,
    }],

    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",

    "@typescript-eslint/naming-convention": [
      'error',
      // Enforce PascalCase for types
      {
        "selector": 'typeLike',
        "format": ['PascalCase'],
      },
      // Enforce that interface names do not begin with an I
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": false,
        },
      },
      // Enforce that boolean variables are prefixed with an allowed verb
      {
        "selector": ["variable", "parameter", "parameterProperty"],
        "format": null,
        "types": ["boolean"],
        "custom": {
          // Allow "disabled" because native JSX requires
          "regex": "^((is|has|should|can|did|will|are|IS|HAS|SHOULD|CAN|DID|WILL|ARE)[A-Z_]([A-Za-z0-9_]?)+)|disabled$",
          "match": true,
        },
      },
    ],
  },
}