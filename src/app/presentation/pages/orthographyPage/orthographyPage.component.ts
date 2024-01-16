import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxEvent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {

  public options = [
    { id: "1", text: "Option 1" },
    { id: "2", text: "Option 2" },
    { id: "3", text: "Option 3" },
    { id: "4", text: "Option 4" },
  ];

  handleMessageWithText(prompt: string) {
    console.log(prompt);
  }

  handleMessageWithFile({ prompt, file }: TextMessageEvent) {
    console.log({ prompt, file });
  }

  handleMessageWithSelect({ prompt, selectedOption }: TextMessageBoxEvent) {
    console.log({ prompt, selectedOption });
  }
}
