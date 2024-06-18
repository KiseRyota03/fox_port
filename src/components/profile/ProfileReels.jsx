import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import imagePost1 from "../../assets/posts/post1.jpg"
import imagePost2 from "../../assets/posts/post2.jpg"
import imagePost3 from "../../assets/posts/post3.jpg"
import imagePost4 from "../../assets/posts/post4.jpg"
import imagePost5 from "../../assets/posts/post5.jpg"
import imagePost6 from "../../assets/posts/post6.jpg"


const ProfileReels = () => {
	// const { isLoading, posts } = useGetUserPosts();

	// const noPostsFound = !isLoading && posts.length === 0;
	const posts = [
		{
		  id: 1,
		  imageURL: imagePost1,
		  comments: ["Great photo!", "Love it!"],
		  likes: 25,
		  caption: "123"
		},
		// {
		// 	id: 2,
		//   imageURL: imagePost2,
		//   comments: ["Beautiful!", "Amazing shot!"],
		//   likes: 25,
		//   caption: 123
		// },
		// {
		// 	id: 3,

		//   imageURL: imagePost3,
		//   comments: ["Nice!", "Awesome!"],
		//   likes: 25,
		//   caption: 123
		// },
		// {
		// 	id: 4,

		//   imageURL: imagePost4,
		//   comments: ["Stunning!", "Incredible!"],
		//   likes: 25,
		//   caption: 123
		// },
		// {
		// 	id: 5,

		//   imageURL: imagePost5,
		//   comments: ["Lovely!", "Fantastic!"],
		//   likes: 25,
		//   caption: 123
		// },
		// {
		// 	id: 6,

		//   imageURL: imagePost6,
		//   comments: ["Superb!", "Brilliant!"],
		//   likes: 25,
		//   caption: 123
		// }
	  ];
	  
	return (
		<Grid
			templateColumns={{
				sm: "repeat(3, 1fr)",
				md: "repeat(3, 1fr)",
			}}
			gap={1}
			columnGap={1}
		>
			{/* {
				[0, 1, 2].map((_, idx) => (
					<VStack key={idx} alignItems={"flex-start"} gap={4}>
						<Skeleton w={"full"}>
							<Box h='300px'>contents wrapped</Box>
						</Skeleton>
					</VStack>
				))} */}

			{(
				<>
					{posts.map((post) => (
						<ProfilePost post={post} key = {post.id} />
					))}
				</>
			)}
		</Grid>
	);
};

export default ProfileReels;

