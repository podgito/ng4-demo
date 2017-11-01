import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { HomeComponent } from './home/home.component';
import {TestDataService} from './test-data.service';
import { DataPointFilterPipe } from './pipes/data-point-filter.pipe';

const appRoutes: Routes = [
  { path: 'binding', component: BindingComponent },
  { path: '', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    HomeComponent,
    DataPointFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [TestDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

