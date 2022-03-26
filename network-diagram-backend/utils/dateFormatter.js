const isValidDate = (date) => {
  return new Date(date).toString() !== 'Invalid Date' && !isNaN(new Date(date));
};

module.exports = { isValidDate };
