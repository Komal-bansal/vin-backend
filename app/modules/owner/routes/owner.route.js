const { Router } = require("express"),
  ownerRouter = Router(),
  { get_owner, post_owner } = require("../../owner/controller/owner.controller");

const { jwt_middleware } = require("./../../../jwt.middleware");

ownerRouter.use(jwt_middleware);
ownerRouter.post("/", post_owner);
ownerRouter.get("/:no", get_owner);

module.exports = {
  ownerRouter
};
