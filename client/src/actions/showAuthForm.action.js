export const SHOW_AUTH_FORM = "SHOW_AUTH_FORM";

export const showAuthForm = isShow => {
    return {
        type: SHOW_AUTH_FORM,
        isShow,
    };
};
