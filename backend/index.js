import app from "./src/app.js"
import connectDb from "./src/db/index.js";

connectDb()
    .then((res) => {

        const port = process.env.PORT;

        app
            .listen(port, () => {
                console.log("Server connected successfuly on Port", port);
            })
    })
    .catch((err) => { "Database is not connected successfuly" });