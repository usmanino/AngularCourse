import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNofication">
            <p>This website uses cookies to provide better user experience.</p>
            <div class="close"> <button class="btn" (click)="closeNotification()">X</button></div>
            </div>`,
  styles: ["div{ margin: 10px 0px; padding: 10px 20px; text-align: center;}", "p{font-size: 14px;}" , ".close{float: right; margin-top: -55px;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayNofication:boolean = false;

  closeNotification(){
    this.displayNofication = true;

  }

}
