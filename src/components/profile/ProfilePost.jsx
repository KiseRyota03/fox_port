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
        size={{ base: "3xl", md: "6xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          {/* thông tin phần body với background trắng */}

          <ModalBody bg={"white"} p= {10}>
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
                      style={{ height: "90vh" }}
                      className="d-block w-100"
                      src={post.imageURL[0]}
                      alt="First slide"
                    />
          
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "90vh" }}
                      className="d-block w-100"
                      src={post.imageURL[1]}
                      alt="Second slide"
                    />

          
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "90vh" }}
                      className="d-block w-100"
                      src={post.imageURL[2]}
                      alt="Third slide"
                    />

                
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      style={{ height: "90vh" }}
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

            {/* <Flex
              gap="4"
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
              maxH={"90vh"}
              minH={"50vh"}
            >
       
              <Flex
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
                justifyContent={"center"}
                alignItems={"center"}
              >
           
                <div>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        style={{ height: "90vh" }}
                        className="d-block w-100"
                        src={post.imageURL}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{ height: "90vh" }}
                        className="d-block w-100"
                        src={post.imageURL}
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{ height: "90vh" }}
                        className="d-block w-100"
                        src={post.imageURL}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>

                <div>
                  
                </div>
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
                <Divider my={4} bg={"gray.500"} />
                {console.log(post.caption)}
                <VStack
                  w="full"
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >
                  {post.caption && <PostCaption post={post} />}
                </VStack>
                <Divider my={4} bg={"gray.8000"} />
              </Flex>
            </Flex> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
