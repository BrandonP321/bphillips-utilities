import { wait } from ".";

describe("wait", () => {
  it("should wait for the given time", async () => {
    const start = Date.now();
    await wait(1000);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });
});
