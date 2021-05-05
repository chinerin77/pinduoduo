import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class Notificationrceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return next.handle(req).pipe(tap((event:HttpEvent<any>)=>{
            if(event instanceof HttpResponse &&
                event.status >=200 &&
                event.status <300){
                    console.log("[此处假装弹出消息] 请求成功！");
                }
        }));
    }
}