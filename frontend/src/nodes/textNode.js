// textNode.js

import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height
    }
  }, [currText]);

  // Handle variable detection
  useEffect(() => {
    const variableRegex = /{{([a-zA-Z_$][a-zA-Z0-9_$.]*)}}/g;
    const matches = [...currText.matchAll(variableRegex)].map(match => match[1]);
    const uniqueVariables = [...new Set(matches)]; // Unique variables only

    // Calculate positions for target handles
    const targetHandles = uniqueVariables.map((variable, index) => {
      const top = (index + 1) * (100 / (uniqueVariables.length + 1));
      return {
        type: 'target',
        position: Position.Left,
        id: `${id}-${variable}`,
        style: { top: `${top}%` }
      };
    });

    setHandles([
      ...targetHandles,
      { type: 'source', position: Position.Right, id: `${id}-output` }
    ]);
  }, [currText, id]);


  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      handles={handles}
      style={{ height: 'auto', minHeight: '100px' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ fontSize: '12px', fontWeight: '500', color: '#374151', textAlign: 'left' }}>
          Text:
        </label>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          style={{
            width: '100%',
            minHeight: '80px',
            boxSizing: 'border-box',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            padding: '8px',
            fontSize: '13px',
            fontFamily: 'Inter, sans-serif',
            resize: 'none',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#6366f1'}
          onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
        />
      </div>
    </BaseNode>
  );
}
