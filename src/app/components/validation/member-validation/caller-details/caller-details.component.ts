import {Component, OnDestroy, OnInit} from '@angular/core';
import {OptionItem} from '../../../../models/component/option-item';
import {Store} from '@ngrx/store';
import {SubscriptionInventory} from '../../../../utils/subscribe.util';
import {combineLatest} from 'rxjs';
import {getMemberValidationCaller, getMemberValidationRelationship} from '../../../../stores/member-validation-store/member-validation-store.selectors';
import {setMemberValidationCaller, setMemberValidationRelationship} from '../../../../stores/member-validation-store/member-validation-store.actions';
import {isValidString} from '../../../../utils/validation.util';

@Component({
  selector: 'app-caller-details',
  templateUrl: './caller-details.component.html',
  styleUrls: ['./caller-details.component.scss']
})
export class CallerDetailsComponent implements OnInit, OnDestroy {
  // caller
  caller: string;
  // relationship
  relationship: string;
  // error message for caller
  callerError: string;
  // error message for relationship
  relationshipError: string;
  // options for caller
  callerOptions: OptionItem<string>[] = [
    new OptionItem<string>('Member', 'member'),
    new OptionItem<string>('Non-Member', 'nonMember'),
    new OptionItem<string>('POA', 'poa'),
  ];
  // options for relationship
  relationshipOptions: {[key: string]: OptionItem<string>[]} = {
    member: [
      new OptionItem<string>('Policyholder', 'policyholder'),
      new OptionItem<string>('Spouse', 'spouse'),
      new OptionItem<string>('Dependent', 'dependent'),
    ],
    nonMember: [
      new OptionItem<string>('Non-covered spouse', 'nonCoveredSpouse'),
      new OptionItem<string>('Non-covered parent of a minor', 'nonCoveredParentOfaMinor'),
      new OptionItem<string>('Advocate', 'advocate'),
      new OptionItem<string>('Person Representative', 'personRepresentative'),
      new OptionItem<string>('Other Insurance', 'otherInsurance'),
    ],
  };

  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    callerAndRelationship: 'callerAndRelationship',
  };

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.getCallerAndRelationship();
  }

  ngOnDestroy(): void {
    this.inventory.unSubscribeAll();
  }

  /**
   * get caller and relationship from store
   */
  private getCallerAndRelationship() {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.callerAndRelationship);

    const sub = combineLatest([
      this.store.select(getMemberValidationCaller),
      this.store.select(getMemberValidationRelationship),
    ]).subscribe({
      next: res => {
        this.caller = res[0];
        this.relationship = res[1];
      },
    });

    // store subscription
    this.inventory.store(this.subKeys.callerAndRelationship, sub);
  }

  /**
   * store changed value to store and remove relationship selection
   * @param value changed caller
   */
  onCallerChange(value: string) {
    this.callerError = null;
    this.store.dispatch(setMemberValidationCaller({caller: value}));
    this.onRelationshipChange(null);
  }

  /**
   * store changed value to store
   * @param value changed relationship
   */
  onRelationshipChange(value: string) {
    this.relationshipError = null;
    this.store.dispatch(setMemberValidationRelationship({relationship: value}));
  }

  /**
   * show error for selects
   */
  showError() {
    if (!isValidString(this.caller)) {
      this.callerError = 'Please select caller';
    }

    if (!isValidString(this.relationship)) {
      this.relationshipError = 'Please select relationship';
    }
  }
}
