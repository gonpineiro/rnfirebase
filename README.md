#### 1 Instalación del proyecto
```
  npx react-native init rnfirebase --template react-native-template-typescript
```

#### 2 Build del proyecto
- Abrir la carpeta `android` del proyecto con el Android Studio, espara que corra el proceso de configuración
- Ejecutar `Build/rebuild project`
- Ejecutar `Cleam Project`

#### 3 Archivos de configuración
Todos los archivos se generan o se encuentran dentro del root

- .editorconfig
```
  # http://editorconfig.org
  root = true

  [*]
  charset = utf-8
  end_of_line = lf
  indent_size = 2
  indent_style = space
  insert_final_newline = true
  trim_trailing_whitespace = true
  max_line_length = 100

  [*.md]
  max_line_length = 0
  trim_trailing_whitespace = false

  [COMMIT_EDITMSG]
  max_line_length = 0
```

- .eslintrc.js
```js
  module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks'],
    rules: {
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    },
  };

```

- .prettierrc.js
```js
  module.exports = {
    trailingComma: 'all',
    tabWidth: 2,
    singleQuote: true,
    jsxBracketSameLine: false,
    bracketSpacing: true,
    printWidth: 100,
  };
```

- tsconfig.json

```json
  {
    "compilerOptions": {
      /* Basic Options */
      "target": "esnext",                       /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */
      "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
      "lib": ["es6"],                           /* Specify library files to be included in the compilation. */
      "allowJs": true,                          /* Allow javascript files to be compiled. */
      // "checkJs": true,                       /* Report errors in .js files. */
      "jsx": "react-native",                    /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
      // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
      // "sourceMap": true,                     /* Generates corresponding '.map' file. */
      // "outFile": "./",                       /* Concatenate and emit output to single file. */
      // "outDir": "./",                        /* Redirect output structure to the directory. */
      // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
      // "removeComments": true,                /* Do not emit comments to output. */
      "noEmit": true,                           /* Do not emit outputs. */
      // "incremental": true,                   /* Enable incremental compilation */
      // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
      // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
      "isolatedModules": true,                  /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

      /* Strict Type-Checking Options */
      "strict": true,                           /* Enable all strict type-checking options. */
      // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
      // "strictNullChecks": true,              /* Enable strict null checks. */
      // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
      // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
      // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
      // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

      /* Additional Checks */
      // "noUnusedLocals": true,                /* Report errors on unused locals. */
      // "noUnusedParameters": true,            /* Report errors on unused parameters. */
      // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
      // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

      /* Module Resolution Options */
      "moduleResolution": "node",               /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
      "baseUrl": "./",                          /* Base directory to resolve non-absolute module names. */
      // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
      // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
      // "typeRoots": [],                       /* List of folders to include type definitions from. */
      // "types": [],                           /* Type declaration files to be included in compilation. */
      "allowSyntheticDefaultImports": true,     /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
      "esModuleInterop": true                   /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
      // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */

      /* Source Map Options */
      // "sourceRoot": "./",                    /* Specify the location where debugger should locate TypeScript files instead of source locations. */
      // "mapRoot": "./",                       /* Specify the location where debugger should locate map files instead of generated locations. */
      // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
      // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

      /* Experimental Options */
      // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
      // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
    },
    "exclude": [
      "node_modules", "babel.config.js", "metro.config.js", "jest.config.js"
    ]
  }
```

#### 4 Instalacion y configuración del [Husky](https://typicode.github.io/husky/#/)

- Dependencias:

```
  npm install husky@3.0.9
  npm install lint-staged --save-dev
```

- Agregar el siguente comando al `package.json`:

```
  "check-ts": "tsc --watch --noEmit --skipLibCheck
```

- Agregar las siguentes claves en el `package.jsno`

```json
  "husky": {
    "hooks": {
      "pre-commit": "tsc --noEmit --skipLibCheck && lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json}": [
      "prettier \"src/**/*.{js,jsx,json,tsx,ts}\" --write",
      "eslint '*/**/*.{js,ts,tsx}' --quiet --fix"
    ]
  },
```
