type IconProps = React.HTMLAttributes<SVGElement>;

const Hamburger = (props: IconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 20 20"
    focusable="false"
    aria-hidden="true"
    height="20px"
    width="20px"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0px"
    ></path>
  </svg>
);

export default Hamburger;
