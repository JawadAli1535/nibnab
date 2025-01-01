import ChatBox from "./ChatBox";
import { AuthorData } from "@/util/types";

interface NextStepsSectionProps {
  authorA: AuthorData;
  authorB: AuthorData;
}

const NextStepsSection = ({
  authorA,
  authorB
}: NextStepsSectionProps) => {
  const handleChangeoSingleWord = (text: string) => {
    return text.split(" ")[0];
  };

  return (
    <div className="overflow-x-hidden connectivity-insight-bg max-w-[83rem] mx-auto py-[70px] lg:py-[128px] px-[20px] lg:px-[77px] flex items-center justify-center gap-[30px] lg:gap-0 lg:justify-between flex-col lg:flex-row">
      <div className="font-rubik max-w-[484px]">
        <h2 className="text-blackSecondary text-[32px] leading-[36px] md:text-[48px] font-semibold md:leading-[52.8px]">
          What’s Next?
        </h2>
        <p className="mt-[32px] font-normal text-sm md:leading-[25px] md:text-[18px] text-gray">
          Well, that’s up to the two of you. You can contact each other by
          clicking on the buttons to the right here.
        </p>
      </div>
      <div className="flex flex-col gap-[64px] lg:min-w-[720px]">
        <div className="lg:w-[80%]">
          <ChatBox
            content={{
              text: "Hey hey! You can contact me here",
              image: authorA.avatar,
              title: authorA.name,
              href: authorA.profile,
              rowReverse: true,
              contact: `Contact ${handleChangeoSingleWord(authorA.name)}`,
              customCss: "justify-end",
              btnColor: "bg-blue text-white",
            }}
          />
        </div>
        <div className="lg:w-[80%] self-end">
          <ChatBox
            content={{
              text: "Hello, ping me up here!",
              image: authorB.avatar,
              title: authorB.name,
              href: authorB.profile,
              contact: `Contact ${handleChangeoSingleWord(authorB.name)}`,
              customCss: "justify-end",
              sender: "user",
              btnColor: "bg-amber text-white",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NextStepsSection;
