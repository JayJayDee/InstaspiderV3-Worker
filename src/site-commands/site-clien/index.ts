import login from './login';
import { SiteType, SiteCredential, Site } from '../types';

export default (creds: SiteCredential): Site => ({
  site: 'CLIEN' as SiteType,
  login: login(creds),
});