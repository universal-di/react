# Universal Dependency Injection port for React
[![MIT License][license-image]][license] [![Build Status][github-action-image]][github-action-url] [![NPM version][npm-version-image]][npm-url] [![Coverage Status][test-coverage-image]][test-coverage-url] [![PRs welcome][contributing-image]][contributing-url]

## Pre-requisites

+ [Universal Dependency Injection](https://github.com/universal-di/core)

## Contents

+ [DIContextProvider](#dicontextprovider)
+ [useInjection](#useinjection)

## DIContextProvider

`DIContextProvider` is a React context provider that allows you to provide dependencies to your React DOM.

```tsx
const application = new DIApplication(AppModule);

<DIContextProvider
    injector={application.rootInjector}
>
    <ProductListComponent />
</DIContextProvider>
```

## useInjection

`useInjection` is a hook that allows you to inject dependencies into your React components.

```tsx
export function ProductListComponent() {
    // AnalyticsService type is inferred here
    const analyticsService = useInjection(ANALYTICS_SERVICE);

    useEffect(() => {
        analyticsService.track('browsed-productes');
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
