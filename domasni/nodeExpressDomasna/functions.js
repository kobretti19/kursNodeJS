const f2c = (fh) => (((fh - 32) * 5) / 9).toFixed(2);
const c2f = (c) => (c * 9) / 5 + 32;
module.exports = {
  f2c,
  c2f,
};
