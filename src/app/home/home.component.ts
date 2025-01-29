import { Component, OnInit } from '@angular/core';
import { Events } from '../../../models/events.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../../service/events.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventsService) { }

  upComingEvents$!: Observable<Events[]>
  qty: string = '1'
  selectOptions: number[] = [1, 2, 3, 4];

  ngOnInit(): void {
    this.upComingEvents$ = this.eventService.getupComingEvents()
  }

  getQty(qty: Event) {
    const target = qty.target as HTMLSelectElement;
    this.qty = target.value
  }
}
