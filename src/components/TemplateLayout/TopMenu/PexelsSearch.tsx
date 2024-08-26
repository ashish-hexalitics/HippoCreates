import { FormEvent, useEffect, useState } from "react";
import { searchPhotos } from "../../../_helpers/pexelService";

const PexelsSearch = ({
  onImageSelect,
}: {
  onImageSelect: (imageSrc: string) => void;
}) => {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async (q: string = "background") => {
    try {
      const response = await searchPhotos(q);
      console.log(response);
      setPhotos(response.photos);
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    getData(query);
  };

  const handleImageClick = (imageSrc: string) => {
    onImageSelect(imageSrc);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          placeholder="Search pexels..."
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
          <div
            key={photo.id}
            className="overflow-hidden rounded-md cursor-pointer"
            onClick={() => handleImageClick(photo.src.small)}
          >
            <img
              src={photo.src.small}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PexelsSearch;
