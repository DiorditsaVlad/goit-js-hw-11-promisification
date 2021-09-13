const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  

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

  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);