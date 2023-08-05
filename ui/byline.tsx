import { UserButton, UserProfile } from "@clerk/nextjs";
import { VercelLogo } from "./vercel-logo";

export default function Byline({ className }: { className: string }) {
  return (
    <div
      className={`${className} bg-vc-border-gradient inset-x-0 bottom-3 mx-3 rounded-lg p-px shadow-lg shadow-black/20`}
    >
      <div className="flex flex-col justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-1 sm:py-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <UserButton afterSignOutUrl='/dashboard' />
              </div>
              <div className="flex-3 min-w-1">
                <p className="text-sm font-medium text-gray-100 truncate dark:text-white">
                  khanchitpon156
                </p>
                <p className="text-sm text-yellow-400 truncate dark:text-gray-400">
                  ADMIN
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
