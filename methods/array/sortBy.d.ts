import { XEUtilsMethods } from '../xe-utils'

/**
 * 数组按属性值升序
 * @param array 数组
 * @param iteratee 回调/属性
 * @param context 上下文
 */
export declare function sortBy(array: Array<any>, iteratee: Array<any> | Function | string, context?: any): Array<any>;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 数组按属性值升序
     * @param array 数组
     * @param iteratee 回调/属性
     * @param context 上下文
     */
    sortBy(array: Array<any>, iteratee: Array<any> | Function | string, context?: any): Array<any>;
  }
}

export default sortBy