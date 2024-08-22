export const sanitizeApiResponse = response => {
  if (!response || !response.data) {
    return;
  }

  if (Array.isArray(response.data)) {
    const sanitized = response.data.reduce((acc, curr) => {
      const featuredImage = curr.attributes.featuredImage?.data.attributes;
      const images = curr.attributes.images?.data.map(i => i.attributes);

      const item = {
        id: curr.id,
        ...curr.attributes,
        featuredImage,
        images,
      };
      acc.push(item);
      return acc;
    }, []);
    return sanitized;
  }

  const sanitized = {
    id: response.data.id,
    ...response.data.attributes,
  };

  return sanitized;
};
