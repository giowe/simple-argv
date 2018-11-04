const a = process.argv.slice();
const argv = {_: []};

const cleanFlag = flag => flag.substr(flag[1] === '-' ? 2 : 1);
const tryParse = value => typeOf(value) !== 'undefined' && !value.match(/\D/g) ? Number.parseFloat(value) : value;

for (let i = 2; i < a.length; i++) {
  const e = a[i];
  if (e[0] !== '-') {
    const prevE = a[i - 1];
    if (prevE[0] === '-') argv[cleanFlag(prevE)] = tryParse(e);
    else argv._.push(tryParse(e));
  }
  else {
    const index = e.indexOf('=');
    if (index === -1) {
      const cleanE = cleanFlag(e);
      cleanE.substr(0, 3).toLowerCase() !== 'no-' ? argv[cleanE] = true : argv[cleanE.substr(3, cleanE.length)] = false;
    }
    else {
      const key = e.substr(0, index);
      a[i] = key;
      argv[cleanFlag(key)] = null;
      a.splice(i + 1, 0, e.substr(index + 1, e.length));
    }
  }
}

module.exports = argv;
