export const CHANGE_USER = "CHANGE_USER";

export const changeUser = (user, jwt) => {
    return {
        type: CHANGE_USER,
        user,
        jwt
    };
};
