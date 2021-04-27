import {useSelector, useDispatch} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../const';
import {changeFavoriteStatus} from '../store/api-actions';
import {redirectToRoute} from '../store/action';

export const useFavoriteButtonHandler = (id, isFavorite) => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const handleFavoriteButtonClick = (evt) => {
    evt.preventDefault();

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    } else {
      dispatch(changeFavoriteStatus(id, isFavorite ? 0 : 1));
    }
  };

  return [handleFavoriteButtonClick];
};
