

import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@shared/mockData";
import { useState, ChangeEvent } from "react";


export default function Bloglist() {

  const [searchQuery, setSearchQuery] = useState<string>("");
  
      const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
      };
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );
    return (
        <div>
          
          {/* 📰 Blog Grid */}
          <section className="py-16 flex-1">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blogs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay informed with our latest insights on industrial safety.
              </p>
            </div>
            <div className="container mx-auto px-4">
              {filteredPosts.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      title={post.title}
                      excerpt={post.excerpt}
                      image={`${post.image}`}
                      date={post.date}
                      slug={post.slug}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">
                    No articles found matching “{searchQuery}”.
                  </p>
                </div>
              )}
            </div>
          </section>

        </div>
    );
}


