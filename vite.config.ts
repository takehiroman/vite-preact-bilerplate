// @ts-check
import { join } from 'path'
import preactRefresh from '@prefresh/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  jsx: {
    factory: 'h',
    fragment: 'Fragment',
  },
  alias: {
    '/@/': join(__dirname, 'src'),
  },

  plugins: [preactRefresh()],
}

export default config
