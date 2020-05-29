export const constants = {
    auth: "AUTH",
    reg: "REG",
    monthName: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    errorMessage: [
        "Fill all fields please",
        "Passwords don't match",
        "Log in please",
        "Success",
        "No correct login or password",
        "No correct data",
    ],
    ACTIVE_MODAL: "modal active",
    ACTIVE_MODAL_OVERLAY: "modal-overlay active",
    HIDE_MODAL: "modal",
    HIDE_MODAL_OVERLAY: "modal-overlay",
    TABLET_WIDTH: 700,
    DEVICE_SIZE: {
        mobile: "(max-width: 400px)",
        tablet: "(max-width: 1000px)",
        desktop: "(min-width: 1000px)",
    },
    FILTER: {
        increaseMin: "increase-min",
        increaseMax: "increase-max",
        decreaseMax: "decrease-max",
        decreaseMin: "decrease-min",
    }
};

export const ROOMS_COLLECTION = new Map([
    [1, "../img/roomsCatalog/1.jpg"],
    [2, "../img/roomsCatalog/2.jpg"],
    [3, "../img/roomsCatalog/3.jpg"],
    [4, "../img/roomsCatalog/4.jpg"],
    [5, "../img/roomsCatalog/5.jpg"],
    [6, "../img/roomsCatalog/6.jpg"],
    [7, "../img/roomsCatalog/7.jpg"],
    [8, "../img/roomsCatalog/8.jpg"],
    [9, "../img/roomsCatalog/9.jpg"],
    [10, "../img/roomsCatalog/10.jpg"],
]);

export const ROOMS_SERVISEC = new Map([
    ["classic", 3],
    ["comfort", 5],
    ["prestige", 7],
]);
