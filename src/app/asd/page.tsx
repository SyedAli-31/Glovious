import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@shared/mockData";



// Type definitions
interface BlogContentSection {
    type: "heading" | "paragraph" | "list";
    content?: string;
    items?: string[];
}

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return { title: "Blog Post Not Found" };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
        },
    };
}

export default function BlogPostPage({ params }: PageProps) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) notFound();

    const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);
    const readingTime = Math.ceil(post.excerpt.split(" ").length / 200);

    return (
        <div className="min-h-screen bg-background">
            {/* Back Button */}
            <div className="container mx-auto px-4 py-6">
                <Link href="/blog">
                    <Button variant="ghost" className="gap-2 hover:gap-3 transition-all">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </Button>
                </Link>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-8">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            <div className="container mx-auto px-4 pb-16">
                <div className="max-w-4xl mx-auto">
                    <article>
                        <header className="mb-8 -mt-32 relative z-10">
                            <Card className="p-8 bg-background/95 backdrop-blur-sm border-2">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                    {post.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground mb-6">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <time className="text-sm">
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </time>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-sm">{readingTime} min read</span>
                                    </div>
                                </div>

                                <Separator className="mb-6" />
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </Card>
                        </header>

                        {/* Main Content */}
                        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                            <BlogContent slug={post.slug} />
                        </div>
                    </article>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <section className="mt-16">
                            <Separator className="mb-8" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-8">
                                Related Articles
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        href={`/blog/${relatedPost.slug}`}
                                        className="block group"
                                    >
                                        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                                            <div className="relative aspect-video overflow-hidden">
                                                <Image
                                                    src={relatedPost.image}
                                                    alt={relatedPost.title}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                                    <Calendar className="h-4 w-4" />
                                                    <time>
                                                        {new Date(relatedPost.date).toLocaleDateString(
                                                            "en-US",
                                                            {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            }
                                                        )}
                                                    </time>
                                                </div>
                                                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                                    {relatedPost.title}
                                                </h3>
                                                <p className="text-muted-foreground line-clamp-2">
                                                    {relatedPost.excerpt}
                                                </p>
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}

function BlogContent({ slug }: { slug: string }) {
    const content = getBlogContent(slug);
    return (
        <div className="space-y-6">
            {content.map((section, index) => (
                <div key={index}>
                    {section.type === "heading" && (
                        <h2 className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>
                    )}
                    {section.type === "paragraph" && (
                        <p className="text-muted-foreground leading-relaxed">
                            {section.content}
                        </p>
                    )}
                    {section.type === "list" && (
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            {section.items?.map((item, i) => (
                                <li key={i} className="text-muted-foreground">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

// same getBlogContent() as your version...


// Content data for each blog post
function getBlogContent(slug: string): BlogContentSection[] {
    const contentMap: Record<string, BlogContentSection[]> = {
        "safety-guidelines-industrial-glove-selection": [
            {
                type: "paragraph",
                content:
                    "Selecting the right industrial gloves is crucial for workplace safety and compliance. With numerous hazards present in industrial environments, understanding how to choose appropriate hand protection can prevent serious injuries and ensure regulatory compliance.",
            },
            {
                type: "heading",
                content: "Understanding Hazard Assessment",
            },
            {
                type: "paragraph",
                content:
                    "Before selecting gloves, conduct a thorough hazard assessment of your workplace. Identify all potential risks including chemical exposure, cut hazards, thermal risks, and electrical dangers. This assessment forms the foundation for proper glove selection.",
            },
            {
                type: "heading",
                content: "Key Selection Criteria",
            },
            {
                type: "list",
                items: [
                    "Material compatibility with chemicals and substances handled",
                    "Required level of cut resistance (ANSI/ISEA 105 ratings)",
                    "Thermal protection requirements for heat or cold environments",
                    "Dexterity needs for precision tasks",
                    "Comfort and fit for extended wear",
                    "Compliance with relevant safety standards and regulations",
                ],
            },
            {
                type: "heading",
                content: "Material Selection Guide",
            },
            {
                type: "paragraph",
                content:
                    "Different materials offer varying levels of protection. Leather provides excellent abrasion resistance and is ideal for general handling. Nitrile offers superior chemical resistance and puncture protection. Kevlar and other high-performance fibers deliver exceptional cut resistance. Understanding these properties helps match gloves to specific applications.",
            },
            {
                type: "heading",
                content: "Proper Fit and Sizing",
            },
            {
                type: "paragraph",
                content:
                    "Proper fit is essential for both safety and productivity. Gloves that are too large can catch on equipment, while tight gloves cause fatigue and reduced dexterity. Implement a fitting program to ensure workers receive correctly sized gloves. Consider offering multiple sizes and styles to accommodate different hand shapes.",
            },
            {
                type: "heading",
                content: "Training and Compliance",
            },
            {
                type: "paragraph",
                content:
                    "Worker training is critical for effective glove use. Educate employees on proper donning and doffing procedures, inspection for damage, and understanding when to replace gloves. Maintain documentation of training and glove selection rationale for compliance purposes.",
            },
            {
                type: "heading",
                content: "Maintenance and Replacement",
            },
            {
                type: "paragraph",
                content:
                    "Establish clear guidelines for glove inspection, cleaning, and replacement. Regular inspection helps identify wear, contamination, or damage that could compromise protection. Implement a replacement schedule based on usage intensity and manufacturer recommendations.",
            },
        ],
        "heat-resistant-gloves-welding-quality": [
            {
                type: "paragraph",
                content:
                    "In welding operations, the difference between standard and premium heat-resistant gloves can mean the difference between safety and serious burns. Quality matters significantly when protecting workers from extreme temperatures and welding hazards.",
            },
            {
                type: "heading",
                content: "The High-Temperature Challenge",
            },
            {
                type: "paragraph",
                content:
                    "Welding exposes workers to temperatures exceeding 1000°F (538°C), along with sparks, spatter, and radiant heat. Premium gloves use advanced materials like aramid fibers, aluminized fabrics, and specialized leathers that maintain integrity under extreme conditions.",
            },
            {
                type: "heading",
                content: "Quality Indicators in Welding Gloves",
            },
            {
                type: "list",
                items: [
                    "Multi-layer construction with thermal barriers",
                    "Reinforced stitching with Kevlar or aramid thread",
                    "Full-grain leather or advanced synthetic materials",
                    "Proper insulation without excessive bulk",
                    "Extended cuffs for forearm protection",
                    "Compliance with ANSI/ISEA 105 thermal resistance standards",
                ],
            },
            {
                type: "heading",
                content: "Material Technology",
            },
            {
                type: "paragraph",
                content:
                    "Premium welding gloves incorporate cutting-edge materials. Aluminized fabrics reflect radiant heat. Aramid fibers like Kevlar provide heat resistance without sacrificing flexibility. Split cowhide and grain leather offer durability and heat protection. The combination of these materials creates gloves that protect while maintaining dexterity.",
            },
            {
                type: "heading",
                content: "Dexterity vs. Protection Balance",
            },
            {
                type: "paragraph",
                content:
                    "Quality welding gloves balance protection with sufficient dexterity for precision work. While heavily insulated gloves offer maximum thermal protection, they can hinder fine motor control. Premium gloves use strategic padding and anatomical design to protect critical areas while maintaining flexibility where needed.",
            },
            {
                type: "heading",
                content: "Cost-Benefit Analysis",
            },
            {
                type: "paragraph",
                content:
                    "Investing in premium welding gloves delivers significant returns. Higher quality gloves last longer, reducing replacement costs. They provide better protection, reducing injury risks and associated costs. Improved comfort increases productivity and worker satisfaction. The initial higher cost is offset by these long-term benefits.",
            },
            {
                type: "heading",
                content: "Selection for Different Welding Types",
            },
            {
                type: "paragraph",
                content:
                    "Different welding processes require specific glove characteristics. MIG welding needs high dexterity with moderate heat protection. TIG welding requires maximum dexterity with lighter protection. Stick welding demands heavy-duty protection against intense heat and spatter. Match glove specifications to your specific welding applications.",
            },
        ],
        "maximizing-safety-cut-resistant-gloves": [
            {
                type: "paragraph",
                content:
                    "Cut injuries represent one of the most common workplace hazards across industries. Modern cut-resistant glove technology has evolved dramatically, offering unprecedented protection while maintaining the dexterity workers need for complex tasks.",
            },
            {
                type: "heading",
                content: "Understanding ANSI Cut Resistance Levels",
            },
            {
                type: "paragraph",
                content:
                    "The ANSI/ISEA 105 standard defines nine levels of cut resistance (A1-A9), with A9 offering the highest protection. Understanding these ratings helps match glove protection to specific hazards. A thorough hazard assessment determines the appropriate cut level for each task.",
            },
            {
                type: "heading",
                content: "Advanced Cut-Resistant Materials",
            },
            {
                type: "list",
                items: [
                    "High-performance polyethylene (HPPE) fibers",
                    "Engineered yarns with steel or glass reinforcement",
                    "Kevlar and aramid fiber blends",
                    "SuperFabric brand material with guard plates",
                    "Composite materials combining multiple technologies",
                    "Coatings for enhanced grip and additional protection",
                ],
            },
            {
                type: "heading",
                content: "Implementing an Effective Hand Protection Program",
            },
            {
                type: "paragraph",
                content:
                    "A comprehensive hand protection program goes beyond simply providing gloves. Conduct detailed hazard assessments for each work area and task. Involve workers in glove selection to ensure comfort and acceptance. Provide thorough training on proper use and limitations. Establish inspection and replacement protocols. Monitor injury data to evaluate program effectiveness.",
            },
            {
                type: "heading",
                content: "Balancing Protection and Performance",
            },
            {
                type: "paragraph",
                content:
                    "Modern cut-resistant gloves achieve impressive protection levels while maintaining surprising dexterity. Engineered knitting patterns provide flexibility. Anatomical designs follow natural hand contours. Thin-gauge constructions offer high cut resistance without bulk. Strategic reinforcement protects vulnerable areas without compromising overall dexterity.",
            },
            {
                type: "heading",
                content: "Industry-Specific Applications",
            },
            {
                type: "paragraph",
                content:
                    "Different industries require tailored solutions. Food processing demands cut resistance plus food-safe materials. Metal fabrication needs cut protection with abrasion resistance. Glass handling requires high cut resistance with strong grip. Automotive assembly needs dexterity with moderate cut protection. Evaluate your specific industry requirements when selecting gloves.",
            },
            {
                type: "heading",
                content: "Latest Innovations",
            },
            {
                type: "paragraph",
                content:
                    "Recent innovations are transforming cut-resistant glove technology. Touch-screen compatible materials allow device use without removing gloves. Advanced coatings provide superior grip in wet or oily conditions. Antimicrobial treatments enhance hygiene. Improved breathability reduces hand fatigue. These innovations enhance both safety and worker comfort.",
            },
            {
                type: "heading",
                content: "Measuring Program Success",
            },
            {
                type: "paragraph",
                content:
                    "Track key metrics to evaluate your hand protection program. Monitor hand injury rates and severity. Measure glove longevity and replacement frequency. Gather worker feedback on comfort and usability. Assess compliance with glove use requirements. Regular evaluation ensures continuous improvement in workplace safety.",
            },
        ],
    };

    return contentMap[slug] || [];
}



