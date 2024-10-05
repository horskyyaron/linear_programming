describe("Healthcheck", () => {
  it("should pass a basic health check", () => {
    expect(true).toBe(true);
  });

  it("should not pass a basic health check", () => {
    expect(false).toBe(false);
  });
});
