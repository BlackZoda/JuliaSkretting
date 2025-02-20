import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";


const slugger = new GithubSlugger();

export async function generateStaticParams() {
    const categories = [];
    const paths = [{slug: "all"}];

    allBlogs.map(blog => {
        if (blog.isPublished) {
            blog.tags.map(tag => {
                const slugified = slugger.slug(tag);
                if (!categories.includes(slugified)) {
                    categories.push(slugified);
                    paths.push({slug: slugified})
                }
            })
        }
    })

    return paths;
}

export async function generateMetadata({ params }) {

    return {
        title: `${params.slug.replaceAll("-"," ")} Blogs`,
        description: `Learn more about ${params.slug === "all" ?
                "programming, illustration, and graphic design" :
                params.slug.replace("-", " ")} through my collection of blogs, tutorials, and articles.`,
    }
}

const CategoryPage = ({ params }) => {

    const allCategories = ["all"];
    const blogs = allBlogs.filter(blog => {
        return blog.tags.some(tag => {
            const slugified = slug(tag);
            if (!allCategories.includes(slugified)) {
                allCategories.push(slugified);
            }
            if (params.slug === "all") {
                return true;
            }
            return slugified === params.slug;
        })
    })

    return <article className="mt-12 flex flex-col text-dark dark:text-light">
        <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
            <h1 className="mt-4 font-semibold text-2xl md:text-4xl lg:text-5xl">
                #{params.slug}
            </h1>
            <span className="mt-2 inline-block">Discover articles by category and learn more!</span>
        </div>
        <Categories categories={allCategories} currentSlug={params.slug} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-16
                mt-24 px-5 sm:px-10 md:px-24 sxl:px-32">
            {blogs.map((blog, index) => (
                <article key={blog._id + index} className="col-span-1 row-span-1 relative">
                    <BlogLayoutThree blog={blog} />
                </article>
            ))} 
        </div>
    </article>
}

export default CategoryPage;
