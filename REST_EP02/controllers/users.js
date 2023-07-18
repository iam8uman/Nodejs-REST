import { v4 as uuidv4 } from "uuid";

// first consider empty database
let users = [];

export const getUsers=(req, res) => {
    res.send(users);
    console.log(users);
  }


export const  createNewUser = (req, res) => {
    const userID = uuidv4();
    const newUser = req.body;
    const userWithId = { ...newUser, id: userID }; // create new object & adding id
  
    users.push(userWithId);
    res.send(
      `Post method triggered || form bata data aayo hai so display thi with user ${newUser.fname}`
    );
  };

  export const getUserbyId=(req, res) => {
    const { id } = req.params;
    const findUser = users.find((user) => user.id === id);
    res.send(findUser);
  }

  export const deleteById=(req, res) => {
    const idToDelete = req.params.idd;
    users = users.filter((user) => user.id !== idToDelete); // filter function le jaba false return garxa taba item delete hunxa
    res.send(users);
  }

  export const updateById=(req, res) => {
    const idToUpdate = req.params.idd;
  
    // now find that user details with that id
  
    const userToUpdate = users.find((user) => user.id === idToUpdate);
  
    const { fname, lname } = req.body;
  
    if (fname) userToUpdate.fname = fname;
  
    if (lname) userToUpdate.lname = lname;
  
    // res.send("User Update ")
    res.send(users);
  }