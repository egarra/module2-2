import { useSelector } from 'react-redux';
export const isLoggined = state => state.auth.isLoggined;
export const getRefreshing = state => state.auth.isRefreshing;
export const user = state => state.auth.user;
