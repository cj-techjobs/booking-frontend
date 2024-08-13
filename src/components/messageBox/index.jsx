import React, { useEffect, useState } from "react";

const MessageBox = () => {
  const [username, setUsername] = useState("Zoya");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const message = [
      {
        currentUser: true,
        message: `Are you sure you want lock this deal for 650 ?`,
      },
      {
        currentUser: true,
        message: `Ok done`,
      },
      {
        currentUser: false,
        message: `Occaecat exercitation laboris in anim`,
        file: {
          url: `file`,
        },
      },
      {
        currentUser: true,
        message: `Personal bid`,
      },
    ];

    setMessages(message);
  }, []);

  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex flex-col flex-1">
        {messages &&
          messages.map((m, i) => (
            <div key={i}>
              {m.currentUser && (
                <div className="flex justify-end mb-4">
                  <div className="flex gap-2 justify-start">
                    <div className="flex flex-col gap-2">
                      {m.file && (
                        <div className="w-[80%] h-[10rem] border rounded-2xl"></div>
                      )}
                      <div className="bg-[#dfdfdf] px-4 py-2 rounded-lg">
                        {m.message}
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#000]"></div>
                  </div>
                </div>
              )}
              {!m.currentUser && (
                <div className="flex gap-2 justify-start">
                  <div className="w-8 h-8 rounded-full bg-[#000]"></div>
                  <div className="flex flex-col gap-2">
                    {m.file && (
                      <div className="w-[80%] h-[10rem] border rounded-2xl"></div>
                    )}
                    <div className="bg-[#f5f1fe] px-4 py-2 rounded-lg">
                      {m.message}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="flex flex-col gap-2 py-4 pb-8 items-center justify-center">
        <p className="text-center">{username} Agreed on the Amount</p>
        <button className="bg-[#849fff] w-max p-2 px-8 rounded-lg text-white">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
