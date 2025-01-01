"use client";
import { initial, whileInView } from "@/util/constants";
import { motion } from "framer-motion";

interface TitleSectionProps {
  title?: string;
  description?: string;
  customClassName?: string;
  descriptionSmallerScreens?: string;
  children?: React.ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  description,
  customClassName,
  descriptionSmallerScreens,
  children,
}) => {
  return (
    <div className={`w-max text-left ${customClassName}`}>
      <motion.div
        whileInView={whileInView}
        initial={initial}
        viewport={{ once: true }}
        className={`font-semibold text-[32px] md:text-[44px] text-blackMain 2xl:text-[64px] leading-[38px] md:leading-[48px] 2xl:leading-[68px] `}
      >
        {children ?? <h1 dangerouslySetInnerHTML={{ __html: title ?? "" }} />}
      </motion.div>
      <motion.div
        whileInView={whileInView}
        initial={initial}
        viewport={{ once: true }}
        className="text-gray md:text-lg 2xl:text-xl mt-6 "
      >
        {description && (
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="hidden md:block"
          />
        )}
        {descriptionSmallerScreens && (
          <p
            dangerouslySetInnerHTML={{ __html: descriptionSmallerScreens }}
            className="md:hidden block"
          />
        )}
      </motion.div>
    </div>
  );
};
export default TitleSection;
