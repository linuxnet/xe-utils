import { XEUtilsMethods } from '../xe-utils'

/**
 * 与 zip 相反
 * @param arrays 数组
 */
export declare function unzip(arrays: Array<any>): Array<any>;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 与 zip 相反
     * @param arrays 数组
     */
    unzip(arrays: Array<any>): Array<any>;
  }
}

export default unzip