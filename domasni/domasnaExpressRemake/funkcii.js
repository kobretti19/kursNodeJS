//"/f2c/:temperatura",
//"/f2c/:temperatura",
//"/f2c/:temperatura",
//"/temp/:konverzija/:temperatura",
//(32°F − 32) × 5/9 = 0°C fahrenheit
//(0°C × 9/5) + 32 = 32°F

const f2c = (f2c) => ((f2c - 32) * (5 / 9)).toFixed(2);
const c2f = (c2f) => (c2f * 9) / 5 + 32;

module.exports = {
  f2c,
  c2f,
};
