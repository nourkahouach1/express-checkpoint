function verifytime(req, res, next) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();

  if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 9 &&
    currentHour <= 17
  ) {
    next();
  } else {
    res
      .status(503)
      .send(
        "We are closed please come back later , Our working hours are Monday to Friday, from 9 to 17"
      );
  }
}

module.exports = verifytime;
