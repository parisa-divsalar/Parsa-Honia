import LastPostSection from "@/components/Blog/LastPost";
import NewsSection from "@/components/Blog/News";
import AllBlogSection from "@/components/Blog/AllBlog";

const Blog = () => {
	return (
		<main>
			<AllBlogSection/>
			<NewsSection pagination={false}/>
			<LastPostSection/>
			<NewsSection pagination={true}/>

		</main>
	);
};

export default Blog;
