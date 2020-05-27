import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { getCallbackNumber, getCallerName } from '../../../stores/main-store/main-store.selectors';
import { SubscriptionInventory } from '../../../utils/subscribe.util';
import { setCallbackNumber, setCallerName } from '../../../stores/main-store/main-store.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // previous route for back button
  @Input() previousRoute: string | string[];
  // input disabled state
  @Input() disabled = false;
  @Output() entered = new EventEmitter();

  // caller name
  callerName: string;
  // callback number
  callbackNumber: string;

  // the errors
  errors = {
    callerNameError: null,
    callbackNumberError: null
  };

  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    fieldValues: 'fieldValues',
  };

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.getFieldValues();
  }

  ngOnDestroy(): void {
    this.inventory.unSubscribeAll();
  }

  /**
   * get field values from store
   */
  private getFieldValues() {
    // unsubscribe subscription for get field values
    this.inventory.unSubscribe(this.subKeys.fieldValues);

    const sub = combineLatest([
      this.store.select(getCallerName),
      this.store.select(getCallbackNumber),
    ]).subscribe({
      next: res => {
        this.callerName = res[0] || '';
        this.callbackNumber = res[1] || '';
      },
    });

    // store get field values subscription
    this.inventory.store(this.subKeys.fieldValues, sub);
  }

  /**
   * set caller name to main store
   * @param value changed value
   */
  onCallerNameChange(value: string) {
    this.errors.callerNameError = null;
    this.store.dispatch(setCallerName({ callerName: value }));
  }

  /**
   * set callback number to main store
   * @param value changed value
   */
  onCallbackNumberChange(value: string) {
    this.errors.callbackNumberError = null;
    this.store.dispatch(setCallbackNumber({ callbackNumber: value }));
  }
}
