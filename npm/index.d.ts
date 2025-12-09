declare module '@apiverve/zipcodes' {
  export interface zipcodesOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface zipcodesResponse {
    status: string;
    error: string | null;
    data: ZipCodesLookupData;
    code?: number;
  }


  interface ZipCodesLookupData {
      zipcode:   string;
      stateAbbr: string;
      latitude:  string;
      longitude: string;
      city:      string;
      state:     string;
  }

  export default class zipcodesWrapper {
    constructor(options: zipcodesOptions);

    execute(callback: (error: any, data: zipcodesResponse | null) => void): Promise<zipcodesResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: zipcodesResponse | null) => void): Promise<zipcodesResponse>;
    execute(query?: Record<string, any>): Promise<zipcodesResponse>;
  }
}
