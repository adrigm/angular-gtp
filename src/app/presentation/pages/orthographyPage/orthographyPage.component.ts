import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxEvent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';
import { Message } from '@interfaces/index';
import { OpenAIService } from '../../services/openai.service';

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

  public openAIService = inject(OpenAIService);

  public messages = signal<Message[]>([
    { text: 'Hola Mundo', isGpt: true },
    { text: 'Hola Mundo', isGpt: false},
    { text: 'Hola Mundo', isGpt: false},
    { text: 'Hola Mundo', isGpt: true },
  ]);
  public isLoading = signal<boolean>(false);

  public options = [
    { id: "1", text: "Option 1" },
    { id: "2", text: "Option 2" },
    { id: "3", text: "Option 3" },
    { id: "4", text: "Option 4" },
  ];

  handleMessageWithText(prompt: string) {
    this.isLoading.set(true);
  }
}
