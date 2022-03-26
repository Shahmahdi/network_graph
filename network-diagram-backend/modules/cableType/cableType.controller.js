const CableType = require("./cableType.model");
const { isEmpty } = require("lodash");
const { errorResponseHandler } = require("./../../utils/errorResponseHandler");
const {
  successResponseHandler
} = require("./../../utils/successResponseHandler");

const getAllCableTypes = async (ctx) => {
  try {
    const cableTypes = await CableType.find({}).sort({ name: 1 }).exec();
    successResponseHandler(ctx, cableTypes, "Cable types fetched successfully");
  } catch (error) {
    console.log("getAllCableTypes error: ", error);
    errorResponseHandler(ctx, error);
  }
};

const addCableType = async (ctx) => {
  try {
    const name = ctx.request.body.name;
    if (isEmpty(name) === true) {
      throw Object.assign(new Error(), {
        status: 400,
        message: "Name is required"
      });
    }

    const cableType = new CableType({
      name
    });
    const createdCableType = await cableType.save();
    successResponseHandler(
      ctx,
      createdCableType,
      "Cable type has been created successfully"
    );
  } catch (error) {
    console.log("addCableType error: ", error);
    errorResponseHandler(ctx, error);
  }
};

const getCableType = async (ctx) => {
  try {
    const id = ctx.params;
    const cableType = await CableType.findOne(id).exec();
    successResponseHandler(ctx, cableType, "Get cable type successfully");
  } catch (error) {
    console.log(`getCableType error: `, error);
    errorResponseHandler(ctx, error);
  }
};

const updateCableType = async (ctx) => {
  try {
    const id = ctx.params;
    const name = ctx.request.body.name;
    if (isEmpty(name) === true) {
      throw Object.assign(new Error(), {
        status: 400,
        message: "Invalid data"
      });
    }
    const cableType = await CableType.findOne(id).exec();
    if (!cableType.name) {
      throw Object.assign(new Error(), {
        status: 404,
        message: "Cable type not found"
      });
    }
    cableType.name = name;
    const updatedCableType = await cableType.save();
    successResponseHandler(
      ctx,
      updatedCableType,
      "Cable type has been updated successfully"
    );
  } catch (error) {
    console.log(`updateCableType error: `, error);
    errorResponseHandler(ctx, error);
  }
};

const deleteCableType = async (ctx) => {
  try {
    const id = ctx.params;
    const cableType = await CableType.findOne(id).exec();
    if (!cableType.name) {
      throw Object.assign(new Error(), {
        status: 404,
        message: "Cable type not found"
      });
    }
    const deletedCableType = await cableType.remove();
    successResponseHandler(
      ctx,
      deletedCableType,
      "Cable type has been deleted successfully"
    );
  } catch (error) {
    console.log(`deleteCableType error: `, error);
    errorResponseHandler(ctx, error);
  }
};

module.exports = {
  getAllCableTypes,
  addCableType,
  getCableType,
  updateCableType,
  deleteCableType
};
