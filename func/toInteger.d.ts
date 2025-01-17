/**
 * 转整数
 * @param num 数值/字符串
 */
export declare function toInteger(num: string | number): number;
export declare function toInteger(num: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    toInteger: typeof toInteger;
  }
}

export default toInteger
