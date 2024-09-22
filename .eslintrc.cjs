module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-refresh"],
  rules: {
    // Обязательно использовать точку с запятой в конце строки
    semi: ["error", "always"],

    // Для улучшения работы с React Refresh
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // Запрещает использование var, только let и const
    "no-var": "error",

    // Требует использовать одинарные кавычки
    quotes: ["error", "single"],

    // Обязательно использование типов в компонентах и функциях
    "@typescript-eslint/explicit-module-boundary-types": "error",

    // Обязывает указывать тип возврата для всех функций, включая компоненты
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: false, allowTypedFunctionExpressions: true },
    ],

    // Запрещает неиспользуемые переменные
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

    // Предупреждение о console.log, но разрешены другие консольные методы
    "no-console": ["warn", { allow: ["warn", "error"] }],

    // Указывает, чтобы блочные элементы всегда были обёрнуты в фигурные скобки
    curly: ["error", "all"],

    // Обязательно использовать строгие сравнения === и !==
    eqeqeq: ["error", "always"],

    // Обязывает использовать const для переменных, которые не переопределяются
    "prefer-const": "error",

    // Запрещает деструктуризацию объектов с использованием any
    "@typescript-eslint/no-unsafe-assignment": "warn",

    // Требует явного указания типа для пропсов в функциональных компонентах React
    "react/prop-types": "off", // Отключаем, если используем TypeScript для типов

    // Запрещает пустые блоки кода
    "no-empty": ["error", { allowEmptyCatch: true }],

    // Обязывает соблюдать consistent return (однородный возврат в функции)
    "consistent-return": "error",

    // Требует явного указания типа для переменных
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],

    // Обязывает использовать {} вокруг JSX в многострочных элементах
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],

    // Запрещает использование alert
    "no-alert": "error",

    // Ожидает отступы в 2 пробела
    indent: ["error", 2, { SwitchCase: 1 }],

    // Ожидает пробелы вокруг оператора => в стрелочных функциях
    "arrow-spacing": ["error", { before: true, after: true }],

    // Предупреждение об избыточных console.log в production
    "no-debugger": "warn",

    // Обязательное использование фигурных скобок в стрелочных функциях
    "arrow-body-style": ["error", "as-needed"],

    // Запрещает явное использование any, лучше использовать unknown или уточнить тип
    "@typescript-eslint/no-explicit-any": "warn",

    // Предупреждение при использовании функций без указания типов параметров
    "@typescript-eslint/typedef": ["warn", { arrowParameter: true }],

    // Запрещает изменение параметров функции
    "no-param-reassign": ["error", { props: true }],

    // Обязывает указывать return type для методов класса
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { accessibility: "explicit" },
    ],

    // Требует добавлять перенос строки перед return, чтобы улучшить читаемость
    "newline-before-return": "error",

    // Предупреждение при слишком длинных строках (например, больше 100 символов)
    "max-len": ["warn", { code: 100 }],

    // Предупреждение о сложных циклических зависимостях между модулями
    "import/no-cycle": ["warn", { maxDepth: 1 }],

    // Запрещает использование неявного any в контексте JSX
    "react/jsx-no-undef": ["error", { allowGlobals: true }],

    // Обязывает добавлять пробелы между переменными, объявлениями и блоками для лучшей читаемости
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],

    // Запрещает отключение ESLint правил напрямую в коде, чтобы поддерживать строгую дисциплину
    "eslint-comments/no-unlimited-disable": "error",

    // Предупреждает об использовании слишком больших и сложных компонентов (по количеству строк)
    "max-lines": ["warn", { max: 300, skipComments: true }],

    // Требует использования React.FC для функциональных компонентов
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function",
      },
    ],
  },
};
