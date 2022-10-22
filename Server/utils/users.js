const e = require("express");

const users = [];
//Add User
const addUser = ({ id, name, room, gender }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  //Check if already exist
  const existingUser = users.find((user) => {
    if (user.room === room && user.name === name) {
      return true;
    } else {
      return false;
    }
  });

  if (existingUser) {
    return { error: "Username is taken" };
  } else {
    if (users.length === 4) {
      return { error: "The room is full!" };
    } else {
      const avatar = GetRandomAvatar(users, gender);
      const user = { id, name, room, gender, avatar };
      //User Added without condition Checking !!
      users.push(user);
      return { user };
    }
  }
};

//Remove User
const removeUser = (id) => {
  //Finding The User Index
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    //fix User Not Removed after disconnected!
    return users.splice(index, 1)[0];
  }
};

//Get User
const getUser = (id) => users.find((user) => user.id === id);
//Get All Users
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

//I ve created a folder of random 8 avatars and i named them from M1 to F4 M=>Male, F=>Femal and randomly chosed one for each user.
const GetRandomAvatar = (arr, gender) => {
  const UserPosition = arr.length;

  if (UserPosition) {
    if (arr[arr.length - 1].gender === "male") {
      const MalAvatars = ["M1", "M2", "M3", "M4"];
      return MalAvatars[UserPosition % MalAvatars.length];
    } else {
      const FemalAvatars = ["F1", "F2", "F3", "F4"];
      return FemalAvatars[UserPosition % FemalAvatars.length];
    }
  } else {
    if (gender === "male") {
      return "M1";
    } else {
      return "F1";
    }
  }
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
