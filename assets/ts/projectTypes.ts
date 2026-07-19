export type Source =
  | "personal"
  | "cswork"
  | "educational";

export type Category =
  | "game"
  | "database"
  | "vr"
  | "migration"
  | "software"
  | "webdev"
  | "content"
  | "webdesign";

export interface Project {
  id: string;
  title: string;
  source: Source;
  categories: Category[];
  featured: boolean;
}