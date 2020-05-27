import {Subscription} from 'rxjs';

export type SubscriptionItem = Subscription | Subscription[];

export class SubscriptionInventory {
  // storage for items
  private storage: {[key: string]: SubscriptionItem} = {};

  /**
   * wrapper method for observable
   * @param key identifier key
   * @param item subscription or subscriptions
   */
  store<T>(key: string, item: SubscriptionItem): void {
    this.storage[key] = item;
  }

  /**
   * unsubscribe item by key
   * @param key identifier key
   */
  unSubscribe(key: string): void {
    const item = this.storage[key];

    if (item) {
      (item instanceof Array ? item : [item]).forEach(sub => sub.unsubscribe());
    }
  }

  /**
   * unsubscribe all items
   */
  unSubscribeAll(): void {
    Object.keys(this.storage).forEach(key => this.unSubscribe(key));
  }
}
