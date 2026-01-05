import React from 'react';

type SectionWrapperProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

const SectionWrapper = ({ id, title, children, className }: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
