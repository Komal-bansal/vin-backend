const { msg } = require("../../../config/messages"),
  { Owner } = require("../model/owner.model"),
  { pickOwnerResponse } = require("../../../helpers/pickResponse.helper");

// registration
const postOwner = async data => {
  let body = pickOwnerResponse(data);
  let owner = new Owner(body);
  let response = await owner.save();
  if (response)
    return {
      result: pickOwnerResponse(response),
      status: 200,
      message: msg.postOwnerMsg
    };
};

const getOwner = async data => {
  let owner = await Owner.findOne({ Number: data.params.no });
  return {
    result: pickOwnerResponse(owner),
    status: 200,
    message: msg.success
  };
};

module.exports = {
  getOwner,
  postOwner
};
