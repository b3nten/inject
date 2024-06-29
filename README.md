<div align="center">
<br />

![Inject](/.github/banner.jpg)

<h1>Inject</h3>

#### Lightweight Javascript DI Container

*Inject is a lightweight dependency injection container for JS & TS*

</div>

### Install

```bash
pnpm install @benstack/inject
```

### Usage

```ts
abstract class Globals {
	// ...
}

class MyGlobals extends Globals {
	// ...
}

const env = new InjectionKey<string>;

class MyClass {
	env = inject(env)
	globals = inject(Globals)
}

const container = new Container;
container.registerSingleton(Globals, MyGlobals)
container.registerTransient(MyClass);
container.registerValue(env, "development")

const myclass = container.resolve(MyClass)

assertEquals(myclass.env, "development") // true
assert(myclass.globals instanceof Globals) // true
```

### License

Made with 💛

Published under [MIT License](./LICENSE).