import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import * as _ from 'lodash';
import {environment} from '../../../../../environments/environment';
import {HipaaPathwayDefinition} from '../../../../models/data/hipaa-pathway-definition';
import {HipaaPathway} from '../../../../models/data/hipaa-pathway';

const {
  hipaaPathways,
} = environment;

@Component({
  selector: 'app-member-validation-hipaa-pathway',
  templateUrl: './member-validation-hipaa-pathway.component.html',
  styleUrls: ['./member-validation-hipaa-pathway.component.scss']
})
export class MemberValidationHipaaPathwayComponent implements OnChanges {
  // caller for member validation
  @Input() caller: string;
  // relationship for member validation
  @Input() relationship: string;
  // checked state of fields
  @Input() checked: { [key: string]: boolean } = {};
  // selected fields list
  @Input() selections: string[] = [];
  // pathway validated event
  @Output() pathwayValidated: EventEmitter<void> = new EventEmitter<void>();

  // target hipaa pathways
  targetHipaaPathways: HipaaPathwayDefinition[] = [];
  // configured hipaa pathways
  private readonly hipaaPathways = _.cloneDeep(hipaaPathways);

  ngOnChanges(): void {
    this.setMemberHipaaPathways();
    this.checkPathwayValidation();
  }

  /**
   * set target hipaa pathways for member validation
   */
  private setMemberHipaaPathways() {
    // @comment
    // originally, designed to get pathway by caller and relationship
    // but no need to implement hipaa pathway for now, commented out the original source
    //
    // @originalSource
    // const pathways = this.hipaaPathways.member
    // .find(item => {
    //   if (this.caller === 'member') {
    //     // if caller is member, return true when relationship is exists and caller matched
    //     return item.caller === this.caller && this.relationship;
    //   } else {
    //     return item.caller === this.caller && item.relationship === this.relationship;
    //   }
    // });
    let pathways: any = {};

    if (this.caller) {
      if (this.relationship || this.caller === 'poa') {
        pathways = this.hipaaPathways.member[0];
      }
    }

    this.targetHipaaPathways = pathways ? pathways.pathways : [];
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
    if (this.targetHipaaPathways && this.targetHipaaPathways.length > 0) {
      this.targetHipaaPathways.forEach(pathway => {
        if (_.isEqual(pathway.valid, this.selections)) {
          this.pathwayValidated.emit();
        }
      });
    }
  }
}
