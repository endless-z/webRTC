export interface Item {
  value: string;
  kind: string;
  label: string;
}

export interface ILocalDevice {
  audioIn: Item[];
  videoIn: Item[];
  audioOut: Item[];
}
