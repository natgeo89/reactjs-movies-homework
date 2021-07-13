import { IMovieCard } from "./movie";

export enum ActorActionType {
  GET_ACTOR_DATA = "GET_ACTOR_DATA",
  GET_ACTOR_PHOTOS = "GET_ACTOR_PHOTOS",
  GET_KNOWN_BY = "GET_KNOWN_BY",
}

export interface IActorData {
  name: string;
  birthday: string;
  place_of_birth: string;
  biography: string;
  profile_path: string;
}

export interface IActorPhotos {
  profiles: Array<{ file_path: string }>;
}

export interface IKnownBy {
  cast: Array<IMovieCard>;
}

export interface IActorState {
  data: IActorData;
  photos: IActorPhotos;
  known_by: IKnownBy;
}