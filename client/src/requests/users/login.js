import * as $ from "jquery";
import cookie from "react-cookies";

export default function loginRequest(data) {
    const url = "http://localhost:3000/user/login";
    let result;

    $.ajax({
        type: "POST",
        url,
        dataType: "json",
        data: {
            login: data.loginRef,
            password: data.passwordRef
        },
        success: response => {
            result = response;

            if (response.message) {
                const expires = new Date();
                expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
                cookie.remove("jwtToken");

                cookie.save(
                    "jwtToken",
                    response.jwt,
                    { expires }
                );
            }
        }
    });

    return result;
}
