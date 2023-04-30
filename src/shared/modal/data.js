export let permissionsData = [
  { name: 'permission11', toggle: true },
  { name: 'permission12', toggle: true },
  { name: 'permission13', toggle: false },
  { name: 'permission14', toggle: true },
  { name: 'permission15', toggle: true },
  { name: 'superAdmin', toggle: false },
  { name: 'group1', toggle: false },
  { name: 'group2', toggle: false },
  { name: 'group3', toggle: false },
];

export let data = [
  {
    name: 'Danniel Blichman',
    email: 'danniel.blichman@testtask.com',
    role: 'Admin',
    status: true,
    id: 1,
    permissions: permissionsData,
  },

  {
    name: 'Margarette Jones',
    email: 'margarette.jones@testtask.com',
    role: 'User',
    status: true,
    id: 2,
    permissions: permissionsData,
  },
  {
    name: 'Bethany Doe',
    email: 'bethany.doe@testtask.com',
    role: 'User',
    status: true,
    id: 3,
    permissions: permissionsData,
  },
  {
    name: 'Samuel Jackson',
    email: 'samuel.jackson@testtask.com',
    role: 'User',
    status: true,
    id: 4,
    permissions: permissionsData,
  },
  {
    name: 'Persival Blinn',
    email: 'persival.blinn@testtask.com',
    role: 'Admin',
    status: false,
    id: 5,
    permissions: permissionsData,
  },
];
