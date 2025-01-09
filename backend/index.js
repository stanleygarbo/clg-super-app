const express = require("express");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js");
const positionRoutes = require("./routes/positionRoutes.js");
const departmentRoutes = require("./routes/departmentRoutes.js");
const employeeRoutes = require("./routes/employeeRoutes.js");
const bodyParser = require("body-parser");
const passport = require("passport");
require("./config/passport")(passport);

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerSchemas = require("./utils/swaggerSchemas.js");

const { User } = require("./models/userModel");
const bcrypt = require("bcrypt");
const cors = require("cors");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "REST API for ACLC Super App",
    version: "1.0.0",
  },
  components: {
    schemas: { ...swaggerSchemas },
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();
app.use(cors());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const jsonParser = bodyParser.json();
const port = process.env.PORT || 3000;

connectDB();
app.use(passport.initialize());
app.use(jsonParser);
app.use("/api/auth", authRoutes);
app.use("/api/positions", positionRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/employees", employeeRoutes);
app.get("/api/s", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("password", salt);

  const admin = new User({
    firstName: "Super",
    surname: "Admin",
    roles: ["super"],
    username: "admin",
    password: hashedPassword,
  });
  await admin.save();
  res.status(200).json(admin);
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(port, () => {
  console.log("App listening on port: ", port);
});
