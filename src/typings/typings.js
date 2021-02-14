import PropTypes from 'prop-types';
import {RoomType} from '../const';
import {CommentType} from '../components/comment/comment';

export const OfferType = PropTypes.exact({
  id: PropTypes.number.isRequired,
  imagePreview: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf([RoomType.apartment, RoomType.hotel, RoomType.house, RoomType.room]).isRequired,
  roomCount: PropTypes.number.isRequired,
  roomCapacity: PropTypes.number.isRequired,
  features: PropTypes.array.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(CommentType),
  host: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  })
});
