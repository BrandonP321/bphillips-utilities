import { UrlHelper } from "./UrlHelper";

export class URLUtils {
  /**
   * Create a new UrlHelper instance from a URL string.
   * Allows for easy manipulation of the URL.
   */
  static url = (url = window.location.href) => new UrlHelper(url);

  /**
   * Convert a URLSearchParams object to a plain object.
   */
  static convertSearchParamsToObject = <T extends string>(
    searchParams: URLSearchParams
  ) => {
    const obj: Record<string, string> = {};

    searchParams.forEach((value, key) => {
      obj[key] = decodeURIComponent(value);
    });

    return obj as Record<T, string | null>;
  };

  /** Update the path of the current URL. */
  static updatePath = (path: string) => {
    return this.url().setPath(path).href;
  };

  /** Remove the trailing slash from a URL. */
  static removeTrailingSlash = (url: string) => {
    return url.endsWith("/") ? url.slice(0, -1) : url;
  };
}
