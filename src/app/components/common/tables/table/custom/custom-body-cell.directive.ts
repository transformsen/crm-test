import {Directive, Input, TemplateRef} from '@angular/core';

/**
 * The `row` context will be TableRow<T> object.
 * The `column` context will be TableColumn object.
 * @usage
 * <ng-template
 *   appCustomBodyCell
 *   let-row="row"
 *   let-column="column">
 *   <!-- custom content -->
 * </ng-template>
 */
@Directive({
  selector: '[appCustomBodyCell]'
})
export class CustomBodyCellDirective {
  // column property to replace
  @Input() columnProperty: string;

  constructor(
    public templateRef: TemplateRef<HTMLElement>,
  ) { }

}
