export type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};

type Ingredients = {
  malt: Malt[];
  hops: Hops[];
  yeast: string;
};

type Malt = {
  name: string;
  amount: Volume;
};

type Hops = {
  name: string;
  amount: Volume;
};

type Method = {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist?: unknown;
};

type Fermentation = {
  temp: Volume;
};

type MashTemp = {
  temp: Volume;
  duration: number;
};

type Volume = {
  value: number;
  unit: string;
};

type BoilVolume = {
  value: number;
  unit: string;
};
