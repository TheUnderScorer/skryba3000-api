module.exports = {
    db: {
        host:    process.env.DB_HOST,
        options: {
            dbName: process.env.DB_NAME
        }
    },
};
