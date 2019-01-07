import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatSelectModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatMenuModule} from '@angular/material/menu';
import { BodyComponent } from './body/body.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserGithubInfoComponent } from './user-github-info/user-github-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    MainNavComponent,
    UserGithubInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
