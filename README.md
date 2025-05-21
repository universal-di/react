# Universal Dependency Injection port for React

[![MIT License][license-image]][license] [![Build Status][github-action-image]][github-action-url] [![NPM version][npm-version-image]][npm-url] [![Coverage Status][test-coverage-image]][test-coverage-url] [![PRs welcome][contributing-image]][contributing-url]

## Pre-requisites

-   [Universal Dependency Injection](https://github.com/universal-di/core)

## Contents

-   [DIContextProvider](#dicontextprovider)
-   [useInjection](#useinjection)

## Before you inject

Before you can inject anything, you need to create a module and register your dependencies.
You can do this in a separate file or in the same file as your React component.

If you haven't already, install the Universal Dependency Injection package:

```bash
npm install @universal-di/core
```

...and create a module:

```ts
const MY_TOKEN = new InjectionToken<string>("MY_TOKEN");

@Module({
    providers: [{ provide: MY_TOKEN, useValue: "Hello world" }],
})
class AppModule {}
```

## DIContextProvider

`DIContextProvider` is a React context provider that allows you to provide dependencies to your React DOM.

```tsx
const application = new DIApplication(AppModule);

<DIContextProvider injector={application.rootInjector}>
    <ProductListComponent />
</DIContextProvider>;
```

## useInjection

`useInjection` is a hook that allows you to inject dependencies into your React components.

```tsx
export function ProductListComponent() {
    // MY_TOKEN type is inferred here
    const injectedString = useInjection(MY_TOKEN);

    useEffect(() => {
        console.log(injectedString);
    }, []);
}
```

### Authors

[![szymeo](https://avatars.githubusercontent.com/u/11583029?v=4&s=40)](https://github.com/szymeo)
[![bartoszswitalski](https://avatars.githubusercontent.com/u/45360754?v=4&s=40)](https://github.com/b-sw)

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: LICENSE.md
[github-action-image]: https://github.com/universal-di/react/actions/workflows/build-and-publish.yml/badge.svg
[github-action-url]: https://github.com/universal-di/react/actions/workflows/build-and-publish.yml
[npm-url]: https://npmjs.org/package/@universal-di/react
[npm-version-image]: https://badge.fury.io/js/@universal-di/react.svg
[test-coverage-url]: https://codecov.io/gh/universal-di/react
[test-coverage-image]: https://codecov.io/gh/universal-di/react/branch/master/graph/badge.svg
[contributing-url]: https://github.com/universal-di/react/blob/master/CONTRIBUTING.md
[contributing-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
