import { Component } from '@angular/core';
import { SettingsService } from '../settings.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-settings-wrapper',
  imports:[RouterOutlet],
  templateUrl: './settings-wrapper.component.html'
})
export class SettingsWrapperComponent {
  constructor(public settingsService: SettingsService) {}
}
