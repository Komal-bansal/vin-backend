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
      result: response,
      status: 200,
      message: msg.postOwnerMsg
    };
};

const getOwner = async data => {
  let owner = await Owner.find({ Num: data.params.no });
  return {
    result: owner,
    status: 200,
    message: msg.success
  };
};

module.exports = {
  getOwner,
  postOwner
};
