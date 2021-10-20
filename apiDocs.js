const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "OpenWorldApi Docs",
      version: "1.0.0",
      description:
        "This provides a simplified documentation for using the open world api in any of your project. It also make it easy to test",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "OpenWorldApi",
        url: "openworldapi.tech/api-docs",
        email: "samson@luxstek.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5200",
      },
      {
        url: "https://openworldapi.tech",
      },
    ],
  },
  apis: [
    "./routes/districts.js",
    "./routes/countries.js",
    "./routes/states.js",
  ],
};

module.exports = { options };