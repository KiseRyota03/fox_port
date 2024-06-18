import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import imagePost1 from "../../assets/posts/post1.jpg"
import imagePost2 from "../../assets/posts/post2.jpg"
import imagePost3 from "../../assets/posts/post3.jpg"
import imagePost4 from "../../assets/posts/post4.jpg"
import imagePost5 from "../../assets/posts/post5.jpg"
import imagePost6 from "../../assets/posts/post6.jpg"

import imagePost1_imageSlide1 from "../../assets/posts/slide1/s1.jpg"
import imagePost1_imageSlide2 from "../../assets/posts/slide1/s2.jpg"
import imagePost1_imageSlide3 from "../../assets/posts/slide1/s3.jpg"
import imagePost1_imageSlide4 from "../../assets/posts/slide1/s4.jpg"

import imagePost2_imageSlide1 from "../../assets/posts/slide2/s1.jpg"
import imagePost2_imageSlide2 from "../../assets/posts/slide2/s2.jpg"
import imagePost2_imageSlide3 from "../../assets/posts/slide2/s3.jpg"
import imagePost2_imageSlide4 from "../../assets/posts/slide2/s4.jpg"

import imagePost3_imageSlide1 from "../../assets/posts/slide3/s1.jpg"
import imagePost3_imageSlide2 from "../../assets/posts/slide3/s2.jpg"
import imagePost3_imageSlide3 from "../../assets/posts/slide3/s3.jpg"
import imagePost3_imageSlide4 from "../../assets/posts/slide3/s4.jpg"

const ProfilePosts = () => {
	const posts = [
		{
			id: 1,
			imageURL: [imagePost3_imageSlide1, imagePost3_imageSlide2, imagePost3_imageSlide3, imagePost3_imageSlide4],
		  comments: ["Nice!", "Awesome!"],
		  likes: 18
		},
		{
		  id: 2,
		  imageURL: [imagePost1_imageSlide1, imagePost1_imageSlide2, imagePost1_imageSlide3, imagePost1_imageSlide4],
		  comments: ["Great photo!", "Love it!"],
		  likes: 25
		},
		{
			id: 3,
		  imageURL: imagePost2,
		  imageURL: [imagePost2_imageSlide1, imagePost2_imageSlide2, imagePost2_imageSlide3, imagePost2_imageSlide4],
		  likes: 30
		},

	  ];
	  
	return (
		<Grid
		templateColumns="repeat(3, 1fr)"
    gap={1}
    columnGap={1}
		>

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

export default ProfilePosts;

