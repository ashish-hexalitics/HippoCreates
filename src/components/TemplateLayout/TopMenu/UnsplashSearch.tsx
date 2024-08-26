import { FormEvent, useState } from "react";
import { searchPhotos } from "../../../_helpers/unsplashService";

const UnsplashSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await searchPhotos(query);
      setPhotos(response.data.results);
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          placeholder="Search Unsplash..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          disabled={loading}
          className="p-2 bg-primary text-gray-600 rounded-md"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      <div className="mt-4 grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="overflow-hidden rounded-md">
            <img
              src={photo.urls.small}
              alt={photo.description || "Unsplash image"}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnsplashSearch;
