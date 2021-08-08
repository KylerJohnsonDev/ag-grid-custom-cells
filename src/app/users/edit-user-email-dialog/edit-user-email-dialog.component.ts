import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user-email-dialog',
  templateUrl: './edit-user-email-dialog.component.html',
  styleUrls: ['./edit-user-email-dialog.component.scss']
})
export class EditUserEmailDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditUserEmailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  declarations: [EditUserEmailDialogComponent],
  exports: [EditUserEmailDialogComponent]
})
export class EditUserEmailDialogModule {}
