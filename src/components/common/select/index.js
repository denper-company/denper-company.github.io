import classNames from "common/class-names";
import { ReactComponent as UnfoldMore } from "@material-design-icons/svg/round/unfold_more.svg";

export default function Select({ className, children, icon, ...props }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
        {icon}
      </div>
      <select
        className={classNames(
          className,
          "block w-min rounded border-gray2 bg-gray0 bg-none px-10 py-3 focus:border-blue5 focus:outline-none focus:ring-blue5"
        )}
        {...props}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <UnfoldMore className="h-5 fill-current" aria-hidden="true" />
      </div>
    </div>
  );
}
