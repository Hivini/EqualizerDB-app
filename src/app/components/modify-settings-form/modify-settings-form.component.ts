import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface RegisterElement {
  registerField: string;
  registerValue: string;
  position: number;
}

export interface RegisterData {
  registerField: string;
  registerValue: string;
}
@Component({
  selector: 'app-modify-settings-form',
  templateUrl: './modify-settings-form.component.html',
  styleUrls: ['./modify-settings-form.component.css']
})
export class ModifySettingsFormComponent implements OnInit {
  displayedColumns: string[] = ['select', 'registerField', 'registerValue'];
  dataSource;
  selection = new SelectionModel<RegisterElement>(true, []);
  registerFieldValue: string;
  registerValueVal: string;
  newRegisterField = '';
  newRegisterValue = '';
  form: FormGroup;

  constructor(private http: HttpClient, public dialog: MatDialog, private fb: FormBuilder) {
    this.form = this.fb.group({
      registerField: ['', Validators.required],
      registerValue: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.populateTableData();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    console.log('IS ALL SELETECD');
    const saveSelected = this.selection.selected;
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return false;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  /*
  masterToggle() {
    console.log('MASTER TOGGLE');
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }*/

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: RegisterElement): string {
    if (this.selection.isSelected(row)) {
      this.selection.clear();
      this.selection.select(row);
      this.newRegisterField = row.registerField;
      this.newRegisterValue = row.registerValue;
    }
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position}`;
  }

  openAddSettingDialog(): void {
    const dialogRef = this.dialog.open(AddSettingsDialog, {
      width: '600px',
      data: {registerField: this.registerFieldValue, registerValue: this.registerValueVal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result.registerField !== undefined) {
        const body  = {registerField: result.registerField, registerValue: result.registerValue.substring(2), sOwner: localStorage.getItem('user_wwid')};
        this.http.post('http://localhost:3000/settings/createSetting', body)
          .subscribe(data => {
            console.log(data);
            this.populateTableData();
          });
      }
    });
  }

  deselectAllOthers(selection, row): null {
    this.selection.clear();
    console.log('Calling deselect');
    this.selection.toggle(row);

    return null;
  }

  updateSelected() {
    console.log(this.form.value.registerValue);
    const body = {registerField: this.selection.selected[0].registerField, newRegisterField: this.form.value.registerField,
      newRegisterValue: this.form.value.registerValue.substring(2), sOwner: localStorage.getItem('user_wwid')};
    this.http.put('http://localhost:3000/settings/updateFields', body)
      .subscribe(data => {
        console.log(data);
        this.populateTableData();
      });
  }

  populateTableData() {
    this.http.post('http://localhost:3000/settings/getSettingsByOwner', {sowner: localStorage.getItem('user_wwid')})
      .subscribe(data => {
        console.log(data);
        const dataFormatted: RegisterElement[] = [];
        let position = 1;
        // @ts-ignore
        for (const set of data.rows) {
          console.log(set);
          let registerVal = '0x' + (+set[1].data[0]).toString(16);
          if (set[1].data.length > 1) {
            registerVal += (+set[1].data[1]).toString(16);
          }
          dataFormatted.push({ registerField: set[0], registerValue: registerVal, position});
          position++;
        }
        this.dataSource = new MatTableDataSource<RegisterElement>(dataFormatted);
      });
  }
}

@Component({
  selector: 'app-add-settings-dialog',
  templateUrl: 'add-settings-dialog.html',
})
export class AddSettingsDialog {

  constructor(
    public dialogRef: MatDialogRef<AddSettingsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: RegisterData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
