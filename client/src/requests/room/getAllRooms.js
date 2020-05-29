import * as $ from "jquery";

export default function getAllRooms() {
    const url = "http://localhost:3000/room/";

    return $.ajax({
        type: "GET",
        url,
        dataType: "json",
        success: response => {
            return response;
        }
    });
}
