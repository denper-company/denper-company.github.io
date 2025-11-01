export default function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m5,1 v10 c-5,0 -5,-5 0,-5 h2 c5,0 5,-5 0,-5 v10" />
    </svg>
  );
}
