let users = [];

export const addUser = (user) => {
    users.push(user);
};

export const getUsers = () => users;


export const findUser = (username, password) => {
    return users.find(
        (u) => u.username === username && u.password === password
    );
};
