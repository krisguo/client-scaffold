const workspaces = {
  dev: {
    horizonServer: 'https://api.mobitile.tokend.org',
    fileStorage: 'https://storage.mobitile.tokend.org',
    networkPassphrase: 'TokenD Demo Network'
  },
  prod: {
    horizonServer: 'https://invest.swarm.fund/_/api',
    fileStorage: 'https://storage.swarm.fund/api',
    networkPassphrase: 'TokenD Demo Network'
  },
  staging: {
    horizonServer: 'https://invest-stage.swarm.fund/_/api',
    fileStorage: 'https://storage-stage.swarm.fund/api',
    networkPassphrase: 'TokenD Demo Network'
  }
}

const currentMode = 'dev'

export default {
  HORIZON_SERVER: (() => process.env.NODE_ENV === 'development' ? workspaces[currentMode].horizonServer : process.env.HORIZON_SERVER)(),
  FILE_STORAGE: (() => process.env.NODE_ENV === 'development' ? workspaces[currentMode].fileStorage : process.env.FILE_STORAGE)(),
  NETWORK_PASSPHRASE: (() => process.env.NODE_ENV === 'development' ? workspaces[currentMode].networkPassphrase : process.env.NETWORK_PASSPHRASE)(),
  DISCOURSE_CLIENT: 'https://discuss.swarm.fund',
  SWARM_ORIGIN: 'https://swarm.fund',
  TRANSACTIONS_PER_PAGE: 12,
  DECIMAL_POINTS: 6,
  VALIDATE_EMAILS: process.env.NODE_ENV === 'production',
  AIRDROP_REGISTRATION_END: new Date('2018-02-25T12:00:00')
}
