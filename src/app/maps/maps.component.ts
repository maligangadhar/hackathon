import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: [ './maps.component.css' ]
})
export class MapsComponent  implements OnInit{
    url: SafeResourceUrl;
    ngOnInit(): void {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:4400/');
    }
  // google maps zoom level
  zoom: number = 8;
  constructor(private sanitizer : DomSanitizer) {}
  lat: number = 51.673858;
  lng: number = 7.815982;

}

