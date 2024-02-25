type IconProps = React.HTMLAttributes<SVGElement>;

const Medium = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M0 0v32h32V0zm26.583 7.583l-1.714 1.646a.49.49 0 0 0-.193.479v12.089a.497.497 0 0 0 .193.484l1.672 1.646v.359h-8.427v-.359l1.734-1.688c.172-.172.172-.219.172-.479v-9.776l-4.828 12.26h-.651l-5.62-12.26v8.219c-.047.344.068.693.307.943l2.26 2.74v.359H5.087v-.359l2.26-2.74c.24-.25.349-.599.286-.943v-9.5A.816.816 0 0 0 7.362 10L5.357 7.583v-.365h6.229l4.818 10.568l4.234-10.568h5.943z"
    ></path>
  </svg>
);

export default Medium;
