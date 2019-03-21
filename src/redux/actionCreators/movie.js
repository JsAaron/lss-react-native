import { getFetch } from '../../utils/network/request/HttpExtension';
import { PATH } from '../constants/urls';
import { ApiSource } from '../constants/commonType';

const movieList = params => getFetch(PATH.MOVIE_LIST, params);
const movieShowTimeList = params => getFetch(PATH.MOVIE_SHOWTIME, params, ApiSource.TIMEMOVIE);
const movieComeingNewList = params => getFetch(PATH.MOVIE_COMEING_NEW, params, ApiSource.TIMEMOVIE);

export default {
  movieList,
  movieShowTimeList,
  movieComeingNewList
};