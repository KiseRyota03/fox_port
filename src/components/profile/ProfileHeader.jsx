import {
  Avatar,
  Button,
  Divider,
  Flex,
  GridItem,
  Image,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  AvatarGroup,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";

// import useUserProfileStore from "../../store/userProfileStore";
// import useAuthStore from "../../store/authStore";
// import EditProfile from "./EditProfile";
// import useFollowUser from "../../hooks/useFollowUser";
import avatarImage from "../../assets/avatar.jpg";
import resumeImage1 from "../../assets/posts/story/resume1.jpg"
import resumeImage2 from "../../assets/posts/story/resume2.jpg"

const ProfileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Yeseva One",
          fontSize: 24, // Adjust the font size as needed
        }}
      >
        Hwinnie.log
      </Text>
      <Divider
        style={{ backgroundColor: "#90B693", height: "2px", border: "none" }}
      />
      <Flex
        gap={{ base: 4, sm: 10 }}
        py={10}
        direction={{ base: "column", sm: "row" }}
      >
        <AvatarGroup
          size={{ base: "xl", md: "2xl" }}
          justifySelf={"center"}
          alignSelf={"flex-start"}
          mx={"auto"}
        >
          <Avatar src={avatarImage} alt="As a programmer logo" />
        </AvatarGroup>

        <VStack alignItems={"start"} mx={"auto"} flex={1}>
            <Text width={"100%"} fontWeight="bold" textAlign={{ base: "center", md:"start" }}  fontSize={{ base: "sm", md: "lg" }}>
              Đoàn Minh Huyền
            </Text>

          <Text fontSize={"sm"}>
            {
              "A young female leader aspiring to make sustainable positive impacts in the business world."
            }
            <br />
            {
              "A self-motivated learner intrigued by the unexplored territories of knowledge."
            }
            <br />
            {"Former President of "}
            <Link
              href="/"

              target="_blank"
              rel="noopener noreferrer"
            >
              @_voc_cva
            </Link>
            <br />
            {"Co-founder of "}
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @tiem.nhomnhom
            </Link>
          </Text>
        </VStack>
      </Flex>
      <div>
        <img
          style={{
            height: "10vh",
            borderRadius: "50%",
            border: "2px solid #90B693",
            cursor: "pointer",
          }}
          className="d-block w-10"
          src={avatarImage}
          onClick={onOpen}
        />
        <Text marginTop={"5px"}>About me</Text>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "md" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          {/* thông tin phần body với background trắng */}

          <ModalBody bg={"white"} px={10} py = {5}> 
            {/* thông tin phần ảnh*/}
            <Flex
              borderRadius={4}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"whiteAlpha.300"}
              flex={1.5}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* add a carousel */}
              <div>
                <Carousel>
                  <Carousel.Item>
                  <Image
  height={{ base: "70vh", md: "100vh" }}
  className="d-block w-100"
  src={resumeImage1}
  alt="First slide"
/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <Image
  height={{ base: "70vh", md: "100vh" }}
  className="d-block w-100"
  src={resumeImage2}
  alt="First slide"
/>
                  </Carousel.Item>
             

          
                </Carousel>
              </div>
            </Flex>

            {/* <Flex
              w={"full"}
              px={8}
              gap={{ base: 4, sm: 10 }}
              textTransform={"uppercase"}
              fontWeight={"bold"}
            ></Flex>

            <Flex
              flex={1}
              flexDir={"column"}
              px={10}
              display={{ base: "none", md: "flex" }}
            ></Flex> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProfileHeader;
