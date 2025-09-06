import { Injectable, EnvironmentInjector, ApplicationRef, createComponent } from '@angular/core';
import { Router } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private outletHost?: HTMLElement;

  constructor(
    private router: Router,
    private injector: EnvironmentInjector,
    private appRef: ApplicationRef
  ) {}

  open(fragment: string = 'settings') {
    this.router.navigate([], { fragment });
  }

  close() {
    this.router.navigate([], { fragment: undefined });
    if (this.outletHost) {
      this.outletHost.innerHTML = '';
    }
  }

  renderInOutlet(fragment: string | null) {
    this.outletHost = document.querySelector('router-outlet[name="settings"]') as HTMLElement;
    if (!this.outletHost) return;

    this.outletHost.innerHTML = ''; // clear previous content

    if (!fragment) return;

    let componentType: any = null;

    if (fragment === 'settings') {
      componentType = SettingsWrapperComponent;
    } else if (fragment === 'settings/account') {
      componentType = AccountComponent;
    } else if (fragment === 'settings/profile') {
      componentType = ProfileComponent;
    }

    if (componentType) {
      const compRef = createComponent(componentType, {
        environmentInjector: this.injector
      });
      this.appRef.attachView(compRef.hostView);
      this.outletHost.appendChild((compRef.location.nativeElement));
    }
  }
}
