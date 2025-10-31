import Image from "next/image";

import {
    
    CheckCircle,
    
} from "lucide-react";
const About = () => {
  return (
    <div>
          {/* About Section */}
          <section className="py-16 md:py-24 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                              Glovios is a dominant player in the safety industry and a
                              manufacturer of high-quality personal and industrial protective
                              gloves along with protective apparel.
                          </p>
                          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                              We take pride in being the preferred supplier for a group of
                              esteemed customers worldwide.
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-8">
                              {[
                                  { title: "Quality Workmanship", subtitle: "Premium craftsmanship" },
                                  { title: "Quality Tools", subtitle: "Advanced equipment" },
                                  { title: "Continuous Improvements", subtitle: "Always evolving" },
                                  { title: "Experienced Team", subtitle: "Expert professionals" },
                              ].map((item, i) => (
                                  <div className="flex items-start gap-3" key={i}>
                                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                      <div>
                                          <h3 className="font-semibold mb-1">{item.title}</h3>
                                          <p className="text-sm text-muted-foreground">
                                              {item.subtitle}
                                          </p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="rounded-lg overflow-hidden shadow-xl">
                          <Image
                              src="/Factory_building.png"
                              alt="Glovios Manufacturing Facility"
                              className="w-full h-[400px] object-cover"
                              width={600}
                              height={400}
                              priority
                          />
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default About

