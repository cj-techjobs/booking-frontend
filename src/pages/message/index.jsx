import React from "react";
import ChatList from "../../components/chatList";
import { IoLocationOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { LuSend } from "react-icons/lu";
import MessageBox from "../../components/messageBox";

const Message = () => {
  return (
    <div className="container mx-auto h-[85vh]">
      <div className="container-full w-full h-full flex gap-4">
        <div className="flex basis-1/3 flex-col">
          <div className="flex mb-8">
            <h2 className="font-bold text-xl">Messages</h2>
          </div>
          <ChatList></ChatList>
        </div>
        <div className="flex flex-col basis-2/3 border-l">
          <div className="px-8 py-4 flex gap-2 shadow-[0px_4px_2px_0px_rgba(253,169,196,0.75)]">
            <div className="w-12 h-12 rounded-full bg-[#00000050]"></div>
            <div className="flex flex-col flex-1">
              <p className="font-bold">Zoyaa</p>
              <p className="text-sm text-[#757a87]">active</p>
            </div>
          </div>
          <div className="flex-1">
            <MessageBox></MessageBox>
          </div>
          <div className="flex items-center gap-4 px-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <IoLocationOutline
                  style={{ width: "24px", height: "24px", color: "#FF900E" }}
                ></IoLocationOutline>
              </div>
              <div className="w-6 h-6 flex items-center justify-center">
                <BsEmojiSmile
                  style={{ width: "24px", height: "24px", color: "#FF900E" }}
                ></BsEmojiSmile>
              </div>
              <div className="w-6 h-6 flex items-center justify-center">
                <GrGallery
                  style={{ width: "24px", height: "24px", color: "#FF900E" }}
                ></GrGallery>
              </div>
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Aa"
                className="w-full p-2 bg-[#f3f4f6]"
              />
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <LuSend
                style={{ width: "24px", height: "24px", color: "#FF900E" }}
              ></LuSend>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
