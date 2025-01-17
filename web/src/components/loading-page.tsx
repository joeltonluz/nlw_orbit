export function LoadingPage() {
  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
      <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="h-8 w-8 bg-black rounded-full animate-bounce" />
      {/* <span className="bg-black">Loading...</span> */}
    </div>
  );
}
