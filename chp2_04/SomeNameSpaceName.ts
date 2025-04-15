//commonjs方法
namespace SomeNameSpaceName { 
    export interface ISomeInterfaceName {name:string}  
    export class SomeClassName {name:string="Classname"}  
}

// 传统 CommonJS 写法（Node.js）， js文件时使用
//module.exports = SomeNameSpaceName; 

// CommonJS的TypeScript 等效写法，相当于exports.SomeNameSpaceName=SomeNameSpaceName或exports.module={SomeNameSpaceName}，ts文件使用. 只能import  * as  导入
export = SomeNameSpaceName;  