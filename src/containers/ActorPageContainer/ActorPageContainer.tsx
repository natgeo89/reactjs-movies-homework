import React, {FC, ReactElement} from "react";

import { actorData, actorPhotos, genres, known_by } from "../../__mocks__/actor.mock";

// import { useEffect } from "react";

interface IActorData {
  name: string;
  birthday: string;
  place_of_birth: string;
  biography: string;
  profile_path: string;
}

interface IActorPhotos {
  profiles: Array<{file_path: string}>
}

interface IKnownBy {
  cast: Array<IMovie>
}

interface IMovie {
  title: string;
  poster_path: string | null;
  vote_average: number;
  genre_ids: number[];
}

interface IGenres {
  genres: Array<{id: number; name: string}>
}

interface ActorPageContainerProps {
  children(actorData: IActorData, actorPhotos: IActorPhotos, known_by: IKnownBy, genres: IGenres): ReactElement;
}

const ActorPageContainer: FC<ActorPageContainerProps> = ({ children }) => {
  // const [actorData, setActorData] = useState({});
  // const actorData = actorData

  // useEffect(async () => {
  //   const actorData = await fetchActorData();
  //   setActorData(actorData);
  // }, []);

  return children(actorData, actorPhotos, known_by, genres);
};

export default ActorPageContainer;
