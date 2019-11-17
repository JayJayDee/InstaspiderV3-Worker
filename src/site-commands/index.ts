import { Site, SiteType } from "./types";
import clien from './site-clien';
import { siteConf } from '../configurations';

const sites: Site[] = [];

const mappedSites: {[key: string]: (...args: any[]) => Site} = {
  'CLIEN': clien,
};

export const initSites = () => {
  const siteConfs = siteConf();
  siteConfs.forEach((conf) => {
    sites.push(mappedSites[conf.site](conf.credentials));
  });
};

export const pickSite = (site: SiteType) => sites.find((s) => s.site === site);