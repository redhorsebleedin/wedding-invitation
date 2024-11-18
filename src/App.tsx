import { FirebaseApp, initializeApp } from "firebase/app";
import {
  collection,
  Firestore,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";
import { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Messages from "./pages/Messages";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <img src="/404.png" />
        404
      </div>
    ),
  },
  {
    path: "/not-found",
    element: (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <img src="/404.png" />
        404
      </div>
    ),
  },
  {
    path: "/:id",
    element: <Home />,
    index: true,
    loader: async ({ params }) => {
      const userDoc = collection(db, "users");
      const q = query(userDoc, where("id", "==", params.id));
      const snap = await getDocs(q);

      if (!snap.empty) {
        const user = snap.docs[0].data();
        localStorage.setItem("id", user?.id);
        return user;
      }

      localStorage.removeItem("id");
      return null;
    },
  },
  {
    path: "/messages",
    element: <Messages />,
  },
]);

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
