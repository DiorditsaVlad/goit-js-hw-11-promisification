const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
//   const toggleUserState = (allUsers, userName, callback) => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );
  
//     callback(updatedUsers);
//   };
  
  
//   /*
//    * Сейчас работает так
//    */
//   toggleUserState(users, 'Mango', logger);
//   toggleUserState(users, 'Lux', logger);
  

  const toggleUserState = (allUsers, userName) => {
    const returnToggleUserActive =  allUsers.map(user => user);

    return new Promise((resolve, reject) =>{
        const toggleActive =  allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user);
        resolve (toggleActive);        
        reject('error')
    })

};

const logger = updatedUsers => console.table(updatedUsers);
  /*
   * Должно работать так
   */
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);