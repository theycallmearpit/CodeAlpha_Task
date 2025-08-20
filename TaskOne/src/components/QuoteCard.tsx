import { Card } from "@/components/ui/card";

interface Quote {
  text: string;
  author: string;
}

interface QuoteCardProps {
  quote: Quote;
}

export const QuoteCard = ({ quote }: QuoteCardProps) => {
  return (
    <Card className="p-8 md:p-12 max-w-4xl mx-auto bg-gradient-card backdrop-blur-sm border-border/50 shadow-quote animate-fadeIn">
      <div className="text-center space-y-6">
        <blockquote className="text-2xl md:text-4xl font-light leading-relaxed text-foreground">
          "{quote.text}"
        </blockquote>
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-px bg-primary/30"></div>
          <cite className="text-lg md:text-xl font-medium text-muted-foreground not-italic">
            {quote.author}
          </cite>
          <div className="w-12 h-px bg-primary/30"></div>
        </div>
      </div>
    </Card>
  );
};