import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'vm',
  imports: [],
  templateUrl: './validationmessages.component.html',
  styleUrl: './validationmessages.component.css'
})
export class ValidationmessagesComponent {

  @Input() control!: AbstractControl|null;
}
