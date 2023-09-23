import mongoose from "mongoose";

// Schema banaune kam ho yo!
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

// we need model to perfom CRUD operation on schema we define earlier
export const userModel = mongoose.model("user", userSchema);

export const getUser = () => userModel.find();
export const getUserByEmail = (email: String) => {
  userModel.findOne({ email });
};
export const getUserBySessionToken = (sessionToken: String) => {
  userModel.findOne({
    "authentication.sessionToken": sessionToken,
  });
};
export const getUserById = (id: String) => {
  userModel.findById(id);
};

export const createUser = (values: Record<string, any>) =>
  new userModel(values).save().then((user) => {
    user.toObject();
  });

export const deleteUserById = (id: String) =>
  userModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: String, values: Record<string, any>) =>
  userModel.findOneAndUpdate(id,values);
