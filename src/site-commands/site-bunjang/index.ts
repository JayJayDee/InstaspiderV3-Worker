import { SiteCredential, Site } from '../types';
import prepare from './prepare';
import login from './login';
import isLoggedIn from './is-logged-in';
import sellArticles from './sell-articles';

export default (creds: SiteCredential): Site => ({
  site: 'BUNJANG',
  prepare: prepare(),
  login: login(creds),
  isLoggedIn: isLoggedIn(),
  sellArticles: sellArticles(),
});