import { Injectable, EnvironmentInjector, ApplicationRef, createComponent, WritableSignal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  public isOpen: WritableSignal<boolean> = signal(false);
  private container: HTMLElement | null = null;

  constructor(private router: Router, private injector: EnvironmentInjector, private appRef: ApplicationRef) {}

  open(fragment: string = 'settings/account') {
    // this.router.navigate([], { fragment });
    // this.render(fragment);
    this.router.navigate([{ outlets: { settings: ['settings', 'profile'] } }])
  }
  openPopup() {
    this.isOpen.set(true);
  }

  closePopup() {
    this.isOpen.set(false);
  }

  togglePopup() {
    this.isOpen.update(v => !v);
  }

  close() {
    this.router.navigate([], { fragment: undefined });
    if (this.container) this.container.innerHTML = '';
  }
  public renderInOutlet(fragment: string | null) {
  this.render(fragment);
}


  private render(fragment: string | null) {
    if (!fragment) return;

    // Mount popup only once
    if (!this.container) {
      this.container = document.createElement('div');
      document.body.appendChild(this.container);
    }

    this.container.innerHTML = '';

    let componentType: any = null;
    if (fragment === 'settings/account') componentType = AccountComponent;
    if (fragment === 'settings/profile') componentType = ProfileComponent;

    if (componentType) {
      const compRef = createComponent(componentType, { environmentInjector: this.injector });
      this.appRef.attachView(compRef.hostView);
      this.container.appendChild(compRef.location.nativeElement);
    }
  }
}
