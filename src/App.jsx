import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header";
import LocationList from "./components/LocationList/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import HotelsProvider from "./components/context/HotelsProvider";
import SingleHotel from "./components/SingleHotel/SingleHotel";
import BookmarkLayout from "./components/BookmarkLayout/BookmarkLayout";
import BookmarkListProvider from "./components/context/BookmarkListContext";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import SingleBookmark from "./components/SingleBookmark/SingleBookmark";
import AddNewBookmark from "./components/AddNewBookmark/AddNewBookmark";
import Login from "./components/Login/Login";
import AuthProvider from "./components/context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";


function App() {
  return (
    <AuthProvider>
      <BookmarkListProvider>
        <HotelsProvider>
          <Toaster />
          <Header />
          <Routes>
            <Route path="/" element={<LocationList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hotels" element={<AppLayout />}>
              <Route index element={<Hotels />}></Route>
              <Route path=":id" element={<SingleHotel />}></Route>
            </Route>
            <Route
              path="/bookmarks"
              element={
                <ProtectedRoute>
                  <BookmarkLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Bookmarks />}></Route>
              <Route path=":id" element={<SingleBookmark />}></Route>
              <Route path="add" element={<AddNewBookmark />}></Route>
            </Route>
          </Routes>
        </HotelsProvider>
      </BookmarkListProvider>
    </AuthProvider>
  );
}

export default App;
