import { SiteCredential, Site } from '../types';
import login from './login';
import isLoggedIn from './is-logged-in';
import sellArticles from './sell-articles';

export default (creds: SiteCredential): Site => ({
  site: 'BUNJANG',
  login: login(creds),
  isLoggedIn: isLoggedIn(),
  sellArticles: sellArticles(),
});