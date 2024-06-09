import axios, {
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios";
import { IPayload } from "../interfaces/IPayload";

export class HttpClient {
  private static instance: HttpClient;

  private static globalAxiosSettings: CreateAxiosDefaults = {};

  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      withCredentials: true,
      ...HttpClient.globalAxiosSettings,
    });
    this.setHeader("Accept", "application/json");
    this.setHeader("Content-Type", "application/json");
    this.setHeader("x-vercel-protection-bypass", import.meta.env.VITE_API_URL);
  }

  setAxiosResponseInterceptor(
    onFulfilled: (
      value: AxiosResponse
    ) => AxiosResponse | Promise<AxiosResponse>,
    onRejected?: (error: unknown) => Promise<unknown>
  ): this {
    this.axiosInstance.interceptors.response.use(onFulfilled, onRejected);

    return this;
  }

  static setGlobalAxiosSettings(settings: CreateAxiosDefaults) {
    this.globalAxiosSettings = settings;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new HttpClient();
    }

    return this.instance;
  }

  setHeader(key: string, value: string): this {
    this.axiosInstance.defaults.headers.common[key] = value;

    return this;
  }

  removeHeader(key: string): this {
    delete this.axiosInstance.defaults.headers.common[key];

    return this;
  }

  async post(url: string, payload?: IPayload): Promise<AxiosResponse> {
    const response = await this.axiosInstance.post(url, payload);

    return response;
  }

  async get(url: string, payload?: IPayload): Promise<AxiosResponse> {
    const response = await this.axiosInstance.get(url, payload);

    return response;
  }

  async put(url: string, payload?: IPayload): Promise<AxiosResponse> {
    const response = await this.axiosInstance.put(url, payload);

    return response;
  }

  async patch(url: string, payload?: IPayload): Promise<AxiosResponse> {
    const response = await this.axiosInstance.patch(url, payload);

    return response;
  }

  async delete(url: string, payload?: IPayload): Promise<AxiosResponse> {
    const response = await this.axiosInstance.delete(url, payload);

    return response;
  }
}
