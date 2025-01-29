import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
@Input() cost: number = 0
@Input() quantity: number = 0
@Input() orderFee: number = 0;
@Input() processingFee: number = 0
totalAmount: number = 0;

constructor(private router: Router) {}

ngOnInit(): void {
 
}

confirmPurchase(): void {
  Swal.fire({
    title: 'Thank You!',
    text: 'Thank you for purchasing this ticket!',
    icon: 'success',
    confirmButtonText: 'OK'
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigate(['/']); 
    }
  });
}
cancelPurchase(): void {
  Swal.fire({
    title: 'Cancelled!',
    text: 'Your Ticket purchase has been cancelled!',
    icon: 'error',
    confirmButtonText: 'OK'
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigate(['/']); 
    }
  });
}

}
