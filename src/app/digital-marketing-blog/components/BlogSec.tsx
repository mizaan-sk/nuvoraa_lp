"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { extractPlainText } from "../../../../utils/api";
import Footer from "@/app/digital-marketing-services/components/creamFooter";

// Type definitions
interface RichTextChild {
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  type?: 'text' | 'link';
  url?: string;
  children?: RichTextChild[];
}

interface RichTextBlock {
  type: 'paragraph' | 'heading' | 'list' | 'list-item' | 'quote' | 'code' | 'image';
  level?: number;
  format?: 'ordered' | 'unordered';
  children?: RichTextChild[];
  image?: {
    url: string;
    name?: string;
  };
}

interface CoverImage {
  url: string;
  name?: string;
}

interface Post {
  id: string | number;
  Title: string;
  Slug: string;
  Content: RichTextBlock[] | string;
  CoverImage?: CoverImage[];
  createdAt?: string;
  meta:string;
  description:string;
}

interface BlogSecProps {
  posts?: Post[];
}

export default function BlogSec({ posts = [] }: BlogSecProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const CARDS_PER_PAGE = 6;

  const filteredPosts = posts.filter(
    (post) =>
      typeof post.Title === "string" &&
      post.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Determine which posts to show based on showMore state
  const postsToShow = showMore 
    ? filteredPosts 
    : filteredPosts.slice(0, CARDS_PER_PAGE);

  const hasMorePosts = filteredPosts.length > CARDS_PER_PAGE;

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate-id');
            if (elementId) {
              setVisibleElements(prev => new Set([...prev, elementId]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    // Observe all elements with data-animate-id
    const elementsToObserve = document.querySelectorAll('[data-animate-id]');
    elementsToObserve.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [postsToShow]);

  return (
    <section className="md:pt-25 pt-22 bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-10">
        {/* Header Section */}
        <div 
          className="text-center mb-4 md:mb-10 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          data-animate-id="header"
          style={{
            opacity: visibleElements.has('header') ? 1 : 0,
            transform: visibleElements.has('header') ? 'translateY(0)' : 'translateY(40px)'
          }}
        >
          <h2 className="text-[38px] sm:text-4xl md:text-5xl lg:text-7xl mb-2 md:mb-4 leading-tight text-white">
            The Growth Feed
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Serving Growth, One Insight at a Time.
          </p>
        </div>

        {/* Search Section */}
        <div 
          className="max-w-lg mx-auto mb-10 md:mb-16 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          data-animate-id="search"
          style={{
            opacity: visibleElements.has('search') ? 1 : 0,
            transform: visibleElements.has('search') ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: visibleElements.has('search') ? '200ms' : '0ms'
          }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-2xl shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-200 text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Results Count */}
        {searchQuery && (
          <div className="text-center mb-12">
            <p className="text-gray-400">
              Found{" "}
              <span className="font-semibold text-blue-400">
                {filteredPosts.length}
              </span>{" "}
              article
              {filteredPosts.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-19">
          {postsToShow.length > 0 ? (
            postsToShow.map((post, index) => {
              const { id, Title, Slug, Content, CoverImage } = post;
              const image = CoverImage?.[0];
              const cardId = `card-${id}`;
              
              // Use the helper function to extract plain text
              const fullText = extractPlainText(Content);
              const excerptLength = 220;
              const excerpt = fullText.slice(0, excerptLength);
              const isLong = fullText.length > excerptLength;

              return (
                <article
                  key={id}
                  className="opacity-0 translate-y-10 transition-all duration-1000 ease-out group bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-800 hover:border-gray-700"
                  data-animate-id={cardId}
                  style={{
                    opacity: visibleElements.has(cardId) ? 1 : 0,
                    transform: visibleElements.has(cardId) ? 'translateY(0)' : 'translateY(40px)',
                    transitionDelay: visibleElements.has(cardId) ? `${index * 100}ms` : '0ms'
                  }}
                >
                  {/* Image */}
                  {image?.url && (
                    <div className="relative w-full aspect-[16/8] overflow-hidden">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.name || Title}
                        fill
                        className="object-cover filter grayscale sepia-[0.1] contrast-[0.9] brightness-[1.01] transition duration-500 group-hover:grayscale-0 group-hover:sepia-[0.08] group-hover:contrast-[1.02] group-hover:brightness-[0.99]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  {/* Content */}
                  <div className="p-3">
                    {/* Title */}
                    <h3 className="text-xl font-medium tracking-[.2px] text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors duration-200">
                      <Link href={`${Slug}`} className="block">
                        {Title}
                      </Link>
                    </h3>
                    {/* Excerpt */}
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {excerpt}
                      {isLong && "..."}
                    </p>
                    {/* Read More Link */}
                    <Link
                      href={`${Slug}`}
                      className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200 group/link"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                No articles found
              </h3>
              <p className="text-gray-400 text-center max-w-md leading-relaxed">
                {searchQuery
                  ? `No articles match "${searchQuery}". Try adjusting your search terms.`
                  : "No blog posts are available at the moment. Check back soon for new content."}
              </p>
            </div>
          )}
        </div>

        {/* See More / See Less Button */}
        {hasMorePosts && filteredPosts.length > 0 && (
          <div 
            className="text-center mt-12 mb-2 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            data-animate-id="see-more-btn"
            style={{
              opacity: visibleElements.has('see-more-btn') ? 1 : 0,
              transform: visibleElements.has('see-more-btn') ? 'translateY(0)' : 'translateY(40px)'
            }}
          >
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center border-0 outline-none md:px-6 px-4 py-2 md:py-3 bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white font-normal rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {showMore ? (
                <>
                  See Less
                  <ChevronUp className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>
                  See More Articles
                  <ChevronDown className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
     <section id="2"> <Footer topBorderImage="/pattern.png" /></section>
    </section>
  );
}