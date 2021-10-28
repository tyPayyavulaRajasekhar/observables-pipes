import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { tap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  observable = new Observable<number>(observer => {
    let i = 0;
    setInterval(() => {
      observer.next(i);
      i++;
    }, 1000);
  }).pipe(tap(data => {
    // console.log('in tap operator', data);
    return data;
  }), filter(data => {
    return data % 2 === 0;
  }), map(data => {
    return data + 100;
  }), map(data => {
    return data * 10;
  }));

  subject = new Subject<any>();

}
