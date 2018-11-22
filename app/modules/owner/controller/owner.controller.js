const { getOwner, postOwner } = require("../business/owner.business");
const { errorHandler } = require("../../../helpers/errorHandling.helper");

// register a new user
let post_owner = async function(req, res) {
  try {
    const result = await postOwner(req.body);
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(errorHandler(e));
  }
};

// login an existing user and generate refresh jwt token
let get_owner = async function(req, res) {
  try {
    const result = await getOwner(req);
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(errorHandler(e));
  }
};

module.exports = {
  get_owner,
  post_owner
};
