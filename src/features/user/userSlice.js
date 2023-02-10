import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    lastName: ''
}

export const userSlace = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        }
    }
})

export const { setFirstName, setLastName } = userSlace.actions
export default userSlace.reducer

