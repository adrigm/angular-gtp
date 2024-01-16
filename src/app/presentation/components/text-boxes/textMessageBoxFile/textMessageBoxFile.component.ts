import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface TextMessageEvent {
  prompt?: string | null;
  file: File;
}

@Component({
  selector: 'app-text-message-box-file',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './textMessageBoxFile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxFileComponent {
  @Input()
  public placeholder: string = "";

  @Output()
  onMessageSent = new EventEmitter<TextMessageEvent>();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: [],
    file: [null, Validators.required]
  });

  public file: File | undefined;

  handeleSelectedFile(event: any) {
    const file = event.target.files.item(0);
    this.form.controls.file.setValue(file);
    console.log(file);
  }

  handleSubmit() {
    if (this.form.invalid) return;

    const { prompt, file } = this.form.value;

    this.onMessageSent.emit({ prompt, file: file! });
    this.form.reset();
  }
}
