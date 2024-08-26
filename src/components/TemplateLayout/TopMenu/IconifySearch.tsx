import { useEffect, useState } from "react";

interface IconifyInfo {
  samples: string[];
}

interface APIv2SearchResponse {
  collections: Record<string, IconifyInfo>;
  icons: string[];
  total: number;
}

function IconifySearch({ onIconSelect }: any) {
  const [query, setQuery] = useState("");
  const [collections, setCollections] = useState<
    APIv2SearchResponse["collections"]
  >({});
  const [icons, setIcons] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Add a page state
  const [totalPages, setTotalPages] = useState(1); // Track total number of pages

  const iconsPerPage = 20; // Number of icons per page

  useEffect(() => {
    if (query) {
      fetchIcons(query, page);
    }
  }, [query, page]);

  const fetchIcons = async (query: string, page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.iconify.design/search?query=${query}&limit=${iconsPerPage}&page=${page}&pretty=1`
      );
      const data: APIv2SearchResponse = await response.json();
      setCollections(data.collections);
      setIcons(data.icons);
      setTotalPages(Math.ceil(data.total / iconsPerPage)); // Calculate total pages
    } catch (error) {
      console.error("Error fetching icons:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1); // Reset to the first page on a new search
    fetchIcons(query, 1);
  };
  return (
    <div className="iconify-search-container">
      <form onSubmit={handleSearch} className="flex mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search icons..."
          className="border p-2 rounded-l-md w-full"
        />
        <button
          type="submit"
          className="p-2 bg-primary text-white rounded-r-md"
        >
          Search
        </button>
      </form>

      {loading && <div>Loading...</div>}

      <div
        className="icon-list grid grid-cols-4 gap-4 overflow-y-scroll"
        style={{ maxHeight: "400px" }}
      >
        {icons.length > 0 &&
          icons.map((icon, key) => {
            // const iconSet = icons[key];
            return (
              <div key={key} className="mb-6 p-4 border rounded-md">
                <div className="flex flex-wrap space-x-2 mt-2">
                  <img
                    key={key}
                    src={`https://api.iconify.design/${icon}.svg`}
                    alt={icon}
                    className="w-12 h-12"
                  />
                </div>
              </div>
            );
          })}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls flex justify-center mt-4">
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
          className="p-2 bg-gray-200 rounded-l-md"
        >
          Previous
        </button>
        <span className="p-2 bg-white border">
          {page} / {totalPages}
        </span>
        <button
          onClick={() =>
            setPage((prevPage) => Math.min(prevPage + 1, totalPages))
          }
          disabled={page === totalPages}
          className="p-2 bg-gray-200 rounded-r-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default IconifySearch;
