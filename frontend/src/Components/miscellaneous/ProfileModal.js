import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        
        <ModalContent h="410px">
          <Center>
          <ModalHeader
            fontSize="40px"
            // fontFamily="Work sans"
            d="flex"
            color="blue.500"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          </Center>
          <ModalCloseButton />
          
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Center>
            <Image
              borderRadius="full"
              boxSize="150px"
              border="1px solid red"
              justifyContent="space-between"
              src={user.pic}
              alt={user.name}
            /></Center>
            <Center>
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              // fontFamily="Work sans"
            >
              Email: {user.email}
            </Text>
            </Center>
          </ModalBody>
          <Center>
          <ModalFooter>
            <Button onClick={onClose} bg="pink">Close</Button>
          </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;