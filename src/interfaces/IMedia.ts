export interface IMedia {
  data: IMediaElement[];
}

interface IMediaElement {
  id: number;
  attributes: IMediaAttributes;
}

interface IMediaAttributes extends FormatMedia {
  formats: {
    thumbnail: FormatMedia;
    small: FormatMedia;
    medium: FormatMedia;
  };
}

interface FormatMedia {
  name: string;
  hash: string;
  ext: string; //.jpg
  mime: string; //image/jpeg
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
  alternativeText?: string | null;
  caption?: string | null;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
