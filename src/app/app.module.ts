import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InteractiveComponent } from './interactive/interactive.component';
import { FlowerStoreComponent } from './flower-store/flower-store.component';
import { FlowerBundleComponent } from './flower-bundle/flower-bundle.component';
import { FlowerComponent } from './flower/flower.component';
import { FlowerBundlesListComponent } from './flower-bundles-list/flower-bundles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InteractiveComponent,
    FlowerStoreComponent,
    FlowerBundleComponent,
    FlowerComponent,
    FlowerBundlesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
