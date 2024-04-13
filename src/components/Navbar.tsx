import { Button } from "@mui/material";
import { FiList } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../assets/style/navbar.scss";
import {
  CONSTRUCTIONS_LIST,
  GENERATE_ASK,
  MAIN,
  WORDS_LIST,
} from "../router/configRoutes";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {navbarItems.map((item) => {
          return (
            <Link key={item.id} to={item.link} className="navbar__item">
              <Button>{item.name}</Button>
            </Link>
          );
        })}
      </div>
      <div className="burger-menu">
        <FiList></FiList>
      </div>
    </>
  );
};

const navbarItems = [
  { id: 1, name: "Главная", link: MAIN },
  { id: 2, name: "Генератор вопроса", link: GENERATE_ASK },
  { id: 3, name: "Список слов", link: WORDS_LIST },
  { id: 4, name: "Список конструкций", link: CONSTRUCTIONS_LIST },
];

export default Navbar;
