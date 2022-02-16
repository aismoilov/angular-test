import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from '../../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { InfoSnackbarComponent } from '../../components/info-snackbar/info-snackbar.component';
import { OperatorComponent } from '../operator/operator.component';
import { AppComponent } from '../../app.component';
import { APP_BASE_HREF } from '@angular/common';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

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
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
