import { createSlice } from '@reduxjs/toolkit'

interface Email {
  file: string
}

// Define a type for the slice state
interface EmailsState {
  list: Array<Email>
}

// Define the initial state using that type
const initialState: EmailsState = {
  list: [],
}

export const emailsSlice = createSlice({
  name: 'emails',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },
})

// export const { increment, decrement, incrementByAmount } = emailsSlice.actions

export default emailsSlice.reducer