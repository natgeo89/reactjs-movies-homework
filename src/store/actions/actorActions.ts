import { Dispatch } from "redux";
import { API_KEY } from "../../constants/constants";
import {
  ActorActionType,
  IActorData,
  IActorPhotos,
  IKnownBy,
} from "../../types/actor";

export interface IGetActorDataAction {
  type: ActorActionType.GET_ACTOR_DATA;
  payload: IActorData;
}

export interface IGetActorPhotosAction {
  type: ActorActionType.GET_ACTOR_PHOTOS;
  payload: IActorPhotos;
}

export interface IGetActorKnownByAction {
  type: ActorActionType.GET_KNOWN_BY;
  payload: IKnownBy;
}

export type ActorAction = IGetActorDataAction | IGetActorPhotosAction | IGetActorKnownByAction;

//get actor data

export const getActorData = (id: number, lang: string) => {
  return async (dispatch: Dispatch<ActorAction>) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=${lang}`
    );
    const actorData = await response.json();
    dispatch(getActorDataAction(actorData));
  };
};

const getActorDataAction = (data: IActorData): IGetActorDataAction => ({
  type: ActorActionType.GET_ACTOR_DATA,
  payload: data,
});

//get actor photos

export const getActorPhotos = (id: number) => {
  return async (dispatch: Dispatch<ActorAction>) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${API_KEY}`
    );
    const actorPhotos = await response.json();
    dispatch(getActorPhotosAction(actorPhotos));
  };
};

const getActorPhotosAction = (data: IActorPhotos): IGetActorPhotosAction => ({
  type: ActorActionType.GET_ACTOR_PHOTOS,
  payload: data,
});

//get actor known_by films

export const getKnownBy = (id: number, lang: string) => {
  return async (dispatch: Dispatch<ActorAction>) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=${lang}`
    );
    const knownBy = await response.json();
    dispatch(getActorKnownByAction(knownBy));
  };
};

const getActorKnownByAction = (data: IKnownBy): IGetActorKnownByAction => ({
  type: ActorActionType.GET_KNOWN_BY,
  payload: data,
});
