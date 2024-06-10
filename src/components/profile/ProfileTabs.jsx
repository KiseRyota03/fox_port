import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3 } from "react-icons/bs";
import ProfilePosts from "./ProfilePosts";
import ProfileReels from "./ProfileReels";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <Box>
      <Flex
        w={"full"}
        justifyContent={"center"}
        gap={{ base: 4, sm: 10 }}
        textTransform={"uppercase"}
        fontWeight={"bold"}
      >
        <Flex
          borderTop={activeTab === "posts" ? "2px solid #72ac77" : "none"}
          alignItems={"center"}
          p="3"
          gap={1}
          cursor={"pointer"}
          onClick={() => setActiveTab("posts")}
        >
          <Box fontSize={20}>
            <BsGrid3X3 />
          </Box>
          <Text mt={4} fontSize={12} display={{ base: "none", sm: "block" }}>
            Posts
          </Text>
        </Flex>

        <Flex
          borderTop={activeTab === "reels" ? "2px solid #72ac77" : "none"}
          alignItems={"center"}
          p="3"
          gap={1}
          cursor={"pointer"}
          onClick={() => setActiveTab("reels")}
        >
          <Box fontSize={20}>
            <BsBookmark />
          </Box>
          <Text mt={4} fontSize={12} display={{ base: "none", sm: "block" }}>
            Reels
          </Text>
        </Flex>
      </Flex>

      <Box>
        {activeTab === "posts" && <ProfilePosts />}
        {activeTab === "reels" && <ProfileReels />}
      </Box>
    </Box>
  );
};

export default ProfileTabs;
