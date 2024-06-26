import {createAction, props} from '@ngrx/store';
import {UsersErrors} from './users.reducer';
import {User} from "../types/user.model";

export const initUsers = createAction('[Users Page] Init');

export const loadUsersSuccess = createAction('[Users/API] Load Users Success', props<{ users: User[] }>());

export const loadUsersFailure = createAction('[Users/API] Load Users Failure', props<{ error: any }>());

export const deleteUser = createAction('[Users Page] Delete User', props<{ id: number }>());

export const deleteUserSuccess = createAction('[Users/Api] Delete User Success', props<{ id: number }>());

export const deleteUserFailed = createAction('[Users/Api] Delete User Failed', props<{ error: any }>());

export const addUser = createAction('[Users Page] Add User', props<{ userData: User }>());

export const addUserSuccess = createAction('[Users/Api] Add User Success', props<{ userData: User }>());

export const addUserFailed = createAction('[Users/Api] Add User Failed', props<{ error: any }>());

export const editUser = createAction('[Users Detail] Edit User', props<{ userData: User }>());

export const editUserSuccess = createAction('[Users Detail] Edit User Success', props<{ userData: User }>());

export const editUserFailed = createAction('[Users Detail] Edit Failed', props<{ error: UsersErrors | null }>());
