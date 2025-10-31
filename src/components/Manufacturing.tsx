import ProcessStep from "@/components/ProcessStep";

const Manufacturing = () => {
  return (
    <div>
       {/* Manufacturing Process */}
            <section className="py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Manufacturing Process
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            From raw materials to finished product, every step is carefully
                            controlled.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ProcessStep
                            stepNumber="01"
                            title="Quality Check"
                            subtitle="Raw Leather"
                            description="We check every raw leather piece carefully to ensure it’s ready for use."
                            image="/quality check.png"
                        />
                        <ProcessStep
                            stepNumber="02"
                            title="Leather Sheets"
                            subtitle="Cutting Process"
                            description="Turning rough leather into strong sheets with precision cutting."
                            image="/Leathersheets.png"
                        />
                        <ProcessStep
                            stepNumber="03"
                            title="Your Safety Gloves"
                            subtitle="Stitching"
                            description="Our skilled hands sew leather into protective gloves with care."
                            image="/stitching.png"
                        />
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Manufacturing
 {/* Manufacturing Process */}
            <section className="py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Manufacturing Process
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            From raw materials to finished product, every step is carefully
                            controlled.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ProcessStep
                            stepNumber="01"
                            title="Quality Check"
                            subtitle="Raw Leather"
                            description="We check every raw leather piece carefully to ensure it’s ready for use."
                            image="/quality check.png"
                        />
                        <ProcessStep
                            stepNumber="02"
                            title="Leather Sheets"
                            subtitle="Cutting Process"
                            description="Turning rough leather into strong sheets with precision cutting."
                            image="/Leathersheets.png"
                        />
                        <ProcessStep
                            stepNumber="03"
                            title="Your Safety Gloves"
                            subtitle="Stitching"
                            description="Our skilled hands sew leather into protective gloves with care."
                            image="/stitching.png"
                        />
                    </div>
                </div>
            </section>