import { Injectable } from '@angular/core';
import { Events } from '../models/events.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: Events[] = [
    {
      id: 1,
      name: 'Harvest Festival',
      date: '2023-4-043',
      description: 'This is the first festival of the year',
      quantity: 0,
      location: 'East Legon',
      image_url: 'https://imgs.search.brave.com/66zO-8wb4sTU1B5NUNQqrCuc-59PTMjP0QmdW0W1_vM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/NTI4OTAxMy9waG90/by9jb25mZXR0aS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/dmtUQXJTZUtrT1hS/U0FPMEhJN0lFUmFR/OHhjNnVvZWVrci1K/MGZFQ1dQVT0',
      cost: 50
    },
    {
      id: 2,
      name: 'Return of Festival',
      date: '2023-4-043',
      description: 'This is the first festival of the year',
      quantity: 0,
      location: 'Enclave Gardens',
      image_url: 'https://imgs.search.brave.com/iebY6O70S8t0SBRushtutJ10jOmWqI09cAXR0YP-7qg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzExLzYzLzMz/LzM2MF9GXzEwMTE2/MzMzMThfQUZFYUZa/dlVkRGQzc0E3aW5E/WVdpT1NZaHlhd2dC/ZWguanBn',
      cost: 50
    },
    {
      id: 3,
      name: 'Chango Festival',
      date: '2023-4-043',
      description: 'This is the first festival of the year',
      quantity: 0,
      location: 'Aqua Safari',
      image_url: 'https://imgs.search.brave.com/I4zuhp2ceUjxBLO_I_a7S1xxdPeAEmNaj1RkGRKbJvk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjY0/NzY3NTg0L3Bob3Rv/L2NlbGVicmF0aW5n/LXRoZWlyLWFtYXpp/bmctc3VjY2Vzcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UUNSMDBYQ0VyT1NF/cUFHNG4wbHhtRkFT/QWxrYzhKc091czB6/UzFKdXBvWT0',
      cost: 50
    },
    {
      id: 4,
      name: 'Beyound the return',
      date: '2023-4-043',
      description: 'This is the first festival of the year',
      quantity: 0,
      location: 'Marriot Hotel',
      image_url: 'https://imgs.search.brave.com/ERZ7x1QQXghxR3PVYZZlJVTFI_QnyH54OkPCyURNZXw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aW1l/Lmx5L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA2L1N1c3Rh/aW5hYmlsaXR5LWF0/LUV2ZW50cy0yMDI0/LVByYWN0aWNhbC1H/dWlkZS02MDB4NDAw/LmpwZw',
      cost: 50
    }
  ]
  constructor() { }

  getupComingEvents() {
    return of(this.events);
  }
}
