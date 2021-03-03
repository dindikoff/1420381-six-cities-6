export const adaptToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    roomCount: offer.bedrooms,
    features: offer.goods,
    host: {
      avatar: offer.host.avatar_url,
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
    },
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    roomCapacity: offer.max_adults,
    imagePreview: offer.preview_image,
  };

  delete adaptedOffer.bedrooms;
  delete adaptedOffer.goods;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};
