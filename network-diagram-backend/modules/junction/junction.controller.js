const Junction = require("./junction.model");
const { errorResponseHandler } = require("./../../utils/errorResponseHandler");
const {
  successResponseHandler
} = require("./../../utils/successResponseHandler");
const { isEmpty, includes } = require("lodash");
const { JunctionTypes, JunctionStatus } = require("../../variables");
const CableType = require("../cableType/cableType.model");
const { isValidDate } = require("../../utils/dateFormatter");
const { validateObjectId } = require("../../utils/validation");

const getAllJunctions = async (ctx) => {
  try {
    const junctions = await Junction.find({}).sort({ name: 1 }).exec();
    successResponseHandler(ctx, junctions, "Junction fetched successfully");
  } catch (error) {
    errorResponseHandler(ctx, error);
  }
};

const addJunction = async (ctx) => {
  try {
    const { address, type, status } = ctx.request.body;
    if (isEmpty(address) || isEmpty(type) || isEmpty(status)) {
      throw Object.assign(new Error(), {
        status: 400,
        message: "Address, type and status are required"
      });
    }

    const existingJunction = await Junction.findOne({
      address
    }).exec();

    if (existingJunction) {
      throw Object.assign(new Error(), {
        status: 409,
        message: "Junction already exists."
      });
    }

    const junction = new Junction({
      address,
      type,
      status,
      installationDate: new Date().toISOString()
    });
    const createdJunction = await junction.save();
    successResponseHandler(
      ctx,
      createdJunction,
      "Junction has been created successfully"
    );
  } catch (error) {
    errorResponseHandler(ctx, error);
  }
};

const getJunction = async (ctx) => {
  try {
    const id = ctx.params;
    const junction = await Junction.findOne({ _id: id }).exec();
    successResponseHandler(ctx, junction, "Junction fetched successfully");
  } catch (error) {
    errorResponseHandler(ctx, error);
  }
};

const updateJunction = async (ctx) => {
  try {
    const id = ctx.params.id;
    const {
      address,
      type,
      status,
      location,
      descriptionOfLocation,
      uplinkJunctionId,
      uplinkInternetCableTypeId,
      uplinkInternetCableDistance,
      uplinkElectricCableTypeId,
      uplinkElectricCableDistance,
      uninstallationDate,
      note
    } = ctx.request.body;

    // check the junction id is valid or not.
    const junction = await Junction.findOne({ _id: id }).exec();
    if (isEmpty(junction)) {
      throw Object.assign(new Error(), {
        status: 404,
        message: "Junction not found"
      });
    }
    // validate input value and put the new value into junction obj.
    if (address !== undefined) {
      if (address === "") {
        throw Object.assign(new Error(), {
          status: 400,
          message: "Invalid junction address"
        });
      }
      junction.address = address;
    }

    if (type !== undefined) {
      if (type === "" || !includes(JunctionTypes, type)) {
        throw Object.assign(new Error(), {
          status: 400,
          message: "Invalid junction type"
        });
      }
      junction.type = type;
    }

    if (status !== undefined) {
      if (status === "" || !includes(JunctionStatus, status)) {
        throw Object.assign(new Error(), {
          status: 400,
          message: "Invalid junction status"
        });
      }
      junction.status = status;
    }

    if (location !== undefined) {
      if (location === "") {
        throw Object.assign(new Error(), {
          status: 400,
          message: "Invalid junction location"
        });
      }
      junction.location = location;
    }

    if (descriptionOfLocation !== undefined) {
      if (descriptionOfLocation === "") {
        throw Object.assign(new Error(), {
          status: 400,
          message: "Invalid junction descriptionOfLocation"
        });
      }
      junction.descriptionOfLocation = descriptionOfLocation;
    }

    if (uplinkJunctionId !== undefined) {
      if (uplinkJunctionId === "" || !validateObjectId(uplinkJunctionId)) {
        throw Object.assign(new Error(), {
          status: 400,
          message: "Invalid junction uplink junction"
        });
      }
      const uplinkJunction = await Junction.findOne({
        _id: uplinkJunctionId
      }).exec();
      if (!uplinkJunction) {
        throw Object.assign(new Error(), {
          status: 404,
          message: "Uplink junction is not found"
        });
      }
      junction.uplinkJunctionId = uplinkJunctionId;
    }

    if (uplinkInternetCableTypeId !== undefined) {
      if (uplinkInternetCableTypeId === "" || !validateObjectId(uplinkInternetCableTypeId)) {
        throw Object.assign(new Error(), {
          status: 400,
          message: "Invalid cable type"
        });
      }
      const uplinkCableType = await CableType.findOne({
        _id: uplinkInternetCableTypeId
      }).exec();
      if (!uplinkCableType) {
        throw Object.assign(new Error(), {
          status: 404,
          message: "Uplink cable type is not found"
        });
      }
      junction.uplinkInternetCableTypeId = uplinkInternetCableTypeId;
    }

    if (uplinkInternetCableDistance !== undefined) {
      if (
        uplinkInternetCableDistance === "" ||
        isNaN(uplinkInternetCableDistance) ||
        uplinkInternetCableDistance < 0
      ) {
        throw Object.assign(new Error(), {
          status: 400,
          message: "Cable distance is not valid"
        });
      }
      junction.uplinkInternetCableDistance = uplinkInternetCableDistance;
    }

    if (uplinkElectricCableTypeId !== undefined) {
      if (uplinkElectricCableTypeId === "" || !validateObjectId(uplinkElectricCableTypeId)) {
        throw Object.assign(new Error(), {
          status: 400,
          message: "Invalid electric cable type"
        });
      }
      const uplinkCableType = await CableType.findOne({
        _id: uplinkElectricCableTypeId
      }).exec();
      if (!uplinkCableType) {
        throw Object.assign(new Error(), {
          status: 404,
          message: "Uplink electric cable type is not found"
        });
      }
      junction.uplinkElectricCableTypeId = uplinkElectricCableTypeId;
    }

    if (uplinkElectricCableDistance !== undefined) {
      if (
        uplinkElectricCableDistance === "" ||
        isNaN(uplinkElectricCableDistance) &&
        uplinkElectricCableDistance < 0
      ) {
        throw Object.assign(new Error(), {
          status: 400,
          message: "Cable distance is not valid"
        });
      }
      junction.uplinkElectricCableDistance = uplinkElectricCableDistance;
    }

    if (uninstallationDate !== undefined) {
      if (!isValidDate(uninstallationDate)) {
        throw Object.assign(new Error(), {
          status: 400,
          message: "Date is not valid"
        });
      }
      junction.uninstallationDate = uninstallationDate;
    }

    if (note !== undefined) {
      junction.note = note;
    }

    // save the junction
    const updatedJunction = await junction.save();
    successResponseHandler(
      ctx,
      updatedJunction,
      "Junction has been updated successfully"
    );
  } catch (error) {
    console.log(`updatejunction error: `, error);
    errorResponseHandler(ctx, error);
  }
};

const deleteJunction = async (ctx) => {
  try {
    const id = ctx.params;
    const junction = await Junction.findOne({ _id: id}).exec();
    if (!junction.address) {
      throw Object.assign(new Error(), {
        status: 404,
        message: "Junction not found"
      });
    }
    const deletedCableType = await junction.remove();
    successResponseHandler(
      ctx,
      deletedCableType,
      "Junction has been deleted successfully"
    );
  } catch (error) {
    errorResponseHandler(ctx, error);
  }
};

module.exports = {
  getAllJunctions,
  addJunction,
  getJunction,
  updateJunction,
  deleteJunction
  // updateJunctionType,
  // updateNote,
  // updateUninstallDate,
  // updateElectricSource,
  // updateUplinkJunction,
  // updateJunctionAddress,
  // updateJunctionStatus
};
