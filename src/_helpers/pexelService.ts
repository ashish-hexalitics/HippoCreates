const pexelsApiBaseURL = "https://api.pexels.com/v1/";

const ACCESS_KEY = "9hLvDivP8KkTZSRHCiCNqL7llI3u0SAVB4gePx9LnbHAUiq8Uk1MHijm";

export const searchPhotos = async (query: string, page = 1, perPage = 10) => {
  try {
    const response = await fetch(
      `${pexelsApiBaseURL}search?query=${query}&page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: ACCESS_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
};

export const getRandomPhoto = async () => {
  try {
    const response = await fetch(`${pexelsApiBaseURL}curated?per_page=1`, {
      headers: {
        Authorization: ACCESS_KEY,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.photos[0];
  } catch (error) {
    console.error("Error fetching random photo:", error);
  }
};
