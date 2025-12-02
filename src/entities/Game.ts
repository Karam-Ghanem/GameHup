import type  Genre  from "./Genre";
import type Platform from "./PlatformParent";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  metacritic: number;
  description_raw: string;
  website:string;
  platforms: { platform: Platform }[];
  genres:Genre[]
}
