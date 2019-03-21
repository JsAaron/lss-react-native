import { createAction } from 'redux-actions';
import type from '../constants/actionType';
import actions from '../actionCreators/movie';

const getMovieList = createAction(type.MOVIE_LIST, actions.movieList);
const getActorList = createAction(type.MOVIE_ACTOR_LIST, actions.movieActorList);
const getMovieShowTimeList = createAction(type.MOVIE_SHOWTIME_LIST, actions.movieShowTimeList);
const getMovieComeingNewList = createAction(type.MOVIE_COMEING_NEW_LIST, actions.movieComeingNewList);

const actionCreators = {
  getMovieList: params => getMovieList(params),
  getActorList,
  getMovieShowTimeList,
  getMovieComeingNewList
};

export default { actionCreators };
