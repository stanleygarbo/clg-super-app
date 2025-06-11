const express = require("express");
const connectDB = require("./config/db.js");
const bodyParser = require("body-parser");
const passport = require("passport");
require("./config/passport")(passport);

// Routes
const studentRoutes = require("./routes/studentRoutes.js");
const scheduleRoutes = require("./routes/scheduleRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const positionRoutes = require("./routes/positionRoutes.js");
const departmentRoutes = require("./routes/departmentRoutes.js");
const employeeRoutes = require("./routes/employeeRoutes.js");
const programRoutes = require("./routes/programRoutes.js");
const courseRoutes = require("./routes/courseRoutes.js");
const roomRoutes = require("./routes/roomRoutes.js");
const sectionRoutes = require("./routes/sectionRoutes.js");
const gradeRoutes = require("./routes/gradeRoutes.js");
const seatRoutes = require("./routes/seatRoutes.js");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerSchemas = require("./utils/swaggerSchemas.js");

const { User } = require("./models/userModel");
const bcrypt = require("bcrypt");
const cors = require("cors");

// const { Seat } = require("./models/seatModel.js");
// const { Grade } = require("./models/gradeModel.js");

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
app.use("/api/students", studentRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/grades", gradeRoutes);
app.use("/api/seats", seatRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(port, () => {
  console.log("App listening on port: ", port);
  // console.log("Seat model:", Seat);
});
