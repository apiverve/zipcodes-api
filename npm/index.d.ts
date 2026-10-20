declare module '@apiverve/zipcodes' {
  export interface zipcodesOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface zipcodesResponse {
    status: string;
    error: string | null;
    data: ZipCodesLookupData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface ZipCodesLookupData {
      zipcode:   null | string;
      stateAbbr: null | string;
      latitude:  null | string;
      longitude: null | string;
      city:      null | string;
      state:     null | string;
  }

  export default class zipcodesWrapper {
    constructor(options: zipcodesOptions);

    execute(callback: (error: any, data: zipcodesResponse | null) => void): Promise<zipcodesResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: zipcodesResponse | null) => void): Promise<zipcodesResponse>;
    execute(query?: Record<string, any>): Promise<zipcodesResponse>;
  }
}
