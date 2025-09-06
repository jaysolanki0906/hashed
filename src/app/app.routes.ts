import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path:'settings',
    outlet:'settings',
    component:SettingsWrapperComponent,
    children:[{
        path:"account",
        component:AccountComponent,
    },
    {
        path:"profile",
        component:ProfileComponent
    }
]
  }
];
