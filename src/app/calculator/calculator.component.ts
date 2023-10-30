import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  selectedCalculator: string = 'simple-interest';
  calculatorOptions = [
    { value: 'simple-interest', label: 'Simple Interest' },
    { value: 'loan', label: 'Loan Calculator' },
    { value: 'savings', label: 'Savings Calculator' },
  ];

 // selectedCalculator: string = 'simple-interest'; // Default selection
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  simpleInterestResult: number | null = null;


  // Loan Calculator fields
  loanAmount: number = 0;
  loanInterestRate: number = 0;
  loanTerm: number = 0;
  loanAmountResult: number | null = null;


  // Savings Calculator fields
  salary: number = 0;
  expenditure: number = 0;
  savings: number = 0;
  yearlySavingsResult: number | null = null;


  calculateSimpleInterest() {
    
    
    this.simpleInterestResult = (this.principal * this.rate * this.time) / 100;
  }

  calculateLoan() {
    const monthlyInterestRate = this.loanInterestRate / 12 / 100;
    const numberOfPayments = this.loanTerm * 12;
    this.loanAmountResult = (this.loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  }

  calculateSavings() {
    this.yearlySavingsResult = this.salary - this.expenditure - this.savings;
  }
}
