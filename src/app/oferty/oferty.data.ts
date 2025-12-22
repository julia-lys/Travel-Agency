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
    opisKrotki: 'Lorem ipsum dolor sit amet.',
    opisDlugi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue libero condimentum, auctor nunc ut, vehicula diam. Nam fringilla justo ac augue fringilla, non fringilla urna rutrum. Praesent id elit lobortis, convallis neque a, porta diam. Vivamus facilisis, arcu rhoncus malesuada scelerisque, urna massa semper tellus, ut condimentum sapien orci et nisl. Pellentesque nec nulla tincidunt, condimentum odio faucibus, aliquet erat. Ut vestibulum congue sapien, quis elementum nulla accumsan quis. Nunc tincidunt lectus eleifend molestie eleifend. Aenean molestie quam lectus, id vulputate libero facilisis eu. Praesent dui nisi, pretium a pulvinar eu, pellentesque nec mi. In a ipsum tempus, feugiat lectus rhoncus, commodo sem. Nulla massa erat, rutrum et commodo in, luctus id magna. Nam eleifend quam quis libero sollicitudin, nec auctor nunc pellentesque. Praesent viverra quis metus ut molestie. Nunc a fringilla ipsum, eu rhoncus nulla. Nulla posuere mollis felis, eu ornare ante sagittis quis.',
    cena: 2500,
    obrazekUrl: 'grecja.jpg'
  },
  {
    id: 2,
    tytul: 'Epicki Egipt',
    opisKrotki: 'Lorem ipsum dolor sit amet.',
    opisDlugi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue libero condimentum, auctor nunc ut, vehicula diam. Nam fringilla justo ac augue fringilla, non fringilla urna rutrum. Praesent id elit lobortis, convallis neque a, porta diam. Vivamus facilisis, arcu rhoncus malesuada scelerisque, urna massa semper tellus, ut condimentum sapien orci et nisl. Pellentesque nec nulla tincidunt, condimentum odio faucibus, aliquet erat. Ut vestibulum congue sapien, quis elementum nulla accumsan quis. Nunc tincidunt lectus eleifend molestie eleifend. Aenean molestie quam lectus, id vulputate libero facilisis eu. Praesent dui nisi, pretium a pulvinar eu, pellentesque nec mi. In a ipsum tempus, feugiat lectus rhoncus, commodo sem. Nulla massa erat, rutrum et commodo in, luctus id magna. Nam eleifend quam quis libero sollicitudin, nec auctor nunc pellentesque. Praesent viverra quis metus ut molestie. Nunc a fringilla ipsum, eu rhoncus nulla. Nulla posuere mollis felis, eu ornare ante sagittis quis.',
    cena: 1900,
    obrazekUrl: 'egipt.jpg'
  },
  {
    id: 3,
    tytul: 'Wyjątkowe Włochy',
    opisKrotki: 'Lorem ipsum dolor sit amet.',
    opisDlugi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue libero condimentum, auctor nunc ut, vehicula diam. Nam fringilla justo ac augue fringilla, non fringilla urna rutrum. Praesent id elit lobortis, convallis neque a, porta diam. Vivamus facilisis, arcu rhoncus malesuada scelerisque, urna massa semper tellus, ut condimentum sapien orci et nisl. Pellentesque nec nulla tincidunt, condimentum odio faucibus, aliquet erat. Ut vestibulum congue sapien, quis elementum nulla accumsan quis. Nunc tincidunt lectus eleifend molestie eleifend. Aenean molestie quam lectus, id vulputate libero facilisis eu. Praesent dui nisi, pretium a pulvinar eu, pellentesque nec mi. In a ipsum tempus, feugiat lectus rhoncus, commodo sem. Nulla massa erat, rutrum et commodo in, luctus id magna. Nam eleifend quam quis libero sollicitudin, nec auctor nunc pellentesque. Praesent viverra quis metus ut molestie. Nunc a fringilla ipsum, eu rhoncus nulla. Nulla posuere mollis felis, eu ornare ante sagittis quis.',
    cena: 1900,
    obrazekUrl: 'wlochy.jpg'
  },
  {
    id: 4,
    tytul: 'Piękna Portugalia',
    opisKrotki: 'Lorem ipsum dolor sit amet.',
    opisDlugi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue libero condimentum, auctor nunc ut, vehicula diam. Nam fringilla justo ac augue fringilla, non fringilla urna rutrum. Praesent id elit lobortis, convallis neque a, porta diam. Vivamus facilisis, arcu rhoncus malesuada scelerisque, urna massa semper tellus, ut condimentum sapien orci et nisl. Pellentesque nec nulla tincidunt, condimentum odio faucibus, aliquet erat. Ut vestibulum congue sapien, quis elementum nulla accumsan quis. Nunc tincidunt lectus eleifend molestie eleifend. Aenean molestie quam lectus, id vulputate libero facilisis eu. Praesent dui nisi, pretium a pulvinar eu, pellentesque nec mi. In a ipsum tempus, feugiat lectus rhoncus, commodo sem. Nulla massa erat, rutrum et commodo in, luctus id magna. Nam eleifend quam quis libero sollicitudin, nec auctor nunc pellentesque. Praesent viverra quis metus ut molestie. Nunc a fringilla ipsum, eu rhoncus nulla. Nulla posuere mollis felis, eu ornare ante sagittis quis.',
    cena: 2000,
    obrazekUrl: 'portugalia.jpg'
  },
  {
    id: 5,
    tytul: 'Finezycja Francja',
    opisKrotki: 'Lorem ipsum dolor sit amet.',
    opisDlugi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue libero condimentum, auctor nunc ut, vehicula diam. Nam fringilla justo ac augue fringilla, non fringilla urna rutrum. Praesent id elit lobortis, convallis neque a, porta diam. Vivamus facilisis, arcu rhoncus malesuada scelerisque, urna massa semper tellus, ut condimentum sapien orci et nisl. Pellentesque nec nulla tincidunt, condimentum odio faucibus, aliquet erat. Ut vestibulum congue sapien, quis elementum nulla accumsan quis. Nunc tincidunt lectus eleifend molestie eleifend. Aenean molestie quam lectus, id vulputate libero facilisis eu. Praesent dui nisi, pretium a pulvinar eu, pellentesque nec mi. In a ipsum tempus, feugiat lectus rhoncus, commodo sem. Nulla massa erat, rutrum et commodo in, luctus id magna. Nam eleifend quam quis libero sollicitudin, nec auctor nunc pellentesque. Praesent viverra quis metus ut molestie. Nunc a fringilla ipsum, eu rhoncus nulla. Nulla posuere mollis felis, eu ornare ante sagittis quis.',
    cena: 2000,
    obrazekUrl: 'francja.jpg'
  },
  {
    id: 6,
    tytul: 'Niesamowite Niemcy',
    opisKrotki: 'Lorem ipsum dolor sit amet.',
    opisDlugi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue libero condimentum, auctor nunc ut, vehicula diam. Nam fringilla justo ac augue fringilla, non fringilla urna rutrum. Praesent id elit lobortis, convallis neque a, porta diam. Vivamus facilisis, arcu rhoncus malesuada scelerisque, urna massa semper tellus, ut condimentum sapien orci et nisl. Pellentesque nec nulla tincidunt, condimentum odio faucibus, aliquet erat. Ut vestibulum congue sapien, quis elementum nulla accumsan quis. Nunc tincidunt lectus eleifend molestie eleifend. Aenean molestie quam lectus, id vulputate libero facilisis eu. Praesent dui nisi, pretium a pulvinar eu, pellentesque nec mi. In a ipsum tempus, feugiat lectus rhoncus, commodo sem. Nulla massa erat, rutrum et commodo in, luctus id magna. Nam eleifend quam quis libero sollicitudin, nec auctor nunc pellentesque. Praesent viverra quis metus ut molestie. Nunc a fringilla ipsum, eu rhoncus nulla. Nulla posuere mollis felis, eu ornare ante sagittis quis.',
    cena: 2000,
    obrazekUrl: 'niemcy.jpg'
  },
  {
    id: 7,
    tytul: 'Cudowne Czechy',
    opisKrotki: 'Lorem ipsum dolor sit amet.',
    opisDlugi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue libero condimentum, auctor nunc ut, vehicula diam. Nam fringilla justo ac augue fringilla, non fringilla urna rutrum. Praesent id elit lobortis, convallis neque a, porta diam. Vivamus facilisis, arcu rhoncus malesuada scelerisque, urna massa semper tellus, ut condimentum sapien orci et nisl. Pellentesque nec nulla tincidunt, condimentum odio faucibus, aliquet erat. Ut vestibulum congue sapien, quis elementum nulla accumsan quis. Nunc tincidunt lectus eleifend molestie eleifend. Aenean molestie quam lectus, id vulputate libero facilisis eu. Praesent dui nisi, pretium a pulvinar eu, pellentesque nec mi. In a ipsum tempus, feugiat lectus rhoncus, commodo sem. Nulla massa erat, rutrum et commodo in, luctus id magna. Nam eleifend quam quis libero sollicitudin, nec auctor nunc pellentesque. Praesent viverra quis metus ut molestie. Nunc a fringilla ipsum, eu rhoncus nulla. Nulla posuere mollis felis, eu ornare ante sagittis quis.',
    cena: 2000,
    obrazekUrl: 'czechy.jpg'
  },
   {
    id: 8,
    tytul: 'Luksusowy Luxemburg',
    opisKrotki: 'Lorem ipsum dolor sit amet.',
    opisDlugi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue libero condimentum, auctor nunc ut, vehicula diam. Nam fringilla justo ac augue fringilla, non fringilla urna rutrum. Praesent id elit lobortis, convallis neque a, porta diam. Vivamus facilisis, arcu rhoncus malesuada scelerisque, urna massa semper tellus, ut condimentum sapien orci et nisl. Pellentesque nec nulla tincidunt, condimentum odio faucibus, aliquet erat. Ut vestibulum congue sapien, quis elementum nulla accumsan quis. Nunc tincidunt lectus eleifend molestie eleifend. Aenean molestie quam lectus, id vulputate libero facilisis eu. Praesent dui nisi, pretium a pulvinar eu, pellentesque nec mi. In a ipsum tempus, feugiat lectus rhoncus, commodo sem. Nulla massa erat, rutrum et commodo in, luctus id magna. Nam eleifend quam quis libero sollicitudin, nec auctor nunc pellentesque. Praesent viverra quis metus ut molestie. Nunc a fringilla ipsum, eu rhoncus nulla. Nulla posuere mollis felis, eu ornare ante sagittis quis.',
    cena: 2000,
    obrazekUrl: 'luxemburg.jpg'
  },
   {
    id: 9,
    tytul: 'Hazardowa Holandia',
    opisKrotki: 'Lorem ipsum dolor sit amet.',
    opisDlugi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue libero condimentum, auctor nunc ut, vehicula diam. Nam fringilla justo ac augue fringilla, non fringilla urna rutrum. Praesent id elit lobortis, convallis neque a, porta diam. Vivamus facilisis, arcu rhoncus malesuada scelerisque, urna massa semper tellus, ut condimentum sapien orci et nisl. Pellentesque nec nulla tincidunt, condimentum odio faucibus, aliquet erat. Ut vestibulum congue sapien, quis elementum nulla accumsan quis. Nunc tincidunt lectus eleifend molestie eleifend. Aenean molestie quam lectus, id vulputate libero facilisis eu. Praesent dui nisi, pretium a pulvinar eu, pellentesque nec mi. In a ipsum tempus, feugiat lectus rhoncus, commodo sem. Nulla massa erat, rutrum et commodo in, luctus id magna. Nam eleifend quam quis libero sollicitudin, nec auctor nunc pellentesque. Praesent viverra quis metus ut molestie. Nunc a fringilla ipsum, eu rhoncus nulla. Nulla posuere mollis felis, eu ornare ante sagittis quis.',
    cena: 2000,
    obrazekUrl: 'holandia.jpg'
  },
   {
    id: 10,
    tytul: 'Malownicze Monako',
    opisKrotki: 'Lorem ipsum dolor sit amet.',
    opisDlugi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue libero condimentum, auctor nunc ut, vehicula diam. Nam fringilla justo ac augue fringilla, non fringilla urna rutrum. Praesent id elit lobortis, convallis neque a, porta diam. Vivamus facilisis, arcu rhoncus malesuada scelerisque, urna massa semper tellus, ut condimentum sapien orci et nisl. Pellentesque nec nulla tincidunt, condimentum odio faucibus, aliquet erat. Ut vestibulum congue sapien, quis elementum nulla accumsan quis. Nunc tincidunt lectus eleifend molestie eleifend. Aenean molestie quam lectus, id vulputate libero facilisis eu. Praesent dui nisi, pretium a pulvinar eu, pellentesque nec mi. In a ipsum tempus, feugiat lectus rhoncus, commodo sem. Nulla massa erat, rutrum et commodo in, luctus id magna. Nam eleifend quam quis libero sollicitudin, nec auctor nunc pellentesque. Praesent viverra quis metus ut molestie. Nunc a fringilla ipsum, eu rhoncus nulla. Nulla posuere mollis felis, eu ornare ante sagittis quis.',
    cena: 2000,
    obrazekUrl: 'monako.jpg'
  },
   {
    id: 11,
    tytul: 'Atrakcyjna Andora',
    opisKrotki: 'Lorem ipsum dolor sit amet.',
    opisDlugi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue libero condimentum, auctor nunc ut, vehicula diam. Nam fringilla justo ac augue fringilla, non fringilla urna rutrum. Praesent id elit lobortis, convallis neque a, porta diam. Vivamus facilisis, arcu rhoncus malesuada scelerisque, urna massa semper tellus, ut condimentum sapien orci et nisl. Pellentesque nec nulla tincidunt, condimentum odio faucibus, aliquet erat. Ut vestibulum congue sapien, quis elementum nulla accumsan quis. Nunc tincidunt lectus eleifend molestie eleifend. Aenean molestie quam lectus, id vulputate libero facilisis eu. Praesent dui nisi, pretium a pulvinar eu, pellentesque nec mi. In a ipsum tempus, feugiat lectus rhoncus, commodo sem. Nulla massa erat, rutrum et commodo in, luctus id magna. Nam eleifend quam quis libero sollicitudin, nec auctor nunc pellentesque. Praesent viverra quis metus ut molestie. Nunc a fringilla ipsum, eu rhoncus nulla. Nulla posuere mollis felis, eu ornare ante sagittis quis.',
    cena: 2000,
    obrazekUrl: 'andora.jpg'
  },
   {
    id: 12,
    tytul: 'Legendarny Liechtenstein',
    opisKrotki: 'Lorem ipsum dolor sit amet.',
    opisDlugi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue libero condimentum, auctor nunc ut, vehicula diam. Nam fringilla justo ac augue fringilla, non fringilla urna rutrum. Praesent id elit lobortis, convallis neque a, porta diam. Vivamus facilisis, arcu rhoncus malesuada scelerisque, urna massa semper tellus, ut condimentum sapien orci et nisl. Pellentesque nec nulla tincidunt, condimentum odio faucibus, aliquet erat. Ut vestibulum congue sapien, quis elementum nulla accumsan quis. Nunc tincidunt lectus eleifend molestie eleifend. Aenean molestie quam lectus, id vulputate libero facilisis eu. Praesent dui nisi, pretium a pulvinar eu, pellentesque nec mi. In a ipsum tempus, feugiat lectus rhoncus, commodo sem. Nulla massa erat, rutrum et commodo in, luctus id magna. Nam eleifend quam quis libero sollicitudin, nec auctor nunc pellentesque. Praesent viverra quis metus ut molestie. Nunc a fringilla ipsum, eu rhoncus nulla. Nulla posuere mollis felis, eu ornare ante sagittis quis.',
    cena: 2000,
    obrazekUrl: 'liechtenstein.jpg'
  }
];