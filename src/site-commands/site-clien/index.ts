import { SiteType, SiteCredential, Site } from '../types';
import prepare from './prepare';
import login from './login';
import isLoggedIn from './is-logged-in';
import sellArticles from './sell-articles';

export default (creds: SiteCredential): Site => ({
  site: 'CLIEN' as SiteType,
  prepare: prepare(),
  login: login(creds),
  isLoggedIn: isLoggedIn(),
  sellArticles: sellArticles(),
});