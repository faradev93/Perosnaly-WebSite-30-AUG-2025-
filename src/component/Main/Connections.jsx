import { color, motion, scale, spring } from "framer-motion";
import MsgConnectionItem from "./MsgConnectionItem";
import { href } from "react-router-dom";

export default function Connections() {
  return (
    <motion.h2
      initial={{ rotate: -60, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ul className="flex flex-wrap md:gap-4 gap-4">
        <MsgConnectionItem
          AddressSVG={
            "https://www.svgrepo.com/show/364000/telegram-logo-duotone.svg"
          }
          href={"https://t.me/faramarzRk"}
          title={"Telegram Messenger"}
        />
        <MsgConnectionItem
          AddressSVG={"https://www.svgrepo.com/show/500461/whatsapp.svg"}
          href={"https://wa.me/989308908689"}
          title={"WhatsApp Messenger"}
        />
        <MsgConnectionItem
          AddressSVG={"https://www.svgrepo.com/show/510026/instagram.svg"}
          href={"https://www.instagram.com/faramarzrk/"}
          title={"Instagram"}
        />
        <MsgConnectionItem
          AddressSVG={"https://www.svgrepo.com/show/508076/github.svg"}
          href={"https://github.com/faradev93"}
          title={"GitHub"}
        />
        <MsgConnectionItem
          AddressSVG={"https://www.svgrepo.com/show/501613/linkedin.svg"}
          href={
            "https://www.linkedin.com/in/faramarz-rezakhanlou-22a857245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          }
          title={"Linkedin"}
        />
      </ul>
    </motion.h2>
  );
}
