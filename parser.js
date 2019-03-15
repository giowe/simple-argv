const cleanFlag = flag => flag.substr(flag[1] === "-" ? 2 : 1)
const tryParse = value => typeof value !== "undefined" && !value.match(/\D/g) ? Number.parseFloat(value) : value

module.exports = input => {
  if (typeof input === "string") {
    input = ["", "", ...input.split(" ")]
  }

  input = input.slice()
  console.log(input)
  const argv = { _: [] }

  for (let i = 2; i < input.length; i++) {
    const e = input[i]
    if (e[0] !== "-") {
      const prevE = input[i - 1]
      if (prevE[0] === "-") argv[cleanFlag(prevE)] = tryParse(e)
      else argv._.push(tryParse(e))
    }
    else {
      const index = e.indexOf("=")
      if (index === -1) {
        const cleanE = cleanFlag(e)
        cleanE.substr(0, 3).toLowerCase() !== "no-" ? argv[cleanE] = true : argv[cleanE.substr(3, cleanE.length)] = false
      }
      else {
        const key = e.substr(0, index)
        input[i] = key
        argv[cleanFlag(key)] = null
        input.splice(i + 1, 0, e.substr(index + 1, e.length))
      }
    }
  }

  return argv
}
