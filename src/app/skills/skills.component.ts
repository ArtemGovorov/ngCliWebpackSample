import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { HelperQuery } from '@gtypes/helperquery.query';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  @Input() juniorSkills: HelperQuery.JuniorSkillsResult | null = null;
  @Input() midLevelSkills: HelperQuery.MidLevelSkillsResult | null = null;
  @Input() seniorSkills: HelperQuery.SeniorSkillsResult | null = null;
  constructor() {}

  ngOnInit() {}
}
