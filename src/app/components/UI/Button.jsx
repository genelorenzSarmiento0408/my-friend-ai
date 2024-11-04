/**
 * This is a customizable button, the styling is in the Figma design file
 *
 * See the Color Scheme for the button
 */
export default function Button({ children, className }) {
  return (
    <button
      className={`rounded-3xl bg-main-1 text-accent-blue hover:bg-main-5 p-3 px-6 ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
}
