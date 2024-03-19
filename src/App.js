import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import EditEventPage from "./pages/editEvent";
import EventDetailsPage from "./pages/eventDetails";
import EventsPage from "./pages/events";
import NewEventPage from "./pages/newEvent";
import NewsLetterPage from "./pages/newsLetter";
import Layout from "./pages/layout";

// import logo from "./logo.svg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "/events", element: <EditEventPage /> },
      { path: "events/:eventId", element: <EventDetailsPage /> },
      { path: "events", element: <EventsPage /> },
      { path: "newEvent", element: <NewEventPage /> },
      { path: "newsLetter", element: <NewsLetterPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
