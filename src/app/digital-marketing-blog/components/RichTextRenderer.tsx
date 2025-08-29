import React from 'react';
import Image from 'next/image';

// Types for Strapi rich text content
interface RichTextChild {
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  type?: 'text' | 'link';
  url?: string;
  children?: RichTextChild[];
}

interface RichTextBlock {
  type: 'paragraph' | 'heading' | 'list' | 'list-item' | 'quote' | 'code' | 'image';
  level?: number;
  format?: 'ordered' | 'unordered';
  children?: RichTextChild[];
  image?: {
    url: string;
    name?: string;
  };
}

interface RichTextRendererProps {
  content: RichTextBlock[] | string;
  className?: string;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content, className = '' }) => {
  // Handle string content (fallback)
  if (typeof content === 'string') {
    return (
      <div className={`prose prose-lg max-w-none ${className}`}>
        <p className="text-lg leading-relaxed text-white">{content}</p>
      </div>
    );
  }

  // Handle array content (rich text)
  if (!Array.isArray(content)) {
    return null;
  }

  const renderChildren = (children: RichTextChild[]): React.ReactNode => {
    return children.map((child, index) => {
      // Handle links
      if (child.type === 'link' && child.url) {
        return (
          <a
            key={index}
            href={child.url}
            // target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            {child.children ? renderChildren(child.children) : child.text}
          </a>
        );
      }

      // Handle nested children
      if (child.children && child.children.length > 0) {
        return (
          <span key={index}>
            {renderChildren(child.children)}
          </span>
        );
      }

      // Handle text with formatting
      const text = child.text || '';
      let element: React.ReactNode = <span key={index}>{text}</span>;

      if (child.bold) {
        element = <strong key={index} className="font-extralight text-white">{text}</strong>;
      }
      if (child.italic) {
        element = <em key={index} className="italic">{element}</em>;
      }
      if (child.underline) {
        element = <u key={index}>{element}</u>;
      }
      if (child.strikethrough) {
        element = <s key={index}>{element}</s>;
      }
      if (child.code) {
        element = (
          <code key={index} className="bg-white px-1 py-0.5 rounded text-sm font-mono">
            {text}
          </code>
        );
      }

      return element;
    });
  };

  const renderBlock = (block: RichTextBlock, index: number): React.ReactNode => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p
            key={index}
            className="mb-4 text-lg leading-relaxed text-[#E0D9CD] tracking-[.3px]"
            style={{ lineHeight: '1.8' }}
          >
            {block.children ? renderChildren(block.children) : ''}
          </p>
        );

      case 'heading':
        const level = Math.min(Math.max(block.level || 1, 1), 6);
        const headingClasses = {
          1: 'md:text-5xl text-4xl font-bold mb-6 text-white',
          2: 'md:text-4xl text-3xl font-bold mb-5 text-white',
          3: 'md:text-3xl text-2xl font-bold mb-4 text-white',
          4: 'text-xl font-bold mb-3 text-white',
          5: 'text-lg font-bold mb-2 text-white',
          6: 'text-base font-bold mb-2 text-white',
        };
        
        const className = headingClasses[level as keyof typeof headingClasses];
        const content = block.children ? renderChildren(block.children) : '';
        
        switch (level) {
          case 1:
            return <p key={index} className={className}>{content}</p>;
          case 2:
            return <p key={index} className={className}>{content}</p>;
          case 3:
            return <p key={index} className={className}>{content}</p>;
          case 4:
            return <h4 key={index} className={className}>{content}</h4>;
          case 5:
            return <h5 key={index} className={className}>{content}</h5>;
          case 6:
            return <h6 key={index} className={className}>{content}</h6>;
          default:
            return <h1 key={index} className={className}>{content}</h1>;
        }

      case 'list':
        const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
        
        // Handle nested list items within the list block
        if (block.children && block.children.length > 0) {
          return (
            <ListTag 
              key={index} 
              className={`mb-4 space-y-2 ${block.format === 'ordered' ? 'list-decimal' : 'list-disc'}`}
              style={{ 
                paddingLeft: '2rem',
                listStylePosition: 'outside',
                listStyleType: block.format === 'ordered' ? 'decimal' : 'disc'
              }}
            >
              {block.children.map((child, childIndex) => {
                // If child has children, it's likely a list item container
                if (child.children) {
                  return (
                    <li 
                      key={childIndex} 
                      className="text-lg leading-relaxed text-white"
                      style={{ 
                        display: 'list-item',
                        listStyleType: 'inherit'
                      }}
                    >
                      {renderChildren(child.children)}
                    </li>
                  );
                }
                // If child has text, it's a direct text item
                else if (child.text) {
                  return (
                    <li 
                      key={childIndex} 
                      className="text-lg leading-relaxed text-white"
                      style={{ 
                        display: 'list-item',
                        listStyleType: 'inherit'
                      }}
                    >
                      {child.text}
                    </li>
                  );
                }
                return null;
              })}
            </ListTag>
          );
        }
        
        // Fallback for empty lists
        return (
          <ListTag 
            key={index} 
            className={`mb-4 ${block.format === 'ordered' ? 'list-decimal' : 'list-disc'}`}
            style={{ 
              paddingLeft: '2rem',
              listStylePosition: 'outside'
            }}
          >
            {block.children ? renderChildren(block.children) : ''}
          </ListTag>
        );

      case 'list-item':
        return (
          <li 
            key={index} 
            className="text-lg leading-relaxed text-white mb-2"
            style={{ 
              display: 'list-item',
              listStyleType: 'inherit'
            }}
          >
            {block.children ? renderChildren(block.children) : ''}
          </li>
        );

      case 'quote':
        return (
          <blockquote
            key={index}
            className="border-l-4 border-blue-500 pl-4 italic my-6 text-lg text-gray-100"
          >
            {block.children ? renderChildren(block.children) : ''}
          </blockquote>
        );

      case 'code':
        return (
          <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
            <code className="text-sm font-mono">
              {block.children ? renderChildren(block.children) : ''}
            </code>
          </pre>
        );

      case 'image':
        if (block.image?.url) {
          return (
            <div key={index} className="my-6">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={block.image.url}
                  alt={block.image.name || 'Article image'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              {block.image.name && (
                <p className="text-sm text-gray-100 text-center mt-2 italic">
                  {block.image.name}
                </p>
              )}
            </div>
          );
        }
        return null;

      default:
        return (
          <div key={index} className="mb-4">
            {block.children ? renderChildren(block.children) : ''}
          </div>
        );
    }
  };

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {content.map((block, index) => renderBlock(block, index))}
    </div>
  );
};

export default RichTextRenderer;