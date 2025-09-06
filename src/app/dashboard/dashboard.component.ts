import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  fragment: string | null = null;

  constructor(
    private route: ActivatedRoute,
    public settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe(f => {
      this.fragment = f;
      // when fragment changes, inject correct component into settings outlet
      this.settingsService.renderInOutlet(this.fragment);
    });
  }
}
