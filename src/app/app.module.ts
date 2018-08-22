import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StaffPage } from '../pages/staff/staff';
import { LoginPage } from '../pages/login/login';
import { ProjectPage } from '../pages/project/project';
import { BirthdayPage } from '../pages/birthday/birthday';
import { PersonalPage } from '../pages/personal/personal';
import { StaffItemComponent } from '../components/staff-item/staff-item';
import { ProjectItemComponent } from '../components/project-item/project-item';
import { BackButtonProvider } from '../providers/back-button/back-button';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    StaffPage,
    ProjectPage,
    BirthdayPage,
    PersonalPage,
    StaffItemComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    StaffPage,
    ProjectPage,
    BirthdayPage,
    PersonalPage,
    StaffItemComponent,
    ProjectItemComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackButtonProvider
  ]
})
export class AppModule {}
