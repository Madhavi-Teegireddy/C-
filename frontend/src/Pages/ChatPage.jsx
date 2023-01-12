import { Center,Box, Flex } from "@chakra-ui/layout";
import { useState} from "react";
import ChatBox from "../Components/miscellaneous/ChatBox";
import MyChats from "../Components/MyChats";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div  style={{ width: "100%" }}>
      {user && <SideDrawer />}
      
      <Flex d="flex" justifyContent="space-between" w="100%"
      h="90.5vh"
      // h="85vh"
       p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />

        )}
      </Flex>
    </div>
  );
};

export default ChatPage;