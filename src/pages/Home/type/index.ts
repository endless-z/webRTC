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

enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}

// 字符串枚举
enum DirectionString {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
}

const dir: Direction = Direction.EAST;
