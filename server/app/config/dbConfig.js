const dbConfig = {
    connectUrl: "mongodb+srv://marchenkus:kiskis1245@cluster0-hgndq.mongodb.net/test?retryWrites=true&w=majority",
    connectionOptions: {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
};

module.exports = dbConfig;
