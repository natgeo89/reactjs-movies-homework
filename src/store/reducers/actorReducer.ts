import { ActorActionType, IActorState } from "../../types/actor";
import { ActorAction } from "../actions/actorActions";

const initState = {
  data: {
    name: '',
    birthday: '',
    place_of_birth: '',
    biography: '',
    profile_path: '',
  },
  photos: {
    profiles: [],
  },
  known_by: {
    cast: [],
  },
};

export const actorReducer = (
  state: IActorState = initState,
  action: ActorAction
) => {
  switch (action.type) {
    case ActorActionType.GET_ACTOR_DATA:
      return { ...state, data: action.payload };
    case ActorActionType.GET_ACTOR_PHOTOS:
      return { ...state, photos: action.payload };
    case ActorActionType.GET_KNOWN_BY:
      return { ...state, known_by: action.payload };
    default:
      return initState;
  }
};