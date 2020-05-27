import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  setMemberValidationCaller,
  setMemberValidationPreviousMember, setMemberValidationRelationship
} from '../../../stores/member-validation-store/member-validation-store.actions';
import {SubscriptionInventory} from '../../../utils/subscribe.util';
import {MemberResultJson} from '../../../models/data/member-result';
import * as _ from 'lodash';
import {combineLatest} from 'rxjs';
import {getMemberValidationPreviousMember} from '../../../stores/member-validation-store/member-validation-store.selectors';
import {getSearchSelectedCaseAbout} from '../../../stores/search-store/search-store.selectors';
import {setSearchSelectedCaseAbout} from '../../../stores/search-store/search-store.actions';
import {setCaseFromSelectedMember} from '../../../stores/case-from-store/case-from-store.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-member-validation',
  templateUrl: './member-validation.component.html',
  styleUrls: ['./member-validation.component.scss']
})
export class MemberValidationComponent implements OnInit, OnDestroy {
  // selected member from case from
  selectedMember: MemberResultJson;
  // previously selected member
  private previousMember: MemberResultJson;
  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    selectedMembers: 'selectedMembers',
  };

  constructor(
    private router: Router,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.getSelectedMembers();
  }

  ngOnDestroy(): void {
    this.setPreviousSelection();
    this.inventory.unSubscribeAll();
  }

  /**
   * get selected member and previous member from the stores
   */
  private getSelectedMembers() {
    this.inventory.unSubscribe(this.subKeys.selectedMembers);

    const sub = combineLatest([
      this.store.select(getSearchSelectedCaseAbout),
      this.store.select(getMemberValidationPreviousMember),
    ]).subscribe({
      next: res => {
        this.selectedMember = _.cloneDeep(res[0]);
        this.previousMember = _.cloneDeep(res[1]);
        this.initSelectedMember();

        if (!this.selectedMember) {
          this.router.navigate(['/case-from']);
        }
      }
    });

    this.inventory.store(this.subKeys.selectedMembers, sub);
  }

  /**
   * initialize selected member
   * when previous member is different with selected member,
   * or selected member not exists,
   * set previous member to selected member
   */
  private initSelectedMember() {
    if (this.previousMember) {
      if (!this.selectedMember) {
        this.store.dispatch(setSearchSelectedCaseAbout({selectedCaseAbout: this.previousMember}));
      } else if (this.selectedMember.id !== this.previousMember.id) {
        // clear previous caller and relationship if selected member is different
        this.store.dispatch(setMemberValidationCaller({caller: null}));
        this.store.dispatch(setMemberValidationRelationship({relationship: null}));
        this.store.dispatch(setMemberValidationPreviousMember({previousMember: null}));
      }
    }
  }

  /**
   * set previous selection to store
   */
  private setPreviousSelection() {
    this.store.dispatch(setMemberValidationPreviousMember({previousMember: this.selectedMember}));
    this.store.dispatch(setCaseFromSelectedMember({selectedMember: this.selectedMember}));
  }
}
