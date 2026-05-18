import { cn } from "@/lib/utils";

type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
  className?: string;
};

export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-5", className)}>
      {steps.map((step, index) => (
        <article
          className="quiet-panel p-6"
          key={`${step.title}-${index}`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/45 bg-white text-sm font-semibold text-laurel">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="mt-6 text-2xl leading-tight">{step.title}</h3>
          <p className="mt-3 text-sm text-deepBlue/70">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
