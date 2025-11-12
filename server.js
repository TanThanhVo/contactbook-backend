const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
  const uri = process.env.MONGO_URI || config?.db?.uri;

  if (!uri) {
    console.error('Cannot connect to the database! Missing MONGO_URI or config.db.uri');
    process.exit(1);
  }
  
  try {
    await MongoDB.connect(uri);
    console.log("Connected to the database!");

    const PORT = config?.app?.port || process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Cannot connect to the database!", error);
    process.exit(1);
  }
}

startServer();