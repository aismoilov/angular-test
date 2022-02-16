import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './modules/main/main.component';
import { OperatorComponent } from './modules/operator/operator.component';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { InfoSnackbarComponent } from './components/info-snackbar/info-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OperatorComponent,
    InfoSnackbarComponent,
  ],
  entryComponents: [
    InfoSnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutes,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    TextMaskModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
