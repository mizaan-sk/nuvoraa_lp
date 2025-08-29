import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Eye } from "lucide-react";
import Footer from "@/app/digital-marketing-services/components/creamFooter";
import { getPostBySlug, getPosts } from "../../../utils/api";
import RichTextRenderer from "../digital-marketing-blog/components/RichTextRenderer";

export const revalidate = 60; // Regenerate every 60 seconds

// ✅ Dynamically generate <title> and <meta description>
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // Await the params
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) return notFound();

  const { Title, meta, description, Slug } = post;

  return {
    title: meta || Title,
    description: description || "Nuvoraa Blog Author",
    openGraph: {
      title: meta || Title,
      description: description || "Nuvoraa Blog Author",
      url: `https://nuvoraa.com/${Slug}`,
      type: "article",
    },
    alternates: {
      canonical: `https://nuvoraa.com/${Slug}`,
    },
    /**
     *  url: `https://nuvoraa.com/digital-marketing-blog/${Slug}`,
      type: "article",
    },
    alternates: {
      canonical: `https://nuvoraa.com/digital-marketing-blog/${Slug}`,
    },
     */
  };
}

// ✅ Generate static paths for SSG
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts
    .filter((post) => !!post.Slug)
    .map((post) => ({ slug: post.Slug }));
}

// ✅ Blog page component
export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // Await the params
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) return notFound();

  const { Title, Content, CoverImage } = post;
  const imageUrl = CoverImage?.[0]?.url;

  return (
    <section className="bg-black text-white">
      <div className="w-full max-w-5xl mx-auto md:pt-40 pt-36">
        <div className="min-h-screen">
          {/* Hero Section */}
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Title */}
            <header className="relative z-10 max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-[25px] mb-7 text-center sm:text-[30px] lg:text-[38px] py-2 font-semibold tracking-[.8px] text-white leading-tight">
                  {Title}
                </p>
              </div>
            </header>

            {/* Featured Image */}
            {imageUrl && (
              <div className="relative max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 mb-5">
                <div className="relative w-full aspect-[16/8] overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={Title}
                    fill
                    priority
                    className="object-cover filter grayscale sepia-[0.1] contrast-[0.9] brightness-[1.01] transition duration-500 hover:grayscale-0 hover:sepia-[0.08] hover:contrast-[1.02] hover:brightness-[0.99]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Article Content */}
          <article className="px-2 sm:px-6 lg:px-8 pb-7">
            <div className="prose prose-lg prose-invert max-w-none">
              <RichTextRenderer content={Content} />
            </div>

            {/* Footer Info */}
            <footer className="mt-2 pt-10">
              <div className="flex sm:flex-row justify-between items-center gap-6 text-gray-400">
                <div className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  <span>Thanks for reading!</span>
                </div>

                <Link href="/contactus" passHref>
                  <div className="inline-flex items-center md:px-4 px-2 py-1 md:py-2 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
                    Talk to Us
                  </div>
                </Link>
              </div>
            </footer>

            {/* Back to Blog Button */}
            <div className="mt-12 text-center">
              <Link
                href="/digital-marketing-blog"
                className="inline-flex items-center md:px-6 px-3 md:py-3 py-2 bg-white text-black font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Explore More Articles
              </Link>
            </div>
          </article>
        </div>
      </div>

      <Footer topBorderImage="/pattern.png" />
    </section>
  );
}