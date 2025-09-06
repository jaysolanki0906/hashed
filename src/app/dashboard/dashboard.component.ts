import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent  {

  fragment: string | null = null;

  constructor(
    private route: ActivatedRoute,
    public settingsService: SettingsService
  ) {}

  close() {
    this.settingsService.close();
    this.settingsService.closePopup();
  }
  openpopup()
  {
    this.settingsService.openPopup();
  }
}
