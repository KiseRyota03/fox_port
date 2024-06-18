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
  useDisclosure,
} from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import PostCaption from "../comment/PostCaption";
import avatarImage from "../../assets/avatar.jpg";
const ProfilePost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Image
          src={post.imageURL[0]}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "1xl", md: "6xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          {/* thông tin phần body với background trắng */}

          <ModalBody bg={"white"} px={10} py={5}>
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
                    <img
                      style={{
                        height: {
                          base: "50vh",
                          md: "90vh",
                        },
                      }}
                      className="d-block w-100"
                      src={post.imageURL[0]}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        height: {
                          base: "50vh",
                          md: "90vh",
                        },
                      }}
                      className="d-block w-100"
                      src={post.imageURL[1]}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        height: {
                          base: "50vh",
                          md: "90vh",
                        },
                      }}
                      className="d-block w-100"
                      src={post.imageURL[2]}
                      alt="Third slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      style={{
                        height: {
                          base: "50vh",
                          md: "90vh",
                        },
                      }}
                      className="d-block w-100"
                      src={post.imageURL[3]}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Flex>

            <Flex
              w={"full"}
              px={8}
              gap={{ base: 4, sm: 10 }}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              display = {{base: "none", sm: "flex"}}
            >
              <Flex alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
                <Box fontSize={20}>
                  <FaRegHeart />
                </Box>
              </Flex>

              <Flex alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
                <Box fontSize={20}>
                  <FaRegComment />
                </Box>
              </Flex>
            </Flex>

            <Flex
              flex={1}
              flexDir={"column"}
              px={10}
              display={{ base: "none", md: "flex" }}
            >
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} gap={4}>
                  <Avatar
                    src={avatarImage}
                    size={"sm"}
                    name="As a Programmer"
                  />
                  <Text fontWeight={"bold"} fontSize={12}>
                    Đoàn Minh Huyền
                  </Text>
                </Flex>
              </Flex>
              <VStack
                w="full"
                alignItems={"start"}
                maxH={"350px"}
                overflowY={"auto"}
              >
                {post.caption && <PostCaption post={post} />}
              </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
