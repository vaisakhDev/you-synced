import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lyr-find';
  audioSrc : SafeUrl;
  audioFile: File;
  public youtubeVideoUrl: string;

  constructor(private domSanitizer: DomSanitizer ){}

  public readSelectedFiles(event: any) {  
    this.audioFile = event.target.files[0];
    this.audioSrc = 
     this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.audioFile));
  }

  public readYtUrl(e : any) {
    this.youtubeVideoUrl = e.target.value;
    console.log((e.target.value));
  }
}
