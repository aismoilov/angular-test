import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequesterService } from '../../services/requester.service';
import { MobileOperator } from '../../typings';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { noLess, noMore, validOperatorCode } from '../../validators'
import { MatSnackBar } from '@angular/material';
import { InfoSnackbarComponent } from '../../components/info-snackbar/info-snackbar.component';


@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent {
  operator: MobileOperator;
  fillForm: FormGroup;
  public phoneMask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  public amountMask = [/[1-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(private router: Router,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar,
              private requester: RequesterService,
              private fb: FormBuilder) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.operator = requester.getOperator(id);
    if (!this.operator) {
      this.showSnackbar('Оператор не найден', 5000);
      this.router.navigate(['/']);
      return;
    }
    this.createForm();
  }

  createForm() {
    this.fillForm = this.fb.group({
      phone: ['', [
        Validators.required,
        validOperatorCode(this.operator.codes),
        Validators.pattern(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm),
      ]],
      amount: ['', [
        Validators.required,
        noLess(1),
        noMore(1000)
      ]]
    });
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.requester.fill(this.fillForm.value)
      .then((res) => {
        const message = `${res.data.message}: ${res.data.sent.amount}₽ for ${res.data.sent.phone}.
          You will be redirected to main page in 5 seconds`;
        this.showSnackbar(message, 5000);
        this.resetForm(formDirective);
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 5000);
      })
      .catch((err) => {
        const errorMessage = `${err.data.message}: ${err.data.sent.amount}₽ for ${err.data.sent.phone}. Try again later.`;
        this.showSnackbar(errorMessage, 1000);
      });
  }

  showSnackbar(text, duration) {
    this.snackBar.openFromComponent(InfoSnackbarComponent, {
      duration,
      data: text
    });
  }

  resetForm(formDirective: FormGroupDirective) {
    this.fillForm.reset();
    formDirective.resetForm();
    this.fillForm.updateValueAndValidity();
  }
}
