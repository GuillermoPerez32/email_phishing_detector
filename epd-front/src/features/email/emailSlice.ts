  import { PayloadAction, createSlice } from '@reduxjs/toolkit'

  // Define a type for the slice state
  interface EmailsState {
    emailId: string
  }

  // Define the initial state using that type
  const initialState: EmailsState = {
    emailId: '',
  }

  export const emailsSlice = createSlice({
    name: 'emails',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      setEmail: (state, action: PayloadAction<string>) => {
        state.emailId = action.payload;
      },
    },
  })

  export const { setEmail } = emailsSlice.actions

  export default emailsSlice.reducer