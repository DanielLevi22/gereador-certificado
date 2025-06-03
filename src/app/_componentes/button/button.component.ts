import { Component, Input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'danger' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() customClass = '';

  get buttonClasses(): string {
    const baseClasses = 'rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-90 disabled:opacity-50';
    const sizeClasses = {
      sm: 'py-2 px-3 text-sm',
      md: 'py-3 px-4 text-base',
      lg: 'py-4 px-6 text-lg'
    };
    const variantClasses = {
      primary: 'bg-gradient-to-r from-[#1A2856] to-[#334EA9] text-white focus:ring-[#1A2856]',
      secondary: 'bg-blue-dark  text-grayscale-gray-100  focus:ring-gray-500',
      outline: 'border-2 border-[#1A2856] text-[#1A2856] hover:bg-[#1A2856] hover:text-white focus:ring-[#1A2856]',
      text: 'text-[#1A2856] hover:bg-gray-100 focus:ring-[#1A2856]',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
    };
    const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    return `${baseClasses} ${sizeClasses[this.size]} ${variantClasses[this.variant]} ${disabledClass} ${this.customClass}`;
  }
}
