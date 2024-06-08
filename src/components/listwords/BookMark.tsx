import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import "../../assets/style/bookMark.scss";

const BookMark = ({ isFavourite }: { isFavourite: boolean | null }) => {
  function changeFavourite() {}

  return (
    <div onClick={changeFavourite} className="bookmark">
      {isFavourite ? (
        <FaBookmark></FaBookmark>
      ) : (
        <FaRegBookmark></FaRegBookmark>
      )}
    </div>
  );
};

export default BookMark;
