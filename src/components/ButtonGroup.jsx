import React from 'react';

export default function ButtonGroup({ buttons, onClick, className, buttonClassName }) {
  return (
    <div className={className}>
      {buttons.map((button) => {
        // If href exists, render an anchor tag
        if (button.href) {
          return (
            <a
              key={button.id}
              href={button.href}
              target={button.target || "_blank"}
              rel="noopener noreferrer"
              className={buttonClassName}
              style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
            >
              {button.imageSrc && (
                <img
                  src={button.imageSrc}
                  alt={button.alt || ''}
                  style={{ width: '20px', height: '20px', marginRight: '8px', verticalAlign: 'middle' }}
                />
              )}
              {button.buttonLabel}
            </a>
          );
        }

        // Otherwise render a normal button
        return (
          <button
            key={button.id}
            className={buttonClassName}
            onClick={(e) => onClick(e, button.id)}
          >
            {button.imageSrc && (
              <img
                src={button.imageSrc}
                alt={button.alt || ''}
                style={{ width: '20px', height: '20px', marginRight: '8px', verticalAlign: 'middle' }}
              />
            )}
            {button.buttonLabel}
          </button>
        );
      })}
    </div>
  );
}
