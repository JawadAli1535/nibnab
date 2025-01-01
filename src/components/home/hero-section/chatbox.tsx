import Image from "next/image";

interface ChatBoxProps {
  name: string;
  text: string;
  image: string;
  time: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ name, text, image, time }) => {
  return (
    <div className="w-full p-3 flex items-center gap-[11.34px]">
      <Image src={image} alt="profile" width={39} height={39} />
      <div className="">
        <p className="text-sm text-blackMain font-medium whitespace-nowrap">
          {name}
        </p>
        <p className="text-[11px] text-blackMain font-light whitespace-nowrap">
          {text}
        </p>
      </div>
      <div className="text-[11px] text-gray font-light whitespace-nowrap flex-1 text-right">
        {time === "Today" && (
          <span className="bg-redMain text-white text-[9px] px-[2px] rounded-[2px] mr-[2px] h-[11px] w-[12px] inline-block text-center">
            1
          </span>
        )}
        {time}
      </div>
    </div>
  );
};
export default ChatBox;