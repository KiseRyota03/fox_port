import { Avatar, AvatarGroup, Button, Flex, Text, VStack, useDisclosure, Link } from "@chakra-ui/react";
// import useUserProfileStore from "../../store/userProfileStore";
// import useAuthStore from "../../store/authStore";
// import EditProfile from "./EditProfile";
// import useFollowUser from "../../hooks/useFollowUser";
import avatarImage from '../../assets/avatar.jpg'

const ProfileHeader = () => {


  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
      <AvatarGroup size={{ base: "xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
        <Avatar src={avatarImage} alt='As a programmer logo' />
      </AvatarGroup>

      <VStack alignItems={"start"}  mx={"auto"} flex={1}>
   
        <Text fontWeight = {"bold"} fontSize={{ base: "sm", md: "lg" }}>Đoàn Minh Huyền</Text>
        <Text fontSize={"sm"}>
          {"A self-motivated learner intrigued by the unexplored territories of knowledge,"}<br />
          {"a young female leader aspiring to make sustainable positive impacts in the business world."}<br />
          {"Former President of "}
          <Link color="blue" href="/" target="_blank" rel="noopener noreferrer">
            @_voc_cva
          </Link>
          <br />
          {"Co-founder of "}
          <Link color="blue" href="/" target="_blank" rel="noopener noreferrer">
            @tiem.nhomnhom
          </Link>
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;