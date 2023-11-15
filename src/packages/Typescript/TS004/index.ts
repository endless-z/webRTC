interface IRes {
  code: number;
  status: string;
  data: any;
}

// 字面量与联合类型
interface Res {
  code: 10001 | 10002 | 10003;
  status: 'success' | 'failure';
  data: any;
}

declare var res: Res;

if (res.status === 'success') {
}

const num: 99 = 99;

const str1: 'linbudu' = 'linbudu';

interface Tmp {
  user:
    | {
        vip: true;
        expires: string;
      }
    | {
        vip: false;
        promotion: string;
      };
}

declare var tmp: Tmp;

if (tmp.user.vip) {
  console.log(tmp.user.expires);
}

// 枚举
export default {
  Home_Page_Url: 'url1',
  Setting_Page_Url: 'url2',
  Share_Page_Url: 'url3',
};

// 或是这样：
export const PageUrl = {
  Home_Page_Url: 'url1',
  Setting_Page_Url: 'url2',
  Share_Page_Url: 'url3',
};

enum Items {
  Foo,
  Bar,
  Baz,
}

// 0 1 2

const returnNum = () => 100 + 499;

enum ItemsEnum {
  Foo = returnNum(),
  Bar = 599,
  Baz,
}

const name = 'ningtiao';

const temp: String = '2';

/**
 * 字面量类型
 * 字面量类型主要包括字符串字面量类型、数字字面量类型、布尔字面量类型和对象字面量类型，它们可以直接作为类型标注：
 */

const str: 'linbudu' = 'linbudu';
const count: 599 = 599;
const bool: true = true;

interface Tmp {
  bool: true | false;
  num: 1 | 2 | 3;
  str: 'lin' | 'bu' | 'du';
}

interface Tmp2 {
  mixed: true | string | 599 | {} | (() => {}) | (1 | 2);
}

// 枚举
export enum StatusEnum {
  'SUCCESS' = 'SUCCESS',
  'ERROR' = 'ERROR',
}
