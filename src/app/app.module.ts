import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FlexLayoutModule } from '@angular/flex-layout';



import { AppComponent } from './app.component';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'vertical',
  slidesPerView: 1,
  observer: true,
  // threshold: 50,
  spaceBetween: 0,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    FlexLayoutModule
    // MDBBootstrapModule.forRoot()
  ],
  exports: [
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent],
  // schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
