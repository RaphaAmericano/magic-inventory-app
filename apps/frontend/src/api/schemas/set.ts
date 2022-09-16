import { Set } from "entities";

export interface SetGetParams {
  id: string;
}
export interface SetGetResponse {
  object: string;
  has_more: boolean;
  data: Set[];
}

export type SetGetResponseFiltered = Set[];

export interface SetGetByCodeParams {
  code: string;
}

export type SetGetByCodeResponse = Set;
