import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';
import { MainComponent } from './modules/main/main.component';
import { APP_BASE_HREF } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { OperatorComponent } from './modules/operator/operator.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoSnackbarComponent } from './components/info-snackbar/info-snackbar.component';
import { TextMaskModule } from 'angular2-text-mask';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
        OperatorComponent,
        InfoSnackbarComponent,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(
          appRoutes,
          {enableTracing: true} // <-- debugging purposes only
        ),
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
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
