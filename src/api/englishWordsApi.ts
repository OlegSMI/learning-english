import { AxiosError } from "axios";
import { IResponse } from "../interfaces/IResponse";
import { StatusWord } from "../interfaces/IWord";
import { useHttpClient } from "./index";

export const useEnglishWordsAPi = () => {
  const httpClient = useHttpClient();

  const getWords = async (): Promise<Array<unknown>> => {
    try {
      httpClient.setHeader(
        "Authorization",
        `Bearer ${import.meta.env.VITE_API_TOKEN}`
      );
      const response = await httpClient.get("/api/words?populate=*");
      const { data }: { data: Array<unknown> } = response.data;

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error);
      }

      throw error;
    }
  };

  const setNewWord = async (payload: {
    wordId: number | null;
    text: string;
    status: StatusWord;
    russian: string;
    assotiative: string | null;
  }) => {
    console.log({ data: { ...payload } });
    try {
      const { data }: { data: IResponse<never> } = await httpClient.post(
        "/api/words",
        { data: { ...payload } }
      );
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error);
      }

      throw error;
    }
  };

  return {
    getWords,
    setNewWord,
  };
};
