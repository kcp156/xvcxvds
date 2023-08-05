

export type Item = {
  name: string;
  slug: string;
  description?: string;
  prizedrawtime?:string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'หน้า',
    items: [
      {      
        name: 'หน้าหลัก',
        slug: 'dashboard',
        description: 'เวลาปิด 19:10',
        prizedrawtime:'19:30',
      },
      {
        name: 'รายงานการแทง',
        slug: 'manage-users',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'รายงานสรุป',
        slug: 'upload',
      },
      {
        name: 'จัดการสมาชิก',
        slug: 'manage-members',
      },      {
        name: 'ตั้งค่าสมาชิก',
        slug: 'membership-settings',
      },
    ],
  },
  {
    name: '_',
    items: [

      {
        name: 'ออกจากระบบ',
        slug: 'error-handling',
       
      },

    ],
  },



];
