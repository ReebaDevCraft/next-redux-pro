import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
users:[]
}
const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const data ={
                id:nanoid(),
                name:action.payload.name,
            }
            state.users.push(data);
            }
        }
        
    });
export const {addUser} = userSlice.actions
export default userSlice.reducer;
