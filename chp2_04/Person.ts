interface Person { 
    firstName:string, 
    lastName:string, 
    allName ?: string,  // ?�����Ÿ������ڼ̳�ʱ���п���
    sayHi: ()=>string 
}

// �̳нӿڵĶ������Ҫӵ�нӿ��е����б������ݣ���Ȼ�ᱨ��
const customer:Person = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
}
console.log(customer.sayHi())
