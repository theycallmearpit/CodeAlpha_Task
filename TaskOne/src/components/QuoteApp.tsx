import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { QuoteCard } from "./QuoteCard";
import { getRandomQuote, type Quote } from "@/data/quotes";
import { Sparkles, RefreshCw } from "lucide-react";

export const QuoteApp = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load initial quote
  useEffect(() => {
    setCurrentQuote(getRandomQuote());
  }, []);

  const handleNewQuote = () => {
    setIsLoading(true);
    
    // Add a slight delay for better UX
    setTimeout(() => {
      setCurrentQuote(getRandomQuote());
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse-glow" />
            <h1 className="text-4xl md:text-6xl font-light text-foreground tracking-wide">
              Daily Wisdom
            </h1>
            <Sparkles className="w-8 h-8 text-primary animate-pulse-glow" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Discover inspiration through timeless quotes
          </p>
        </div>

        {/* Quote Display */}
        <div className="mb-12">
          {currentQuote && (
            <div key={currentQuote.text} className="opacity-100">
              <QuoteCard quote={currentQuote} />
            </div>
          )}
        </div>

        {/* New Quote Button */}
        <div className="text-center">
          <Button
            variant="elegant"
            size="lg"
            onClick={handleNewQuote}
            disabled={isLoading}
            className="text-lg px-8 py-6 h-auto"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                New Quote
                <Sparkles className="w-5 h-5" />
              </>
            )}
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-sm text-muted-foreground">
            Let wisdom guide your journey
          </p>
        </div>
      </div>
    </div>
  );
};