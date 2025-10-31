import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-background">
            <Card className="max-w-md w-full p-8 text-center">
                <div className="flex justify-center mb-6">
                    <div className="rounded-full bg-destructive/10 p-4">
                        <AlertCircle className="h-12 w-12 text-destructive" />
                    </div>
                </div>
                <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
                <p className="text-muted-foreground mb-8">
                    The blog post you're looking for doesn't exist or has been removed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/blog">
                        <Button className="w-full sm:w-auto">
                            Back to Blog
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button variant="outline" className="w-full sm:w-auto">
                            Go Home
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}