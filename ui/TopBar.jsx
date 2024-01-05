import Image from "next/image";

const TopBar = () => {
  return (
    <div className="bg-[#91D8F7] h-[62px] flex items-center">
      <div className="min-w-[581px] mx-auto flex justify-between items-center">
        {/* logo */}
        <Image
          src="/assets/logo_white.png"
          width={150}
          height={38}
          alt="Logo"
        />
        {/* icons */}
        <div className="p-[9px] h-[35px] w-[35px] flex items-center justify-center rounded-md backdrop-blur-[43px] bg-noti-bell cursor-pointer">
          <Image
            src="/assets/bell.png"
            width={18}
            height={18}
            alt="Notification Bell"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
