import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251025_181512 from './20251025_181512';
import * as migration_20251025_192323 from './20251025_192323';
import * as migration_20251025_200659 from './20251025_200659';
import * as migration_20251025_201808 from './20251025_201808';
import * as migration_20251025_201904 from './20251025_201904';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251025_181512.up,
    down: migration_20251025_181512.down,
    name: '20251025_181512',
  },
  {
    up: migration_20251025_192323.up,
    down: migration_20251025_192323.down,
    name: '20251025_192323',
  },
  {
    up: migration_20251025_200659.up,
    down: migration_20251025_200659.down,
    name: '20251025_200659',
  },
  {
    up: migration_20251025_201808.up,
    down: migration_20251025_201808.down,
    name: '20251025_201808',
  },
  {
    up: migration_20251025_201904.up,
    down: migration_20251025_201904.down,
    name: '20251025_201904'
  },
];
