import { URLUtils } from ".";

describe("URLUtils", () => {
  beforeAll(() => {
    // Mock the global window object
    global.window = Object.create({});
    global.window.location = {
      href: "http://localhost",
    } as any;
  });

  it("should create a new UrlHelper instance", () => {
    const url = URLUtils.url("https://example.com");

    expect(url).toBeDefined();
  });

  it("should update search params", () => {
    const url = URLUtils.url("https://example.com");

    url.updateSearchParams({ key: "value" });

    expect(url.getSearchParam("key")).toBe("value");
  });

  it("should convert search params to object", () => {
    const searchParams = new URLSearchParams("key=value");
    const obj = URLUtils.convertSearchParamsToObject(searchParams);

    expect(obj).toEqual({ key: "value" });
  });

  it("should update path", () => {
    const path = URLUtils.updatePath("/new-path");

    expect(path).toBe("http://localhost/new-path");
  });

  it("should remove trailing slash", () => {
    const url = URLUtils.removeTrailingSlash("https://example.com/");

    expect(url).toBe("https://example.com");
  });
});
