export const adaptOfferToClient = (offer) => {
  const adaptedOffer = {
    id: offer.id,
    images: offer.images,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.type,
    city: {
      name: offer.city.name
    },
    location: {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      zoom: offer.location.zoom,
    },
    description: offer.description,
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

  return adaptedOffer;
};
