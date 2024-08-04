import { Outlet } from "react-router-dom";
import Map from "../Data/Data";
import { useBookmarks } from "../context/BookmarkListContext";

function BookmarkLayout() {
  const { bookmarks } = useBookmarks();

  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerLocations={bookmarks} />
    </div>
  );
}

export default BookmarkLayout;
