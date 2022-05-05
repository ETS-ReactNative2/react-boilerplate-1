const getData = (request, response) =>
  response.send({
    build_number: 1,
  });

module.exports = getData;
