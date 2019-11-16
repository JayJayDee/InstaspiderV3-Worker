
export const configReader =
  ({ source }: { source: {[key: string]: any}}) =>

    ({ key, mandantory = false }: { key: string, mandantory: boolean }) => {
      if (!source[key] && mandantory === true) {
        throw new Error(`environment variable:${key} wasn\'t supplied.`);
      }
      if (!source[key] && mandantory === false) {
        return null;
      }
      return source[key];
    };