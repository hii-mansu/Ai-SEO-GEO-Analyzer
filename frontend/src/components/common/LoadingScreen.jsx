const LoadingScreen = ({ message }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>

        <h2 className="text-2xl font-semibold">
          {message}
        </h2>
      </div>
    </div>
  );
};

export default LoadingScreen;