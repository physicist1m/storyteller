import { USERS_LOADED } from './types';

const usersLoaded = (newUsers ) => {
    return {
        type: USERS_LOADED,
        payload: newUsers
    };
};

export {usersLoaded};