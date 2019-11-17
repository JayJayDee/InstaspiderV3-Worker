import { Site, SiteType } from "./types";
import clien from './site-clien';

const sites: Site[] = [
  clien,
];

export const pickSite = (site: SiteType) => sites.find((s) => s.site === site);