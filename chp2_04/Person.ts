interface Person { 
    firstName:string, 
    lastName:string, 
    allName ?: string,  // ?代表着改属性在继承时可有可无
    sayHi: ()=>string 
}

// 继承接口的对象必须要拥有接口中的所有必须数据，不然会报错
const customer:Person = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
}
console.log(customer.sayHi())
