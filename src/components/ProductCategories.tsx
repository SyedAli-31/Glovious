
import CategoryCard from "@/components/CategoryCard";
import { categories} from "@shared/mockData";
const ProductCategories = () => {


    // ✅ Image paths (from public folder)
    const categoryImages: Record<string, string> = {
        "mechanical-gloves": "/Mechanic.png",
        "assembly-gloves": "/Assembly.png",
        "stick-welding-gloves": "/Stickwelding.png",
        "impact-gloves": "/Impact.png",
        "driver-gloves": "/Driver.png",
        "electrical-gloves": "/Electrical.png",
        "general-purpose-gloves": "/Generalpurpose.png",
        "tig-mig-welding-gloves": "/TIGMIG_welding.png",
    };

  return (
    <div>
          {/* Product Categories */}
          <section className="py-16 md:py-24 bg-muted/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                          Explore our comprehensive range of protective gloves designed for
                          every industrial application.
                      </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {categories.map((category) => (
                          <CategoryCard
                              key={category.id}
                              name={category.name}
                              description={category.description}
                              image={categoryImages[category.slug]}
                              slug={category.slug}
                          />
                      ))}
                  </div>
              </div>
          </section>

          {/* Legacy Section */}
          <section className="py-16 md:py-24 bg-[#0950c3]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">
                      A Prosperous Legacy of Superiority
                  </h2>
                  <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                      Explore the world of <span className="font-semibold">Glovios</span>, where
                      safety and style come together seamlessly. We are dedicated to providing
                      top-quality gloves that protect workers in the most demanding
                      environments.
                  </p>
              </div>
          </section>
    </div>
  )
}

export default ProductCategories
