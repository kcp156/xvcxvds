import Image from 'next/image'
import { lotterylist } from '../../lib/lotterylist';
import Link from 'next/link';
 
export default function ManageUsersPage() {
  return (
<>
<div className=' pb-3'>
<p className=' text-lg text-gray-900 '>ตั้งค่าสมาชิก</p>
</div>
<div className="relative overflow-x-auto rounded-md shadow-md sm:rounded-md mt-5 p-4">
<div className="space-y-10 text-white ">
        {lotterylist.map((section) => {
          return (
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
                {section.items.map((item) => {
                  return (
                    <div
                    className="group block space-y-1.5 rounded-lg  bg-green-600 px-5 py-3 hover:bg-green-600 shadow-md"
                  >
                      <div className="font-medium text-gray-100 group-hover:text-gray-50">
                        {item.name}
                      </div>

                      {item.cutofftime ? (
                        <div className="text-sm text-gray-100 line-clamp-3 group-hover:text-gray-50">
                       เวลาปิดรับ {item.cutofftime} น.
                        </div>
                      ) : null}
                      {item.prizedrawtime ? (
                        <div className="text-sm text-gray-100 line-clamp-3 group-hover:text-gray-50">
                         เวลาออกผล   {item.prizedrawtime}น.
                        </div>
                      )
                      : null}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
</div>
</>
  )
}