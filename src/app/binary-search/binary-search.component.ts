import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binary-search',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './binary-search.component.html',
  styleUrl: './binary-search.component.scss'
})
export class BinarySearchComponent {
  inputBindings: any
  targetBindings: any
  result: any

  getValue() {
    this.result = undefined
    let nums = JSON.parse(this.inputBindings)
    let target = +this.targetBindings

    let mid = Math.floor(nums.length / 2)

    if (nums[mid] == target) {
      this.result = mid
      return
    } else {
      for (let i = 0; i <= mid; i++) {
        if (target < nums[mid]) {
          if (nums[i] == target || nums[i] > target) {
            this.result = i
            return
          }
        } else {
          if (nums[mid+i] == target || nums[mid+i] > target) {
            this.result = mid+i
            return
          }
        }
      }
      this.result == undefined ? this.result = nums.length:''
    }
  }
}
