function Dialog() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute bg-black bg-opacity-50 inset-0"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p>This is the content of the modal.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Dialog;
