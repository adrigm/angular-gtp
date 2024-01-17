import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-g-pt-message-ort',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './gPtMessageOrt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GPtMessageOrtComponent {
  @Input({ required: true }) public text!: string;
  @Input({ required: true }) public userScore!: number;
  @Input() public errors: string[] = [];
}
