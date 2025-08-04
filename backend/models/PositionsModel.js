const { model } = require("mongoose");

const {positionsSchema} = require("../schemas/PositionsSchemas");

const PositionsModel = new model("position", positionsSchema);

module.exports = {PositionsModel};