import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.css']
})
export class LazyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
