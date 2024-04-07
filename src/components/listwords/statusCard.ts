import { StatusWord } from "../../interfaces/IWord";

export const STATUS = (status: StatusWord) => {
  switch (status) {
    case "know":
      return "know";
    case "partial know":
      return "partial-know";
    case "not know":
      return "not-know";
  }
};
