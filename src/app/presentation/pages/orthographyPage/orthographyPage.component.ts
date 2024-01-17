import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent, GPtMessageOrtComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxEvent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';
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
    TextMessageBoxSelectComponent,
    GPtMessageOrtComponent
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {

  public openAIService = inject(OpenAIService);

  public messages = signal<Message[]>([
  ]);
  public isLoading = signal<boolean>(false);

  handleMessageWithText(prompt: string) {
    this.isLoading.set(true);

    this.messages.update((messages) => [
      ...messages,
      {
        isGpt: false,
        text: prompt,
      }
    ])

    this.openAIService.checkOrthography(prompt).subscribe((resp) => {
      this.isLoading.set(false);
      this.messages.update((messages) => [
        ...messages,
        {
          isGpt: true,
          text: resp.message,
          info: resp
        }
      ]);
    });
  }
}
