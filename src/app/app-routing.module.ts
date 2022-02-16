import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './modules/main/main.component';
import { OperatorComponent } from './modules/operator/operator.component';

export const appRoutes: Routes = [
    { path: '', component: MainComponent, pathMatch: 'full' },
    { path: 'operator/:id', component: OperatorComponent },
    { path: '**', redirectTo: '/' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
        ),
    ],
    exports: [RouterModule]
})

export class AppRoutes {};