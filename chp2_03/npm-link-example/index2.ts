//const obj=require('get-subtract-test');
import * as obj from 'get-subtract-test';
import {Observable} from 'rxjs';
console.log(obj. getSubtract(10,5));

const observable = new Observable((subscriber:any) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
}); 
console.log('just before subscribe');
observable.subscribe({
  next(x:any) { console.log('got value ' + x); },
  error(err:any) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');

