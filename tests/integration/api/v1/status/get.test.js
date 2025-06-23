test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const resposeBody = await response.json();

  const parsedUpdatedAt = new Date(resposeBody.updated_at).toISOString();
  expect(resposeBody.updated_at).toEqual(parsedUpdatedAt);

  expect(resposeBody.dependencies.database.version).toEqual("16.9");
  expect(resposeBody.dependencies.database.max_connections).toEqual(901);
  expect(resposeBody.dependencies.database.opened_connections).toEqual(1);
});
