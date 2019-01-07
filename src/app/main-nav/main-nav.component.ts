import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  theme = "my-theme-1";
  isDashboardNested:boolean = false;
  isMediaNested:boolean = false;
  isFriendsNested:boolean = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private overlayContainer:OverlayContainer
    ) { }
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

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

  ChangeSidebarNestedStatus(dashBoardType:string){
    this.isDashboardNested = (dashBoardType === 'dashboard') ? !this.isDashboardNested : this.isDashboardNested;
    this.isMediaNested = (dashBoardType === 'media') ? !this.isMediaNested : this.isMediaNested;
    this.isFriendsNested = (dashBoardType === 'friends') ? !this.isFriendsNested : this.isFriendsNested;
  }

}
