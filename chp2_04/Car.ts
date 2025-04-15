class Car { 
   // 字段
   engine:string;    
   constructor(engine:string) {// 构造函数
      this.engine = engine 
   }     
   // 方法
   disp():void { 
      console.log("函数中显示发动机型号  :   "+this.engine) 
   } 
}  
var obj = new Car("V8")  // 创建一个对象，在js中函数也是对象
console.log("读取发动机型号 :  "+obj.engine) // 访问字段
obj.disp() // 访问方法
