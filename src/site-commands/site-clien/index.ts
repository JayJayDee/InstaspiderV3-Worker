import { SiteType, SiteCredential, Site } from '../types';
import login from './login';
import isLoggedIn from './is-logged-in';
import sellArticles from './sell-articles';

export default (creds: SiteCredential): Site => ({
  site: 'CLIEN' as SiteType,
  login: login(creds),
  isLoggedIn: isLoggedIn(),
  sellArticles: sellArticles(),
});