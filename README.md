# Simply Utils

[![NPM](https://nodei.co/npm/simply-utils.png)](https://nodei.co/npm/simply-utils/)

This is a simple, generic utils library that,

- is written in a declarative style,
- aims to compensate the lack of practical usage of some utils library like Lodash,
- try to make pieces of codes smaller reusable blocks, and 
- is written in and refractored from some frontend React projects.

Note that this library **is NOT yet actively maintained** but it might changes depending on demands. Feel free to make a pull request or raise a ticket of any issue.

## Getting Started

This library is supposed to be used in most modern frontend projects (not limited to React) or some backend Node projects. It is designed to separate each function as a individual module, so that it is easier to implement code splitting. 

### Prerequisites

This library has major dependencies of:

- Node (LTS recommended, minimum v8.0)
- React 16
- lodash 4

Others should be fine. But feel free to report any dependencies issue.

### Installing

Install using `npm` or `yarn`:

```sh
npm i --save simply-utils
```

```sh
yarn add simply-utils
```

### Usage

1. Import **separately** using ES6 module (**Recommended**. This uses code-splitting style and is most cost-effective.):

```Javascript
    import isStr from 'simply-utils/dist/string/isStr'

    const isString = isStr('testing')
```

2. Named import as a whole using ES6 module:

```Javascript
    import utils from 'simply-utils'

    const isString = utils.isStr('testing')
```

3. Separate import using ES6 module:

```Javascript
    import { isStr } from 'simply-utils'

    const isString = isStr('testing')
```

4. Import using CommonJS

```Javascript
    const utils = require('simply-utils').default
```

## Running the tests

No testing yet. Unit tests are planned to implement.

### And coding style tests

- Declarative programming
- Stateless, pure function
- Small code blocks (better controlling between 100-200 lines in a file)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Michael Chan** - *Initial work* - [michchan](https://github.com/michchan)
* **Sandy Lau** - *Initial work* - [sandylau333](https://github.com/sandylau333)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details