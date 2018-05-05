import { Component } from '@angular/core';
import {AvailabilityDay} from '@gtypes/availabilityday.type';
import {HelperQuery} from '@gtypes/helperquery.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  foo: AvailabilityDay;
  bar: HelperQuery.JuniorSkillsResult | null = null;
}
