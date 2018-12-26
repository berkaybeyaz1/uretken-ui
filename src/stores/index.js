import { create } from 'mobx-persist';

import Account from './Account';
import Services from './Services';

const stores = {
  Account,
  Services,
}

export default {
  ...stores,
};