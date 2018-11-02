module.exports = function vadimtrify(string) {
  if (typeof string !== "string") throw new TypeError("Vadim wants a string!");
  return string.replace(/\s/g, "");
};