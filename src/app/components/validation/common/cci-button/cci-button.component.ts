import {Component, OnDestroy, OnInit} from '@angular/core';
import {CciService} from '../../../../services/cci.service';
import {SubscriptionInventory} from '../../../../utils/subscribe.util';

@Component({
  selector: 'app-cci-button',
  templateUrl: './cci-button.component.html',
  styleUrls: ['./cci-button.component.scss']
})
export class CciButtonComponent implements OnInit, OnDestroy {
  // showing state of cci modal
  // init state is true
  showModal = true;
  // cci contents
  cci: {content: string}[] = [];
  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    cci: 'cci',
  };

  constructor(
    private cciService: CciService,
  ) {
  }

  ngOnInit(): void {
    this.getCCI();
  }

  ngOnDestroy(): void {
    this.inventory.unSubscribeAll();
  }

  /**
   * get cci contents
   */
  private getCCI() {
    this.inventory.unSubscribe(this.subKeys.cci);

    const sub = this.cciService
      .getCCI()
      .subscribe({
        next: res => {
          this.cci = res as any[];
        },
      });

    this.inventory.store(this.subKeys.cci, sub);
  }

  /**
   * open cci modal
   */
  openModal() {
    this.showModal = true;
  }

  /**
   * close cci modal
   */
  closeModal() {
    this.showModal = false;
  }
}
