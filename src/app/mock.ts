export type NbaPlayer = {
    id: string;
    name: string;
    points: number;
    rebounds: number;
    assist: number;
    height: number;
    captain: boolean;
    startDate: string;
  };
  
  export const players: Array<NbaPlayer> = [
    {
      id: '1',
      name: 'LeBron James',
      points: 28,
      rebounds: 8,
      assist: 9,
      height: 6.8,
      captain: true,
      startDate: '10/10/2003',
    },
    {
      id: '2',
      name: 'Stephen Curry',
      points: 32,
      rebounds: 6,
      assist: 6,
      height: 6.2,
      captain: true,
      startDate: '11/11/2009',
    },
    {
      id: '3',
      name: 'Kevin Durant',
      points: 29,
      rebounds: 7,
      assist: 5,
      height: 6.9,
      captain: false,
      startDate: '12/12/2007',
    },
    {
      id: '4',
      name: 'Giannis Antetokounmpo',
      points: 27,
      rebounds: 13,
      assist: 6,
      height: 6.11,
      captain: true,
      startDate: '04/04/2013',
    },
    {
      id: '5',
      name: 'Kawhi Leonard',
      points: 26,
      rebounds: 7,
      assist: 5,
      height: 6.7,
      captain: false,
      startDate: '05/05/2011',
    },
    {
      id: '6',
      name: 'Luka Dončić',
      points: 28,
      rebounds: 9,
      assist: 8,
      height: 6.7,
      captain: true,
      startDate: '10/10/2018',
    },
    {
      id: '7',
      name: 'James Harden',
      points: 31,
      rebounds: 6,
      assist: 10,
      height: 6.5,
      captain: false,
      startDate: '10/10/2009',
    },
    {
      id: '8',
      name: 'Anthony Davis',
      points: 24,
      rebounds: 10,
      assist: 3,
      height: 6.1,
      captain: false,
      startDate: '11/11/2012',
    },
    {
      id: '9',
      name: 'Damian Lillard',
      points: 28,
      rebounds: 4,
      assist: 8,
      height: 6.2,
      captain: true,
      startDate: '06/06/2012',
    },
    {
      id: '10',
      name: 'Joel Embiid',
      points: 27,
      rebounds: 11,
      assist: 4,
      height: 7.0,
      captain: true,
      startDate: '10/10/2014',
    },
  ];