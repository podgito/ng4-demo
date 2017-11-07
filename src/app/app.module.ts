import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { HomeComponent } from './home/home.component';
import {TestDataService} from './test-data.service';
import { DataPointFilterPipe } from './pipes/data-point-filter.pipe';
import { LinksComponent } from './components/links/links.component';
import { DeploymentComponent } from './components/deployment/deployment.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { ComponentDemoComponent } from './components/component-demo/component-demo.component';
import { GreetingComponent } from './components/greeting/greeting.component';

const appRoutes: Routes = [
  { path: 'binding', component: BindingComponent },
  { path: 'components', component: ComponentDemoComponent },
  { path: 'links', component: LinksComponent },
  { path: 'deployment', component: DeploymentComponent },
  { path: '', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    HomeComponent,
    DataPointFilterPipe,
    LinksComponent,
    DeploymentComponent,
    ObservablesComponent,
    ComponentDemoComponent,
    GreetingComponent
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

