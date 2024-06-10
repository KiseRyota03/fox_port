import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { timeAgo } from "../../utils/timeAgo";
// import useUserProfileStore from "../../store/userProfileStore";
import avatarImage from '../../assets/avatar.jpg'

const PostCaption = ({ post }) => {

	return (
		<Flex gap={4}>
				<Link>
			{/* <Link to={`/${userProfile.username}`}> */}

				<Avatar src={avatarImage} size={"sm"} />

			</Link>
			<Flex direction={"column"}>
				<Flex gap={2} alignItems={"center"}>
					<Link>
					{/* <Link to={`/${userProfile.username}`}> */}
						<Text fontWeight={"bold"} fontSize={12}>
							{/* {userProfile.username} */}
							Đoàn Minh Huyền
						</Text>
					</Link>
					<Text fontSize={14}>{post.caption}</Text>
				</Flex>
				{/* <Text fontSize={12} color={"gray"}>
					{timeAgo(post.createdAt)}
				</Text> */}
			</Flex>
		</Flex>
	);
};

export default PostCaption;