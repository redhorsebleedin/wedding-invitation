import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore/lite";
import { createContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useOutlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Messages from "./pages/Messages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/messages",
    element: <Messages />,
  },
]);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const States = createContext<{
  app: FirebaseApp | null;
  db: Firestore | null;
}>({
  app: null,
  db: null,
});

export default function App() {
  return (
    <States.Provider value={{ app, db }}>
      <RouterProvider router={router} />
    </States.Provider>
  );
}
