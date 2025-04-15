export class ParseIntBasedZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 6 && parseInt(s).toString() === s;
  }
}
// 同时导出先前的
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";
