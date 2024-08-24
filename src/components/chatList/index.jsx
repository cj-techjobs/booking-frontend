import React, { useEffect, useState } from "react";
import timeTransform from "../../functions/timeTransform";
import Image from "next/image";

const ChatList = () => {
  const [active, setActive] = useState(0);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const user = [
      {
        profileUrl: ``,
        name: `Kartik`,
        message: `Will come today at 4pm`,
        status: true,
        lastUpdated: new Date().getTime() - 86400,
        bgColor: `#ffd5af`,
      },
      {
        profileUrl: ``,
        name: `David putar`,
        message: `I am intrested in buying this AC`,
        status: false,
        lastUpdated: new Date().getTime() - 8640000,
        bgColor: `#d3c1fa`,
      },
      {
        profileUrl: ``,
        name: `Gautam`,
        message: `Can we make it at 8L`,
        status: true,
        lastUpdated: new Date().getTime() - 864000,
        bgColor: `#ff56a5`,
      },
    ];

    setUserList(user);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {userList.map((m, i) => (
        <div
          onClick={(e) => setActive(i)}
          key={i}
          className="flex gap-2 p-4 items-center rounded-lg cursor-pointer shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          style={{ background: active === i ? `#fff0e8` : `white` }}
        >
          <div
            className="w-12 h-12 rounded-[1rem] flex items-center justify-center"
            style={{ backgroundColor: m.bgColor }}
          >
            {m?.profileUrl ? (
              <Image width={20} height={20} src={m?.profileUrl} alt="" />
            ) : (
              <p className="text-xl text-white">{m?.name.charAt(0)}</p>
            )}
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-bold">{m?.name}</p>
              <div
                style={{ backgroundColor: m.status ? "green" : "red" }}
                className="w-2 h-2 rounded-full "
              ></div>
            </div>
            <div className="flex justify-between">
              <p className="">{m?.message}</p>
              <p className="">{timeTransform(m?.lastUpdated)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
