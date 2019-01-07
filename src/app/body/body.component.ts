import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit {
  title = 'angular-material-theming-and-fxlayout-example';
  constructor (
    private overlayContainer: OverlayContainer
  ){}
  theme = '';
    ngOnInit(): void {
      if(localStorage.getItem('Theme')){
        this.theme = localStorage.getItem('Theme');
      }else{
        this.theme = "my-theme-1";
        localStorage.setItem('Theme', this.theme);
      }
      this.overlayContainer.getContainerElement().classList.add(this.theme);
    }
    onThemeChange(theme:string) {
      this.theme = theme;
      localStorage.setItem('Theme', this.theme);
      //console.log(theme);
      const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
      const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
      if (themeClassesToRemove.length) {
         overlayContainerClasses.remove(...themeClassesToRemove);
      }
      overlayContainerClasses.add(theme);
    }
}
