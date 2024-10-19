const STORAGE_KEY = 'radiocomunicacao_app_data';

interface AppData {
  users: any[];
  equipment: any[];
  // Adicione mais campos conforme necessário
}

export const getStoredData = (): AppData => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : { users: [], equipment: [] };
};

export const setStoredData = (data: AppData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const addUser = (user: any) => {
  const data = getStoredData();
  data.users.push(user);
  setStoredData(data);
};

export const addEquipment = (equipment: any) => {
  const data = getStoredData();
  data.equipment.push(equipment);
  setStoredData(data);
};

export const getUsers = () => {
  return getStoredData().users;
};

export const getEquipment = () => {
  return getStoredData().equipment;
};