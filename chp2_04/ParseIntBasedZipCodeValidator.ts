export class ParseIntBasedZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 6 && parseInt(s).toString() === s;
  }
}
// ͬʱ������ǰ��
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";
