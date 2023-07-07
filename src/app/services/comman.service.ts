import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommanService {
  public isShow: Boolean = false;
  // public notificationSubject = new Subject();
  public notificationSubject = new BehaviorSubject<string>('iam yagnik pandav');
  constructor(private http: HttpClient) { }

  sendNotification(data: any) {
    console.log(data);
    this.notificationSubject.next(data);
  }

  getProduceData(): Observable<any> {
  return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}