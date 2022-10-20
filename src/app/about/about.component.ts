import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }


navigateToHome(){
  this.route.navigate(['/Home'], {relativeTo: this.activatedRouter})
}

}
