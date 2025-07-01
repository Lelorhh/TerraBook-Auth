import { User } from '../types';

export const getUsers = (): User[] => {
  return JSON.parse(localStorage.getItem('terraUsers') || '[]');
};

export const saveUsers = (users: User[]): void => {
  localStorage.setItem('terraUsers', JSON.stringify(users));
};

export const getCurrentUser = (): User | null => {
  const userStr = sessionStorage.getItem('terraLoggedInUser');
  return userStr ? JSON.parse(userStr) : null;
};

export const saveCurrentUser = (user: User): void => {
  sessionStorage.setItem('terraLoggedInUser', JSON.stringify(user));
};

export const removeCurrentUser = (): void => {
  sessionStorage.removeItem('terraLoggedInUser');
};

export const registerUser = (name: string, email: string, password: string): User | null => {
  const users = getUsers();
  
  // Check if email exists
  if (users.some(user => user.email === email)) {
    return null;
  }

  const newUser = { name, email, password };
  users.push(newUser);
  saveUsers(users);
  saveCurrentUser(newUser);
  return newUser;
};

export const loginUser = (email: string, password: string): User | null => {
  const users = getUsers();
  const foundUser = users.find(user => user.email === email && user.password === password);
  
  if (foundUser) {
    saveCurrentUser(foundUser);
    return foundUser;
  }
  
  return null;
};

export const logoutUser = (): void => {
  removeCurrentUser();
};
