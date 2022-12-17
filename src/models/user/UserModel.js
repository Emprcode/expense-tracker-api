import UserSchema from "./UserSchema.js";
// CRUD
// create

export const createUser = (newUserObj) => {
  return UserSchema(newUserObj).save();
};

// read filter can be anything
export const getUserById = (filter) => {
  return UserSchema.find(filter);
};
//update
export const getUserAndUpdate = (filter, updateObj) => {
  return UserSchema.findOneAndUpdate(filter, updateObj);
};
//delete

export const deleteUserById = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
