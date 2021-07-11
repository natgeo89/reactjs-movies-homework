import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  getActorData,
  getActorPhotos,
  getKnownBy,
} from "../../store/actions/actorActions";
import { RootState } from "../../store/reducers";
import { IActorData, IActorPhotos, IKnownBy } from "../../types/actor";
import { IGenres } from "../../types/movie";

import { genres } from "../../__mocks__/movies.mock";

interface ActorPageContainerProps {
  children(
    actorData: IActorData,
    actorPhotos: IActorPhotos,
    known_by: IKnownBy,
    genres: IGenres,
    handleSearch: (query: string) => any
  ): ReactElement;
}

const ActorPageContainer: React.FC<ActorPageContainerProps> = ({
  children,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const actorData = useSelector((state: RootState) => state.actor.data);
  const actorPhotos = useSelector((state: RootState) => state.actor.photos);
  const actorKnownBy = useSelector((state: RootState) => state.actor.known_by);

  const { id }: any = useParams();

  useEffect(() => {
    dispatch(getActorData(id));
    dispatch(getActorPhotos(id));
    dispatch(getKnownBy(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (query: string) => {
    history.push(`/?search=${query}&page=1`);
  };

  return children(actorData, actorPhotos, actorKnownBy, genres, handleSearch);
};

export default ActorPageContainer;
