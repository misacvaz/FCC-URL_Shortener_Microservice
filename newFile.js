const { app, port } = require(".");

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
