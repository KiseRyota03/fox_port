	
import { Link as RouterLink } from "react-router-dom";
import { Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfilePosts from "../components/profile/ProfilePosts";
import ProfileHeader from "../components/profile/ProfileHeader";
const ProfilePage = () => {
//   const [activeTab, setActiveTab] = useState("posts");

	return (
				
		<Container maxW='container.lg' py={5}>
			<Flex py={10} px={4} pl={{ base: 4, md: 10 }} w={"full"} mx={"auto"} flexDirection={"column"}>
			{/* {!isLoading && userProfile && <ProfileHeader />}
				{isLoading && <ProfileHeaderSkeleton />} */}
				<ProfileHeader/>
			</Flex>
			<Flex
				px={{ base: 2, sm: 4 }}
				maxW={"full"}
				mx={"auto"}
				borderTop={"1px solid"}
				borderColor={"#72ac77"}
				direction={"column"}
			>
	
				<ProfileTabs />
			</Flex>
		</Container>
	);
};

export default ProfilePage;

// // skeleton for profile header
// const ProfileHeaderSkeleton = () => {
// 	return (
// 		<Flex
// 			gap={{ base: 4, sm: 10 }}
// 			py={10}
// 			direction={{ base: "column", sm: "row" }}
// 			justifyContent={"center"}
// 			alignItems={"center"}
// 		>
// 			<SkeletonCircle size='24' />

// 			<VStack alignItems={{ base: "center", sm: "flex-start" }} gap={2} mx={"auto"} flex={1}>
// 				<Skeleton height='12px' width='150px' />
// 				<Skeleton height='12px' width='100px' />
// 			</VStack>
// 		</Flex>
// 	);
// };

