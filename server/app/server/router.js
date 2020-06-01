const express = require("express");

const UserController = require("./controllers/userController");
const RoomController = require("./controllers/roomController");
const TokenController = require("./controllers/tokenController");
const CommentController = require("./controllers/commentController");

class Router {
    constructor(app) {
        this.app = app;
        this.user = new UserController();
        this.room = new RoomController();
        this.token = new TokenController();
        this.comment = new CommentController();

        this.userRouter = express.Router();
        this.roomRouter = express.Router();
        this.commentRouter = express.Router();
    }

    connect() {
        this.userRequests();
        this.commentRequests();
        this.roomRequests();
        this.app.use("/user", this.userRouter);
        this.app.use("/room", this.roomRouter);
        this.app.use("/comment", this.commentRouter);
        this.tokenRequests();
    }

    roomRequests() {
        this.roomRouter.get("/", this.room.getAll.bind(this.room));
        this.roomRouter.get("/:id", this.room.getSpecifyRoom.bind(this.room));
        this.roomRouter.post("/", this.room.addRoom.bind(this.room));
        this.roomRouter.post("/get-estimation", this.room.getEstimation.bind(this.room));
        this.roomRouter.post("/add-estimation", this.room.addEstimations.bind(this.room));
        this.roomRouter.post("/book-room", this.room.bookRoom.bind(this.room));
        this.roomRouter.post("/booked-date", this.room.getBookedRooms.bind(this.room));
    }

    commentRequests() {
        this.commentRouter.post("/all-comments", this.comment.getComments.bind(this.comment));
        this.commentRouter.post("/save-comment", this.comment.saveComments.bind(this.comment));
    }

    // cardRequests() {
    //     this.cardRouter.get("/", this.card.getAll.bind(this.card));
    //     this.cardRouter.get("/:name", this.card.getSpecifyCard.bind(this.card));
    //     this.cardRouter.post("/", this.card.addCard.bind(this.card));
    //     this.cardRouter.delete("/remove/:name", this.card.deleteCardByName.bind(this.card));
    //     this.cardRouter.delete("/removeAll/:name", this.card.deleteAllCards.bind(this.card));
    //     this.cardRouter.put("/refresh/:name", this.card.updateCard.bind(this.card));
    // }

    userRequests() {
        this.userRouter.get("/", this.user.getAll.bind(this.user));
        this.userRouter.post("/get-user", this.user.findUser.bind(this.user));
        this.userRouter.post("/registration", this.user.addUser.bind(this.user));
        this.userRouter.post("/login", this.user.checkUser.bind(this.user));
    }

    tokenRequests() {
        this.app.get("/getTokens/:name", this.token.ceateToken.bind(this.token));
    }
}

module.exports = Router;
