import { join } from "path";
import { getAppPath } from "common/helpers/app";

let absoluteAppPath = join(getAppPath(), "src");
let absoluteMainDistPath = join(getAppPath(), "dist", "main");

/*
 * Resources are files shipped with the app, that are static
 * and don't usually change, unless updated.
 */

function getPath(resourcePath: string) {
  return absoluteAppPath + "/" + resourcePath;
}

export function getImagePath(path: string): string {
  const resourcePath = "static/images/" + path;
  return getPath(resourcePath);
}

export function getLocalePath(path: string): string {
  const resourcePath = "static/locales/" + path;
  return getPath(resourcePath);
}

export function getLocalesConfigPath(): string {
  let resourcePath = "static/locales.json";
  return getPath(resourcePath);
}

type InjectName = "itchio" | "game" | "captcha";

export function getInjectPath(name: InjectName) {
  return join(absoluteMainDistPath, `inject-${name}.bundle.js`);
}

export function getInjectURL(name: InjectName) {
  return `file://${getInjectPath(name)}`;
}
