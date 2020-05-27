export class TabItem {
  label: string;
  link: string | string[];

  constructor(label: string, link: string | string[]) {
    this.label = label;
    this.link = link;
  }
}
