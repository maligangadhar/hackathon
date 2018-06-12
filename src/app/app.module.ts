import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {RevenueReportServiceService} from './revenue-report-service.service';
import { DaterangepickerModule } from 'angular-2-daterangepicker';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    Ng2GoogleChartsModule,
    AppRoutingModule,
    DaterangepickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUTIztGCedmuwUqEGteV947FUf3dCOdRM'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [RevenueReportServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
