import  app from "./app.js";
import connect from "./database/connection.js";
app.listen(app.get("port"), () => {
  connect();
  console.log(`Server is listening at http://localhost:${app.get("port")}`);
});
