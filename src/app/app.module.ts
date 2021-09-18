import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CenterColumnContainerComponent } from './containers/center-column-container/center-column-container.component';
import { RightColumnContainerComponent } from './containers/right-column-container/right-column-container.component';
import { TweetsListComponent } from './components/tweets-list/tweets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    TextBoxComponent,
    SideBarComponent,
    CenterColumnContainerComponent,
    RightColumnContainerComponent,
    TweetsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
