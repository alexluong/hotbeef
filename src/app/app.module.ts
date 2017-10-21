import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { ChooseStarterPage } from '../pages/choose-starter/choose-starter';
import { SwipePage } from '../pages/swipe/swipe';
import { ProgressPage } from '../pages/progress/progress';

// Components
import { NavbarLogoComponent } from '../components/navbar-logo/navbar-logo';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

@NgModule({
  declarations: [
    // Pages
    MyApp,
    HomePage,
    CreateAccountPage,
    ChooseStarterPage,
    SwipePage,
    ProgressPage,
    // Components
    NavbarLogoComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateAccountPage,
    ChooseStarterPage,
    SwipePage,
    ProgressPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
