module.exports = {
    root: true,

    // Para ignorar algo global, ponerlo acá
    ignorePatterns: [
        "dist/**",
        "**/*.min.*"
    ],

    // Overrides por tipo de archivo
    overrides: [
        // ==== Archivos TypeScript ====
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: ["tsconfig.json"],
                tsconfigRootDir: __dirname,
                sourceType: "module"
            },
            plugins: [
                "@angular-eslint",
                "import",
                "prefer-arrow",
                "@typescript-eslint"
            ],
            // Opcionalmente se puede añadir `extends: ["plugin:@angular-eslint/recommended"]` para setear defaults
            rules: {
                // --- reglas TS/Angular ---
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/indent": ["error", 4, {
                    ObjectExpression: "first",
                    FunctionDeclaration: { parameters: "first" },
                    FunctionExpression: { parameters: "first" },
                    SwitchCase: 1,
                    ArrayExpression: "first"
                }],
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-empty-interface": "error",
                "@typescript-eslint/no-inferrable-types": ["error", { ignoreParameters: true }],
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/unified-signatures": "error",
                "@typescript-eslint/member-delimiter-style": ["error", {
                    multiline: { delimiter: "semi", requireLast: true },
                    singleline: { delimiter: "semi", requireLast: false }
                }],
                "@typescript-eslint/semi": ["error", "always"],
                "@typescript-eslint/type-annotation-spacing": "error",
                "@typescript-eslint/quotes": ["error", "single"],

                "@angular-eslint/component-class-suffix": ["error", { suffixes: ["Component"] }],
                "@angular-eslint/directive-class-suffix": ["error", { suffixes: ["Directive"] }],
                "@angular-eslint/no-host-metadata-property": "error",
                "@angular-eslint/no-inputs-metadata-property": "error",
                "@angular-eslint/no-outputs-metadata-property": "error",
                "@angular-eslint/use-lifecycle-interface": "warn",
                "@angular-eslint/use-pipe-transform-interface": "warn",
                "@angular-eslint/no-outputs-metadata-property": "error",

                "@typescript-eslint/consistent-type-definitions": "error",
                "@typescript-eslint/dot-notation": "off",
                "@typescript-eslint/explicit-member-accessibility": ["off", { accessibility: "explicit" }],

                "@angular-eslint/component-selector": ["off", { type: "element", prefix: ["app", "mpi"], style: "kebab-case" }],
                "@angular-eslint/directive-selector": ["off", { type: "attribute", prefix: ["app", "mpi", "tm"], style: "camelCase" }],

                // Reglas JS/TS base 
                "indent": "off",
                "keyword-spacing": ["error", { after: true, before: true }],
                "space-before-blocks": ["error", { functions: "always", keywords: "always", classes: "always" }],
                "brace-style": ["error", "1tbs", { allowSingleLine: true }],
                "object-curly-spacing": ["error", "always"],
                "curly": "error",
                "comma-spacing": ["error", { before: false, after: true }],
                "dot-notation": "off",
                "eol-last": "error",
                "eqeqeq": ["error", "smart"],
                "no-bitwise": "error",
                "no-caller": "error",
                "no-console": ["error", { allow: ["debug", "info", "warn", "error", "trace", "time", "timeEnd"] }],
                "no-debugger": "error",
                "no-empty": "off",
                "no-empty-function": "off",
                "no-eval": "error",
                "no-fallthrough": "error",
                "no-new-wrappers": "error",
                "no-redeclare": "error",
                "no-restricted-imports": "error",
                "no-throw-literal": "error",
                "no-trailing-spaces": "error",
                "no-underscore-dangle": "off",
                "no-unused-labels": "error",
                "no-var": "error",
                "prefer-const": ["error", { destructuring: "any", ignoreReadBeforeAssign: false }],
                "prefer-arrow-callback": ["error", { allowUnboundThis: true, allowNamedFunctions: true }],
                "space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],
                "quotes": ["error", "single"],
                "radix": "error",
                "semi": "error",
                "spaced-comment": ["error", "always", { markers: ["/"] }],
                "array-bracket-spacing": ["error", "never", { singleValue: false, objectsInArrays: false, arraysInArrays: false }],
                "no-irregular-whitespace": ["error", { skipComments: true }],
                "no-multi-spaces": "error"
            }
        },

        // ==== Tests (*.spec.ts) ====
        {
            files: ["**/*.spec.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: [
                    "projects/plex-demo/tsconfig.spec.json", // tsconfig de la demo para tests
                    "tsconfig.json"                           // por si importa algo comun
                ],
                tsconfigRootDir: __dirname,
                sourceType: "module"
            },
            env: {
                jasmine: true,   // habilita describe/it/expect como globales
                node: true
            },
            rules: {
                // Se puede desactivar reglas solo para tests si hace falta
                // "@typescript-eslint/no-explicit-any": "off"
            }
        },

        // ==== Plantillas Angular (HTML) ====
        {
            files: ["*.html"],
            parser: "@angular-eslint/template-parser",
            plugins: ["@angular-eslint/template"],
            extends: ["plugin:@angular-eslint/template/recommended"],
            rules: {
                // Rglas de template (ej.: desactivar alguna)
                // "@angular-eslint/template/eqeqeq": "off"
            }
        }
    ]
};

