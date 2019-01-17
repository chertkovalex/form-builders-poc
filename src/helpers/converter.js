export default {
  metricWeightToImperial(metric) {
    const stone = Math.floor(metric / (0.454 * 14));
    const lb = Math.floor((metric / 0.454) % 14);

    return {
      stone,
      lb,
    };
  },

  imperialWeightToMetric({ lb, stone }) {
    const pounds = lb + stone * 14;
    return Math.round(pounds * 0.45359237);
  },

  metricHeightToImperial(metric) {
    const totalInches = Math.round(metric / 2.54);
    const ins = totalInches % 12;
    const ft = (totalInches - ins) / 12;

    return {
      ins,
      ft,
    };
  },

  imperialHeightToMetric({ ft, ins }) {
    const inches = ft * 12 + ins;
    return Math.round(inches * 2.54);
  },
};
