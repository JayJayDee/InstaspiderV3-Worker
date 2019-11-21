import { SiteCredential, Site } from '../types';

import login from './login';
import sellArticles from './sell-articles';

export default (creds: SiteCredential): Site => ({
  site: 'BUNJANG',
  login: login(creds),
  sellArticles: sellArticles(),
});