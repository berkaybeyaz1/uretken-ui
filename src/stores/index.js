import { create } from 'mobx-persist';

import Account from './Account';
import Services from './Services';
const hydrate = create({ jsonify: true, });

const stores = {
  Account,
  Services,
}

// you can hydrate stores here with mobx-persist
hydrate('Account', stores.Account);

export default {
  ...stores,
};