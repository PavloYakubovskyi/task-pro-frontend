import { createSlice } from '@reduxjs/toolkit';

import { getProjectData } from './operation';

const handlePending = state => {
  state.isLoadingProject = true;
};
const handleRejected = (state, action) => {
  state.isLoadingProject = false;
  state.errorProject = action.payload;
};
const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projectName: 'Project office',
    isLoadingProject: false,
    errorProject: null,
    filtersPriority: ['without'],
  },
  reducers: {
    togglePriority: (state, { payload }) => {
      console.log({ payload });
      if (state.filtersPriority.includes(payload)) {
        const foundItemIndex = state.filtersPriority.indexOf(payload);
        console.log({ foundItemIndex });
        state.filtersPriority.splice(foundItemIndex, 1);
        // find index
      } else {
        state.filtersPriority = [...state.filtersPriority, payload];
      }
    },
    showAll: (state, _) => {
      state.filtersPriority = ['without', 'low', 'medium', 'high'];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProjectData.pending, handlePending)
      .addCase(getProjectData.fulfilled, (state, action) => {
        state.isLoadingProject = false;
        state.errorProject = null;
      })
      .addCase(getProjectData.rejected, handleRejected);
  },
});
export const { togglePriority, showAll } = projectSlice.actions;

export const projectReducer = projectSlice.reducer;
