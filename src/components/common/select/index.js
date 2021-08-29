import classNames from "common/class-names";
import { SelectorIcon } from "@heroicons/react/outline";

export default function Select({ className, children, icon, ...props }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 pl-2 flex items-center">
        {icon}
      </div>
      <select
        className={classNames(
          className,
          "px-10 py-3 block w-min rounded border-gray2 bg-gray0 bg-none focus:outline-none focus:ring-blue5 focus:border-blue5"
        )}
        {...props}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 pr-2 flex items-center">
        <SelectorIcon className="h-5" aria-hidden="true" />
      </div>
    </div>
  );
}
