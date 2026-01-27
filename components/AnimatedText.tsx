
import React from 'react';

interface AnimatedTextProps {
    text: string;
    className?: string;
    stagger?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, stagger = 0.05 }) => {
    return (
        <span aria-label={text} role="heading" className={className}>
            {text.split('').map((char, index) => (
                <span
                    key={`${char}-${index}`}
                    className="animate-letter-up inline-block"
                    style={{ animationDelay: `${index * stagger}s` }}
                    aria-hidden="true"
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );
};

export default AnimatedText;
