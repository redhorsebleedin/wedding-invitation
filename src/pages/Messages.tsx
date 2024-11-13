import { useContext, useEffect, useState } from "react";
import {
  HiChevronLeft,
  HiMiniUserCircle,
  HiChevronRight,
  HiUserCircle,
  HiOutlineClock,
  HiMiniCheck,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { States } from "../App";
import {
  collection,
  getDocs,
  addDoc,
  Timestamp,
  orderBy,
  query,
} from "firebase/firestore/lite";
import { v4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

async function getMessages(db) {
  const messageCol = collection(db, "messages");
  const order = orderBy("created", "desc");
  const q = query(messageCol, order);
  const snapshot = await getDocs(q);
  const res = snapshot.docs.map((doc) => doc.data());
  return res;
}

const Messages = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const state = useContext(States);

  useEffect(() => {
    getMessages(state.db).then((data) => {
      setMessages(data);
    });
  }, [state.db]);

  const onSend = async () => {
    setIsSending(true);
    setMessage("");
    const sendingMessage = {
      id: v4(),
      message,
      name: "Acong",
      created: Timestamp.now(),
    };
    setMessages([sendingMessage, ...messages]);
    try {
      const col = collection(state.db, "messages");
      await addDoc(col, sendingMessage);
    } catch (err) {
      //noop
    } finally {
      setIsSending(false);
    }
  };

  console.log(isSending);
  const itemVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-w-[400px] h-[100svh] max-w-[600px] m-auto flex flex-col justify-between">
      <div className="flex flex-row items-center gap-2 px-4 py-3 bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <button onClick={() => navigate(-1)}>
          <HiChevronLeft color="#29296d" size={32} />
        </button>
        <HiMiniUserCircle color="#29296d" size={32} />
        <p className="text-[#29296d] font-bold ml-4">Kind words</p>
      </div>
      <div className="w-full flex flex-col-reverse items-end flex-1 py-4 gap-2 overflow-scroll">
        <AnimatePresence>
          {messages.map((message, i) => (
            <motion.div
              className="relative flex flex-row items-end px-4 gap-2"
              key={message.id}
              variants={itemVariants}
              initial="initial"
              animate="animate"
            >
              <div className="bg-white shadow-3xl rounded-t-lg rounded-bl-lg rounded-br-sm p-2">
                <p className="text-[#df3708] text-sm">{message?.name}</p>
                <p className="text-[#333] text-sm">{message?.message}</p>
                <div className="flex flex-row justify-end items-start mt-1 gap-1">
                  <p className="text-[#bebebe] text-xs">
                    {new Date(message?.created?.toDate()).toLocaleDateString(
                      "id-ID",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </p>
                  {isSending && i === messages.length - 1 ? (
                    <HiOutlineClock color="#bebebe" size={14} />
                  ) : (
                    <HiMiniCheck color="#bebebe" size={14} />
                  )}
                </div>
              </div>
              <div className="w-[30px]">
                <HiUserCircle color="#29296d" size={40} />
              </div>
              <div className="absolute right-12 bottom-[2.5px] bg-white h-4 w-4 rotate-[45deg] -z-[1] rounded-sm"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex w-full sm:w-[600px]">
        <div className="w-full flex flex-row items-center gap-2 px-2 mb-2 py-2 mx-2 box-border bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_5px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl">
          <input
            type="text"
            name="name"
            id="name"
            className="bg-[#eee] rounded-xl h-12 w-full px-4 text-sm"
            placeholder="Sampaikan pesan kamu (yang baik-baik yah)"
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="off"
            value={message}
          />
          <button
            disabled={!message}
            className="w-16 h-full bg-[#df3708] flex items-center justify-center rounded-full active:opacity-70 disabled:opacity-50"
            onClick={onSend}
          >
            <HiChevronRight color="white" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
