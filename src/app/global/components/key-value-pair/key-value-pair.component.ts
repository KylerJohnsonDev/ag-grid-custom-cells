import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-key-value-pair',
  templateUrl: './key-value-pair.component.html',
  styleUrls: ['./key-value-pair.component.scss']
})
export class KeyValuePairComponent {

  @Input() key!: string;

  value!: string;
  @Input('value')
  set valuePassedIn(value: string | null) {
    this.value = value ? value : 'N/A'
  }

}

@NgModule({
  declarations: [KeyValuePairComponent],
  exports: [KeyValuePairComponent]
})
export class KeyValuePairModule {}
