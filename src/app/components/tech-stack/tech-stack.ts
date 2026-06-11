import { Component } from '@angular/core'
import { TECHNOLOGIES } from '../../data'

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  templateUrl: './tech-stack.html',
})
export class TechStackComponent {
  readonly technologies = TECHNOLOGIES
  readonly orbitRadius = 140
}
