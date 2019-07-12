const notEmpty = obj => {
  if (obj.length === 0) {
    return false;
  }
  return true;
};

module.exports = notEmpty;
