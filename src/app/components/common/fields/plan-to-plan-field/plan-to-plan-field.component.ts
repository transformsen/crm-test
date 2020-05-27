import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {InputFieldBaseComponent} from '../common/input-field-base.component';
import {SubscriptionInventory} from '../../../../utils/subscribe.util';
import {LookupService} from '../../../../services/lookup.service';
import {isInteger} from '../../../../utils/validation.util';
import {PlanToPlanJson} from '../../../../models/data/plan-to-plan';

@Component({
  selector: 'app-plan-to-plan-field',
  templateUrl: './plan-to-plan-field.component.html',
  styleUrls: [
    './plan-to-plan-field.component.scss',
    '../input-field/input-field.component.scss',
  ]
})
export class PlanToPlanFieldComponent extends InputFieldBaseComponent<PlanToPlanJson> implements OnInit, OnDestroy {
  // set value
  @Input() set appValue(value: PlanToPlanJson) {
    if (!value) {
      this.search = '';
    } else {
      this.search = `${value.planNumber} ${value.planName}`;
    }
  }
  // label
  @Input() label = 'Plan to Plan ID (P2P) / Plan Name';

  // search keyword
  search: string;
  // searchable options
  options: PlanToPlanJson[] = [];

  // keep value state
  private keepValue = false;
  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription key for inventory
  private subKeys = {
    lookup: 'lookup',
  };

  constructor(
    private lookupService: LookupService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.getOptions();
  }

  ngOnDestroy(): void {
    this.inventory.unSubscribeAll();
  }

  /**
   * get plan to plan options
   */
  private getOptions() {
    this.inventory.unSubscribe(this.subKeys.lookup);

    const sub = this.lookupService
      .getPlanToPlans()
      .subscribe({
        next: res => {
          this.options = res.results.map(item => ({
            planNumber: item.planNumber,
            type: item.type,
            planName: item.planName,
            label: `${item.planNumber} ${item.planName}`,
          }));
        },
      });

    this.inventory.store(this.subKeys.lookup, sub);
  }

  /**
   * handle search
   * @param value value
   */
  onSearch(value: string) {
    if (!this.keepValue) {
      this.appValueChange.emit(null);
    }

    this.search = value;
    this.keepValue = false;
  }

  /**
   * return searched options
   */
  get searchedOptions() {
    const search = this.search || '';

    if (isInteger(search)) {
      return this.options.filter(item => item.planNumber.toString().search(search) !== -1);
    } else {
      return this.options.filter(item => item.planName.search(new RegExp(search, 'gmi')) !== -1);
    }
  }

  /**
   * option selected
   * @param option options item
   */
  optionSelected(option: PlanToPlanJson) {
    this.appValueChange.emit(option);
    this.keepValue = true;
  }
}
