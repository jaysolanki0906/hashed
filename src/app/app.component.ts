import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,SettingsWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  currentFragment: string | null = null;
  public settings = inject(SettingsService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(f => {
      this.currentFragment = f;
    });
  }
}
