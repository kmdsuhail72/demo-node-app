const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline Working Successfully 🚀");
});

describe("GET /", () => {
  it("should return status 200", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toEqual(200);
  });
});
