import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  CONSTRUCTIONS_LIST,
  GENERATE_ASK,
  MAIN,
  WORDS_LIST,
} from "../router/configRoutes";

const Navbar = () => {
  return (
    <div>
      {navbarItems.map((item) => {
        return (
          <Link key={item.id} to={item.link}>
            <Button>{item.name}</Button>
          </Link>
        );
      })}
    </div>
  );
};

const navbarItems = [
  { id: 1, name: "Главная", link: MAIN },
  { id: 2, name: "Генератор вопроса", link: GENERATE_ASK },
  { id: 3, name: "Список слов", link: WORDS_LIST },
  { id: 4, name: "Список конструкций", link: CONSTRUCTIONS_LIST },
];

export default Navbar;
