const filterNotUndefined = (obj) =>
  Object.entries(obj)
    .filter(
      (value, _) =>
        value[1] !== undefined &&
        !Number.isNaN(value[1]) &&
        !(Array.isArray(value[1]) && value[1].length === 0) &&
        !(value[1] instanceof Date && isNaN(value[1].getTime())) &&
        Boolean(value[1])
    )
    .reduce((acc, data) => ({ ...acc, [data[0]]: data[1] }), {});

module.exports = { filterNotUndefined };
