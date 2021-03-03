import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MyprojectSharedModule } from 'app/shared/shared.module';
import { MyprojectCoreModule } from 'app/core/core.module';
import { MyprojectAppRoutingModule } from './app-routing.module';
import { MyprojectHomeModule } from './home/home.module';
import { MyprojectEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MyprojectSharedModule,
    MyprojectCoreModule,
    MyprojectHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MyprojectEntityModule,
    MyprojectAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class MyprojectAppModule {}
