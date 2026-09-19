const request = require("supertest");
const app = require("./app");

test("GET / should return Demo App", async () => {
  const response = await request(app).get("/");

  expect(response.statusCode).toBe(200);
  expect(response.text).toContain("Demo App");
});