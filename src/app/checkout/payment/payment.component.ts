import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  savedCards = [
    { type: 'VISA', last4: '1234', name: 'User Name', expiry: '01/26' }
  ];

  selectedCard: any;
  showAddCardForm = false;
  newCard = { number: '', name: '', expiry: '', cvv: '' };

  toggleAddCard() {
    this.showAddCardForm = !this.showAddCardForm;
    this.newCard = { number: '', name: '', expiry: '', cvv: '' };
  }

  saveCard() {
    if (this.validateCard(this.newCard)) {
      const last4 = this.newCard.number.slice(-4);
      this.savedCards.push({ 
        type: this.getCardType(this.newCard.number), 
        last4, 
        name: this.newCard.name, 
        expiry: this.newCard.expiry 
      });
      this.toggleAddCard();
    } else {
      alert('Invalid card details');
    }
  }

  deleteCard(index: number) {
    this.savedCards.splice(index, 1);
  }

  validateCard(card: any) {
    return card.number.length >= 12 && card.expiry.length === 5 && card.cvv.length === 3;
  }

  getCardType(cardNumber: string) {
    return cardNumber.startsWith('4') ? 'VISA' : 'MasterCard';
  }

}


