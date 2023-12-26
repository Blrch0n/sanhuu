export default function Loading() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-fit h-fit flex flex-col items-center">
        <img src="logo.svg" className="max-w-[172.23px] max-h-[64px]"></img>
        <span className="loading loading-spinner loading-md"></span>
        <p>Түр хүлээнэ үү...</p>
      </div>
    </section>
  );
}
