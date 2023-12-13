import { createSlice } from '@reduxjs/toolkit'

export const breadCrumb = createSlice({
  name: 'breadCrumb',
  initialState: {
    previousName: "",
    currentName: "",
  },
  reducers: {
    pageName: (state,action) => {
        // console.log(action.payload);
        state.previousName = state.currentName;
        state.currentName = action.payload;
},
    
  },
})

export const {pageName } = breadCrumb.actions

export default breadCrumb.reducer

  //                 npm run dev
