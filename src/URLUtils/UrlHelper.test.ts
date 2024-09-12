import { UrlHelper } from "./UrlHelper";

describe("UrlHelper", () => {
  it("should set the pathname", () => {
    const url = new UrlHelper("http://example.com");
    url.setPath("/foo");
    expect(url.pathname).toBe("/foo");
  });

  it("should set the search params", () => {
    const url = new UrlHelper("http://example.com");
    url.updateSearchParams({ foo: "bar" });
    expect(url.searchParams.get("foo")).toBe("bar");
  });

  it("should get a search param after setting it", () => {
    const url = new UrlHelper("http://example.com?foo=bar");
    expect(url.getSearchParam("foo")).toBe("bar");
  });

  it("should set the hash", () => {
    const url = new UrlHelper("http://example.com");
    url.hash = "#foo";
    expect(url.hash).toBe("#foo");
  });

  it("should set the hostname", () => {
    const url = new UrlHelper("http://example.com");
    url.hostname = "example.org";
    expect(url.hostname).toBe("example.org");
  });

  it("should set the port", () => {
    const url = new UrlHelper("http://example.com");
    url.port = "8080";
    expect(url.port).toBe("8080");
  });

  it("should remove the hash", () => {
    const url = new UrlHelper("http://example.com#foo");
    url.withoutHash();
    expect(url.hash).toBe("");
  });

  it("should remove the origin from the href", () => {
    const url = new UrlHelper("http://example.com");
    url.withoutOrigin();
    expect(url.href).toBe("/");
  });

  it("should remove the search params", () => {
    const url = new UrlHelper("http://example.com?foo=bar");
    url.withoutSearch();
    expect(url.searchParams.toString()).toBe("");
  });
});
