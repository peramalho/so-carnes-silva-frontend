import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './components/Sidebar/sidebarSlice';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
