import { siteConf } from '../configurations';

import { Site, SiteType } from "./types";
import clien from './site-clien';
import bunjang from './site-bunjang';

const sites: Site[] = [];

const mappedSites: {[key: string]: (...args: any[]) => Site} = {
  'CLIEN': clien,
  'BUNJANG': bunjang,
};

export const initSites = () => {
  const siteConfs = siteConf();
  siteConfs.forEach((conf) => {
    sites.push(mappedSites[conf.site](conf.credentials));
  });
};

export const pickSite = (site: SiteType) => {
  const picked = sites.find((s) => s.site === site);
  if (!picked) {
    throw new Error(`site not found:${site} in configuration`);
  }
  return picked;
};