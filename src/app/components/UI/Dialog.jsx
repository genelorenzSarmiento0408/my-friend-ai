import Button from "./Button";

function Dialog({ isOpen, setIsOpen }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 ">
          <div className="flex items-center justify-center absolute bg-black bg-opacity-50 inset-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">My Friend AI</h2>
              <p className="mb-4">Thank You for Waitlisting!</p>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dialog;
