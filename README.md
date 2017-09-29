# simple-argv
[![Dependency Status][dependencies-image]][dependencies-url] [![Gandalf Status][gandalf-image]][gandalf-url]

[dependencies-url]: href="https://david-dm.org/giowe/simple-argv
[dependencies-image]: https://david-dm.org/giowe/simple-argv.svg
[gandalf-url]: https://www.youtube.com/watch?v=Sagg08DrO5U
[gandalf-image]: http://img.shields.io/badge/gandalf-approved-61C6FF.svg

Simple process.argv value parser, if [yargs](https://www.npmjs.com/package/yargs) has become an overkill for your needs.

```
npm i simple-argv
```


#Parsing output example:

given this simple program:
```
const argv = require('simple-argv');
console.log(argv);
```

executed with this flags:
```
  $ node . test1 test2 -a 1 --b 2 -c=testC --debug --no-woman -no-cry -happy -key value test3
```

will return this output:
```
{ _: [ 'test1', 'test2', 'test3' ],
  a: 1,
  b: 2,
  c: 'testC',
  debug: true,
  woman: false,
  cry: false,
  happy: true,
  key: 'value' 
}
``` 
