export interface Oferta {
  id: number;
  tytul: string;
  opisKrotki: string;
  opisDlugi: string;
  cena: number;
  obrazekUrl: string;
}

export const OFERTY: Oferta[] = [
  {
    id: 1,
    tytul: 'Gorąca Grecja',
    opisKrotki: 'Piaszczyste plaże i błękitne morze.',
    opisDlugi: 'Pełny opis wycieczki do Grecji z planem zwiedzania Aten i wypoczynkiem na Krecie...',
    cena: 2500,
    obrazekUrl: 'grecja.jpg'
  },
  {
    id: 2,
    tytul: 'Tajemniczy Egipt',
    opisKrotki: 'Piramidy, sfinks i nurkowanie!',
    opisDlugi: 'Niesamowita przygoda w kraju faraonów. All inclusive w Hurghadzie...',
    cena: 1900,
    obrazekUrl: 'egipt.jpg'
  },
  {
    id: 3,
    tytul: 'Romantyczne Włochy',
    opisKrotki: 'Urocze domki i pyszne jedzenie.',
    opisDlugi: 'mamma mia',
    cena: 1900,
    obrazekUrl: 'wlochy.jpg'
  },
  {
    id: 4,
    tytul: 'Zajwiskowa Portugalia',
    opisKrotki: 'Opis krotki',
    opisDlugi: 'Opis dlugi',
    cena: 2000,
    obrazekUrl: 'portugalia.jpg'
  },
  {
    id: 5,
    tytul: 'Francja elegancja',
    opisKrotki: 'Opis krotki',
    opisDlugi: 'Opis dlugi',
    cena: 2000,
    obrazekUrl: 'francja.jpg'
  },
  {
    id: 6,
    tytul: 'Niemcy',
    opisKrotki: 'Opis krotki',
    opisDlugi: 'Opis dlugi',
    cena: 2000,
    obrazekUrl: 'niemcy.jpg'
  },
  {
    id: 7,
    tytul: 'Czechy',
    opisKrotki: 'Opis krotki',
    opisDlugi: 'Opis dlugi',
    cena: 2000,
    obrazekUrl: 'czechy.jpg'
  },
   {
    id: 8,
    tytul: 'Luxemburg',
    opisKrotki: 'Opis krotki',
    opisDlugi: 'Opis dlugi',
    cena: 2000,
    obrazekUrl: 'luxemburg.jpg'
  },
   {
    id: 9,
    tytul: 'Holandia',
    opisKrotki: 'Opis krotki',
    opisDlugi: 'Opis dlugi',
    cena: 2000,
    obrazekUrl: 'holandia.jpg'
  },
   {
    id: 10,
    tytul: 'Monako',
    opisKrotki: 'Opis krotki',
    opisDlugi: 'Opis dlugi',
    cena: 2000,
    obrazekUrl: 'monako.jpg'
  },
   {
    id: 11,
    tytul: 'Andora',
    opisKrotki: 'Opis krotki',
    opisDlugi: 'Opis dlugi',
    cena: 2000,
    obrazekUrl: 'andora.jpg'
  },
   {
    id: 12,
    tytul: 'Liechtenstein',
    opisKrotki: 'Opis krotki',
    opisDlugi: 'Opis dlugi',
    cena: 2000,
    obrazekUrl: 'liechtenstein.jpg'
  }
];