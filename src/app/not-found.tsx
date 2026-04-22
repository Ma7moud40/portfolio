import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="grid min-h-[80svh] place-items-center px-6">
      <div className="max-w-lg text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Error 404
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/" className={cn(buttonVariants({ variant: "primary" }))}>
            <ArrowLeft />
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
