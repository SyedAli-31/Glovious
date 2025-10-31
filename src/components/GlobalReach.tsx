import {
    
    Users,
    Target,
} from "lucide-react";

const GlobalReach = () => {
  return (
    <div>
        {/* Global Reach */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Safety Beyond Borders
                        </h2>
                        <h3 className="text-2xl font-semibold mb-6 text-primary">
                            Bringing Safety to You, Everywhere
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Glovios doesn't believe in borders when it comes to safety. We export
                            our fantastic protective gloves to different parts of the world, making
                            sure everyone, no matter where they are, stays safe.
                        </p>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6 leading-relaxed">
                            Glovios is the trusted choice for international brands in the USA,
                            Germany, UK, Czech Republic, and Korea, delivering high-quality
                            protective gloves and safety solutions across borders.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
                        {[
                            { name: "USA", icon: "Users" },
                            { name: "Germany", icon: "Users" },
                            { name: "UK", icon: "Users" },
                            { name: "Czech Rep.", icon: "Users" },
                            { name: "Korea", icon: "Users" },
                            { name: "Worldwide", icon: "Target" },
                        ].map((country, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-6 bg-card rounded-lg shadow-sm"
                            >
                                <div className="text-center">
                                    {country.icon === "Users" ? (
                                        <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                                    ) : (
                                        <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                                    )}
                                    <p className="font-semibold">{country.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

    </div>
  )
}

export default GlobalReach
  {/* Global Reach */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Safety Beyond Borders
                        </h2>
                        <h3 className="text-2xl font-semibold mb-6 text-primary">
                            Bringing Safety to You, Everywhere
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Glovios doesn't believe in borders when it comes to safety. We export
                            our fantastic protective gloves to different parts of the world, making
                            sure everyone, no matter where they are, stays safe.
                        </p>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6 leading-relaxed">
                            Glovios is the trusted choice for international brands in the USA,
                            Germany, UK, Czech Republic, and Korea, delivering high-quality
                            protective gloves and safety solutions across borders.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
                        {[
                            { name: "USA", icon: "Users" },
                            { name: "Germany", icon: "Users" },
                            { name: "UK", icon: "Users" },
                            { name: "Czech Rep.", icon: "Users" },
                            { name: "Korea", icon: "Users" },
                            { name: "Worldwide", icon: "Target" },
                        ].map((country, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-6 bg-card rounded-lg shadow-sm"
                            >
                                <div className="text-center">
                                    {country.icon === "Users" ? (
                                        <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                                    ) : (
                                        <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                                    )}
                                    <p className="font-semibold">{country.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
