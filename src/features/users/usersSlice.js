import { createSlice } from "@reduxjs/toolkit";

  
export const fetchUsers=[{
    "id" : 1,
    "name" :"Rishikesh bhosale",
    "email" :"Asra Solapur",
    "state" :"MH",
    "cattel" : 10,
    "age" : 35
},
{
  "id" : 2,
  "name" :"Rishikesh bhosale",
  "email" :"Asra Solapur",
  "state" :"MH",
  "cattel" : 10,
  "age" : 35
}
]

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    userAdded(state, action) {
      state.entities.push(action.payload);
    },
    userUpdated(state, action) {
      const { id, name, email,cattel,age } = action.payload;
      const existingUser = state.entities.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        existingUser.cattel=cattel;
        existingUser.age=age;
      }
    },
    userDeleted(state, action) {
      const { id } = action.payload;
      const existingUser = state.entities.find((user) => user.id === id);
      if (existingUser) {
        state.entities = state.entities.filter((user) => user.id !== id);
      }
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions;

export default usersSlice.reducer;
