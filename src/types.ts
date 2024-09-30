export type CharacterType = {
  id?: string;
  image: string;
  name: string;
  origin: {
    _typename: string;
    name: string;
  };
  status: string;
  _typename?: string;
  species: string;
};
