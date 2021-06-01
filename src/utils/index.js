const compose =
  (...funcs) =>
  (component) => {
    return funcs.reduceRight((prev, func) => func(prev), component);
  };

export { compose };
