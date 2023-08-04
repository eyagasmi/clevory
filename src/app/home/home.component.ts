import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  firstname='eya'
  lastname='gasmi'
  website='youtube'

 x=5
 y=100

 array=["dsi","sem","rsi"]
 number=1
 inc(){
  this.number ++

 }
 des(){
  this.number --

 }

}
