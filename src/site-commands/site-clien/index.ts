import login from './login';
import sellArticles from './sell-articles';
import { SiteType, SiteCredential, Site } from '../types';

export default (creds: SiteCredential): Site => ({
  site: 'CLIEN' as SiteType,
  login: login(creds),
  sellArticles: sellArticles(),
});