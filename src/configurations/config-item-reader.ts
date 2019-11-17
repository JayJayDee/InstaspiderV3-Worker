
export const configReader =
  ({ source }: { source: {[key: string]: any}}) =>

    ({ key, mandantory = false, defaultValue }:
      { key: string, mandantory?: boolean, defaultValue?: any }) => {

      if (!source[key] && mandantory === true) {
        throw new Error(`environment variable: ${key} wasn\'t supplied.`);
      }
      if (!source[key] && defaultValue === undefined) {
        return null;
      }
      if (!source[key] && defaultValue) {
        return defaultValue;
      }
      return source[key];
    };

export type ConfigReader =
  ({ key, mandantory, defaultValue }: {
    key: string, mandantory?: boolean, defaultValue?: any }) => any;