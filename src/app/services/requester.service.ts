import { Injectable } from '@angular/core';
import { MobileOperator } from '../typings';
import { FillForm, MockFillType } from '../typings';

@Injectable({
  providedIn: 'root'
})

export class RequesterService {

  public getOperator(id: number = -1): MobileOperator | null {
    const operator = operators.find(item => item.id === id);
    return operator ? operator : null;
  }

  public getAllOperators(): MobileOperator[] {
    return operators;
  }

  public fill(data: FillForm): Promise<MockFillType> {
    console.log(data);
    // return this.http.post('/random', data, {});
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          resolve({status: 200, success: true, data: {sent: data, message: 'Payment is successful'}});
        } else {
          reject({status: 500, success: false, data: {sent: data, message: 'Payment is failed'}});
        }
      }, 2000);
    });
  }
}

const operators = [
  {
    name: 'Beeline',
    logo: '/assets/images/beeline.svg',
    id: 1,
    codes: [900, 902, 903, 904, 905, 906, 908, 909, 950, 951, 953, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 980, 983, 986]
  },
  {
    name: 'MTS',
    logo: '/assets/images/mts.svg',
    id: 2,
    codes: [902, 904, 908, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 950, 978, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989]
  },
  {
    name: 'Megafon',
    logo: '/assets/images/megafon.svg',
    id: 3,
    codes: [902, 904, 908, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 936, 937, 938, 939, 950, 999]
  },
  // {
  //   name: 'Tele2',
  //   logo: '/assets/images/tele2.svg',
  //   id: 4,
  // },
  // {
  //   name: 'Yota',
  //   logo: '/assets/images/yota.svg',
  //   id: 5,
  // },
  // {
  //   name: '',
  //   id: 6,
  // },
  // {
  //   name: '',
  //   id: 7,
  // },
  // {
  //   name: '',
  //   id: 8,
  // },
  // {
  //   name: '',
  //   id: 9,
  // }
];
