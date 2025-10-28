import Image from "next/image";

interface ProcessStepProps {
    stepNumber: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export default function ProcessStep({
    stepNumber,
    title,
    subtitle,
    description,
    image,
}: ProcessStepProps) {
    return (
        <div
            className="space-y-4"
            data-testid={`process-step-${stepNumber}`}
        >
            {/* Step Header */}
            <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                    {stepNumber}
                </div>
                <div>
                    <div className="text-sm font-semibold text-muted-foreground">{subtitle}</div>
                    <h3 className="text-xl font-bold text-foreground">{title}</h3>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {description}
            </p>
        </div>
    );
}
