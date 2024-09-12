export type SearchParams<K extends string = string> = Record<K, string>;

export class UrlHelper<K extends string = string> {
  public url: URL;
  private removeOrigin = false;

  constructor(url: string) {
    this.url = new URL(url);
  }

  get pathname() {
    return this.url.pathname;
  }
  set pathname(path: string) {
    this.url.pathname = path;
  }

  get searchParams() {
    return this.url.searchParams;
  }
  set searchParams(params: URLSearchParams) {
    this.url.search = params.toString();
  }

  get hash() {
    return this.url.hash;
  }
  set hash(hash: string) {
    this.url.hash = hash;
  }

  get hostname() {
    return this.url.hostname;
  }
  set hostname(hostname: string) {
    this.url.hostname = hostname;
  }

  get port() {
    return this.url.port;
  }
  set port(port: string) {
    this.url.port = port;
  }

  get protocol() {
    return this.url.protocol;
  }
  set protocol(protocol: string) {
    this.url.protocol = protocol;
  }

  get href() {
    if (this.removeOrigin) {
      return this.pathname + this.url.search + this.url.hash;
    } else {
      return this.url.href;
    }
  }

  setPath(path: string) {
    this.pathname = path;

    return this;
  }

  withoutHash() {
    this.url.hash = "";

    return this;
  }

  withoutSearch() {
    this.url.search = "";

    return this;
  }

  withoutOrigin() {
    this.removeOrigin = true;

    return this;
  }

  updateSearchParams(params: SearchParams<K>) {
    const entries = Object.entries(params) as [string, string][];
    entries.forEach(([key, value]) => {
      this.url.searchParams.set(key, encodeURIComponent(value));
    });

    return this;
  }

  getSearchParam(key: string) {
    const value = this.searchParams.get(key);

    return value && decodeURIComponent(value);
  }
}
