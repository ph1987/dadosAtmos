import { Component, OnInit } from '@angular/core';
import { Versions } from '../classes/versions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  Versions: Versions;
  version: String = "";

  constructor() {

    this.Versions = new Versions();
    this.version = this.Versions.version;

   }

  ngOnInit(): void {

  }

}
