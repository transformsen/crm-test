import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MemberResultJson} from '../../../../models/data/member-result';
import {isValidString} from '../../../../utils/validation.util';
import {combineLatest} from 'rxjs';
import {
  getMemberValidationCaller, getMemberValidationCheckedState,
  getMemberValidationRelationship
} from '../../../../stores/member-validation-store/member-validation-store.selectors';
import {setMemberValidationCheckedState} from '../../../../stores/member-validation-store/member-validation-store.actions';
import {SubscriptionInventory} from '../../../../utils/subscribe.util';
import {Store} from '@ngrx/store';
import * as _ from 'lodash';

@Component({
  selector: 'app-member-case-about-item',
  templateUrl: './member-case-about-item.component.html',
  styleUrls: ['./member-case-about-item.component.scss']
})
export class MemberCaseAboutItemComponent implements OnInit, OnDestroy {
  // case about data
  @Input() data: MemberResultJson;
  // set previous checked state
  @Input() set previousCheckedState(state: { [key: string]: boolean }) {
    if (state) {
      this.checked = state as any;
    }
  }

  // check disabled event
  @Output() checkDisabled: EventEmitter<void> = new EventEmitter<void>();

  // caller for member validation
  caller: string;
  // relationship for member validation
  relationship: string;
  // opened state
  opened = false;
  // checked states for fields
  checked = {
    firstName: false,
    lastName: false,
    relationship: false,
    policyId: false,
    ssn: false,
    last4ssn: false,
    dateOfBirth: false,
    address: false,
  };
  // selection
  selections: string[] = [];
  // valid state of pathway
  pathwayValid = false;
  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    callerDetails: 'callerDetails',
    validationType: 'validationType',
    checkedState: 'checkedState',
  };

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.getCallerDetails();
    this.getCheckedState();
  }

  ngOnDestroy(): void {
    this.setCheckedState();
    this.inventory.unSubscribeAll();
  }

  /**
   * get previous checked state from store
   */
  private getCheckedState() {
    this.inventory.unSubscribe(this.subKeys.checkedState);

    const sub = this.store
      .select(getMemberValidationCheckedState)
      .subscribe({
        next: res => {
          if (res && this.data) {
            const target = _.cloneDeep(res)[this.data.id];

            if (target) {
              this.selections = target;
              this.setCheckedStatesWithSelection();
            }
          }
        },
      });

    this.inventory.store(this.subKeys.checkedState, sub);
  }

  /**
   * set checked states with selection
   */
  private setCheckedStatesWithSelection() {
    const fields = [
      'firstName',
      'lastName',
      'relationship',
      'policyId',
      'ssn',
      'last4ssn',
      'dateOfBirth',
      'address',
    ];

    fields.forEach(field => {
      if (this.selections.indexOf(field) !== -1) {
        this.checked[field] = true;
      }
    });

    // check first, last name when name is exists
    if (this.selections.indexOf('name') !== -1) {
      this.checked.firstName = true;
      this.checked.lastName = true;
    }

    // check ssn, last4ssn when ssn exists
    if (this.selections.indexOf('ssn') !== -1) {
      this.checked.ssn = true;
      this.checked.last4ssn = true;
    }
  }

  /**
   * open detail
   */
  openDetail() {
    this.opened = true;
  }

  /**
   * close detail
   */
  closeDetail() {
    this.opened = false;
  }

  /**
   * toggle details
   */
  toggleDetail() {
    if (this.opened) {
      this.closeDetail();
    } else {
      this.openDetail();
    }
  }

  /**
   * handle checkbox clicked event
   * @param field fields
   */
  onClickCheckbox(field: string) {
    let prevent = false;

    // set false to pathway valid state
    this.pathwayValid = false;

    if (!isValidString(this.caller) || !isValidString(this.relationship)) {
      if (this.caller !== 'poa' && !this.relationship) {
        prevent = true;
      }
    }

    if (!prevent) {
      this.defineCheckedField(field);
    } else {
      this.checkDisabled.emit();
    }
  }

  /**
   * define checked field
   * @param field field name
   */
  private defineCheckedField(field: string) {
    switch (field) {
      case 'ssn': {
        this.onClickFullSSN();
        break;
      }

      case 'last4ssn': {
        this.onClickLast4SSN();
        break;
      }

      default: {
        this.checked[field] = !this.checked[field];
        break;
      }
    }

    this.toggleSelection(field);
  }

  /**
   * toggle selection
   * @param field selected field
   */
  toggleSelection(field: string) {
    if (field === 'firstName' || field === 'lastName') {
      this.toggleNameField(field);
    } else if (field === 'ssn' || field === 'last4ssn') {
      this.toggleSSNField(field);
    } else {
      const index = this.selections.indexOf(field);

      if (index !== -1) {
        this.selections.splice(index, 1);
      } else {
        this.selections.push(field);
      }
    }

    // clone to trigger changes
    this.selections = _.cloneDeep(this.selections);
  }

  /**
   * toggle ssn field
   * @param field field
   */
  toggleSSNField(field: string) {
    if (field === 'last4ssn') {
      const last4Index = this.selections.indexOf(field);

      if (last4Index !== -1) {
        // if last4ssn exists, remove last4ssn
        this.selections.splice(last4Index, 1);
      } else {
        // if last4ssn not exists, check ssn existence
        const ssnIndex = this.selections.indexOf('ssn');

        if (ssnIndex !== -1) {
          // if ssn exists, remove ssn
          this.selections.splice(ssnIndex, 1);
        } else {
          // is ssn not exists, add last4ssn
          this.selections.push(field);
        }
      }
    } else {
      const ssnIndex = this.selections.indexOf(field);

      if (ssnIndex !== -1) {
        // if ssn exists, remove ssn
        this.selections.splice(ssnIndex, 1);
      } else {
        // if ssn not exists, check last4ssn existence
        const last4Index = this.selections.indexOf('last4ssn');

        if (last4Index !== -1) {
          // if last4ssn exists, remove last4ssn
          this.selections.splice(last4Index, 1);
        }

        // add ssn
        this.selections.push(field);
      }
    }
  }

  /**
   * toggle name field
   * @param field field
   */
  toggleNameField(field: string) {
    const reverseFields = {
      firstName: 'lastName',
      lastName: 'firstName',
    };

    const lastIndex = this.selections.length - 1;
    const targetNameIndex = this.selections.indexOf(field);

    if (this.selections.length > 0 && targetNameIndex === -1) {
      // if target field not exists and selection is not empty,
      // check 'name' field's existence first
      // if 'name' is exists, remove 'name' and add reverse field
      const nameIndex = this.selections.indexOf('name');

      // check existence of the 'name'
      if (nameIndex !== -1) {
        // if 'name' exists, remove name and add reverse field to index
        this.selections.splice(nameIndex, 1, reverseFields[field]);
      } else {
        // if 'name' not exists,
        // check existence of the reverse field
        if (this.selections[lastIndex] === reverseFields[field]) {
          // if reverse field exists in last index, remove reverse field and add 'name' field
          this.selections.splice(lastIndex, 1, 'name');
        } else {
          // if reverse field doesn't exists, add target field
          this.selections.push(field);
        }
      }
    } else {
      if (targetNameIndex !== -1) {
        this.selections.splice(targetNameIndex, 1);
      } else {
        this.selections.push(field);
      }
    }
  }

  /**
   * when clicking full ssn, check last 4 ssn too
   */
  private onClickFullSSN() {
    this.checked.ssn = !this.checked.ssn;
    this.checked.last4ssn = this.checked.ssn;
  }

  /**
   * when clicking last 4 ssn, uncheck full ssn
   */
  private onClickLast4SSN() {
    this.checked.last4ssn = !this.checked.last4ssn;
    this.checked.ssn = false;
  }

  /**
   * set pathway valid to true
   */
  onPathwayValidated() {
    this.pathwayValid = true;
  }

  /**
   * get caller details
   */
  private getCallerDetails() {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.callerDetails);

    const sub = combineLatest([
      this.store.select(getMemberValidationCaller),
      this.store.select(getMemberValidationRelationship),
    ]).subscribe({
      next: res => {
        this.caller = res[0];
        this.relationship = res[1];

        this.pathwayValid = false;
      },
    });

    // store subscription
    this.inventory.store(this.subKeys.callerDetails, sub);
  }

  /**
   * set checked state to store
   */
  private setCheckedState() {
    this.store.dispatch(setMemberValidationCheckedState({
      checkedState: {
        [this.data.id]: _.cloneDeep(this.selections),
      }
    }));
  }
}
