export type Item = {
    name: string;
    cutofftime?: string;
    prizedrawtime?:string;
  };

  export const lotterylist: { name: string; items: Item[] }[] = [
    {
      name: 'หน้า',
      items: [
        {      
          name: 'ลาว Extra',
          cutofftime: '08.20',
          prizedrawtime: 'ทุกวัน 08.30',
        },
        {
          name: 'ฮานอยอาเซียน',
          cutofftime: '09.05',
          prizedrawtime: 'ทุกวัน 09.30',
        },
        {
          name: 'ลาว TV ',
          cutofftime: '10:20',
          prizedrawtime: 'ทุกวัน 10:30',
        },
        {
          name: 'ฮานอย HD',
          cutofftime: '11.05',
          prizedrawtime: 'ทุกวัน 11.30',
        },
        {      
            name: 'ลาว Extra',
            cutofftime: '08.20',
            prizedrawtime: 'ทุกวัน 08.30',
          },
          {
            name: 'ฮานอยอาเซียน',
            cutofftime: '09.05',
            prizedrawtime: 'ทุกวัน 09.30',
          },
          {
            name: 'ลาว TV ',
            cutofftime: '10:20',
            prizedrawtime: 'ทุกวัน 10:30',
          },
          {
            name: 'ฮานอย HD',
            cutofftime: '11.05',
            prizedrawtime: 'ทุกวัน 11.30',
          },
      ],
    },
  ];