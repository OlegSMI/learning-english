import GenarateAsk from "../components/GenarateAsk.tsx";
import ListConstructions from "../components/ListConstructions.js";
import ListWords from "../components/ListWords.tsx";
import MainPage from "../components/MainPage.tsx";
import * as configRoutes from "./configRoutes.ts";

export const routes = [
  {
    path: configRoutes.MAIN,
    Component: MainPage,
  },
  {
    path: configRoutes.GENERATE_ASK,
    Component: GenarateAsk,
  },
  {
    path: configRoutes.WORDS_LIST,
    Component: ListWords,
  },

  {
    path: configRoutes.CONSTRUCTIONS_LIST,
    Component: ListConstructions,
  },
];
