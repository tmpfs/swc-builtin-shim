# Spack Builtin Shim

An attempt to use shims for node builtin modules.

```
yarn install
npx spack
```

When compiling with `spack` for the browser and using builtin modules such as `assert` and `events` we encountered this error when executing the generated bundle:

```
Uncaught SyntaxError: Cannot use import statement outside a module
```

It appears that builtin modules are passed through as `import` statements untouched as there is no available code to compile.

However, when we added the `assert` and `events` packages to be used as shims and updated `.swcrc` to configure the `paths`:

```json
{
  "jsc": {
    "paths": {
      "assert": ["node_modules/assert"],
      "events": ["node_modules/events"]
    }
  }
}
```

These shims for the builtin modules are not used and the compiled bundle still includes the original import statements.

* [List of builtin shims](https://github.com/browserify/browserify#compatibility)
