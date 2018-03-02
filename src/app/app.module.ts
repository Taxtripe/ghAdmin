import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AuthguardGuard } from './authguard.guard';

import { UserService } from './user.service';
import { Data } from './services/data';

import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';


import { AppRoutingModule } from './app.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
//const appRoutes: Routes = [
//    {
//        path: 'Home',
//        canActivate: [AuthguardGuard],
//        component: LayoutComponent,
//        data: {
//            title: 'Home'
//        },
//            children: [
//      {
//        path: 'dashboard',
//        loadChildren: './dashboard/dashboard.module#DashboardModule'
//      }
//    ]
//    },
//    {
//        path: '',
//        component: LoginComponent
//    }
//];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
      LayoutComponent,
      NAV_DROPDOWN_DIRECTIVES,
      SIDEBAR_TOGGLE_DIRECTIVES,
      BreadcrumbsComponent
  ],
  imports: [
//      RouterModule.forRoot(appRoutes),
      AppRoutingModule,
    BrowserModule,
      FormsModule,
      HttpModule,
      HttpClientModule,
      NgbModule.forRoot(),
      TabsModule.forRoot()
  ],
  providers: [UserService, AuthguardGuard, Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
