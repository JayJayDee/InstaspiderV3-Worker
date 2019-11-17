import { Site, SiteType } from "./types";
import clien from './site-clien';
import { siteConf } from '../configurations';

const sites: Site[] = [
  clien,
];

export const initSites = () => {
  const conf = siteConf();
  console.log(conf);
};

export const pickSite = (site: SiteType) => sites.find((s) => s.site === site);