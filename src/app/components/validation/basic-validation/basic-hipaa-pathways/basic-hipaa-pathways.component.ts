import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Store} from '@ngrx/store';
import {SubscriptionInventory} from '../../../../utils/subscribe.util';
import {combineLatest} from 'rxjs';
import {getCaseFromItemType} from '../../../../stores/case-from-store/case-from-store.selectors';
import {getCaseAboutItemType} from '../../../../stores/case-about-store/case-about-store.selectors';
import {AppCaseAboutItemType} from '../../../../stores/case-about-store/case-about-store.reducer';
import {AppCaseFromItemType} from '../../../../stores/case-from-store/case-from-store.reducer';
import * as _ from 'lodash';
import {HipaaPathwayDefinition} from '../../../../models/data/hipaa-pathway-definition';
import {HipaaPathway} from '../../../../models/data/hipaa-pathway';

const {
  hipaaPathways,
} = environment;

@Component({
  selector: 'app-basic-hipaa-pathways',
  templateUrl: './basic-hipaa-pathways.component.html',
  styleUrls: ['./basic-hipaa-pathways.component.scss']
})
export class BasicHipaaPathwaysComponent implements OnInit, OnChanges, OnDestroy {
  // checked state of fields
  @Input() checked: { [key: string]: boolean } = {};
  // selected fields list
  @Input() selections: string[] = [];
  // pathway validated event
  @Output() pathwayValidated: EventEmitter<void> = new EventEmitter<void>();
  // case from item type
  caseFromType: AppCaseFromItemType;
  // case about item type
  caseAboutType: AppCaseAboutItemType;
  // target pathways
  targetPathways: HipaaPathwayDefinition[] = [];

  // total hipaa pathways
  private hipaaPathways = _.cloneDeep(hipaaPathways);
  // inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // keys
  private subKeys = {
    caseFromAndAboutTypes: 'caseFromAndAboutTypes',
  };

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.getCaseFromAndAboutTypes();
  }

  ngOnChanges(): void {
    this.checkPathwayValidation();
  }

  ngOnDestroy(): void {
    this.inventory.unSubscribeAll();
  }

  /**
   * get case from and about types
   */
  private getCaseFromAndAboutTypes() {
    this.inventory.unSubscribe(this.subKeys.caseFromAndAboutTypes);

    const sub = combineLatest([
      this.store.select(getCaseFromItemType),
      this.store.select(getCaseAboutItemType),
    ]).subscribe({
      next: res => {
        this.caseFromType = res[0];
        this.caseAboutType = res[1];
        this.setTargetHipaaPathway();
      },
    });

    this.inventory.store(this.subKeys.caseFromAndAboutTypes, sub);
  }

  /**
   * set target hipaa pathways
   */
  private setTargetHipaaPathway() {
    const hipaa = this.hipaaPathways.basic;
    const pathway = hipaa.find(item => {
      return (
        // only check case about item type
        (item.caseAboutType && item.caseAboutType === this.caseAboutType)
        || (item.caseFromType && item.caseFromType === this.caseFromType)
      );
    });

    this.targetPathways = pathway ? pathway.pathways : [];
  }

  /**
   * check hipaa validation
   * @param items items
   * @param index index
   */
  isValid(items: HipaaPathway[], index: number) {
    const previous = items[index - 1];
    const current = items[index];
    let previousValid = true;

    if (previous) {
      previousValid = previous.property === this.selections[index - 1];
    }

    const currentValid = current.property === this.selections[index];

    return previousValid && currentValid;
  }

  /**
   * check pathway validation
   */
  checkPathwayValidation() {
    if (this.targetPathways && this.targetPathways.length > 0) {
      this.targetPathways.forEach(pathway => {
        if (_.isEqual(pathway.valid, this.selections)) {
          this.pathwayValidated.emit();
        }
      });
    }
  }
}
