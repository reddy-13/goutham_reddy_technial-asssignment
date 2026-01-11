// BaseNode.js

import { Handle, Position } from 'reactflow';

import { useStore } from '../store';

export const BaseNode = ({ id, data, title, children, handles = [], style = {}, type }) => {
    const removeNode = useStore((state) => state.removeNode);

    // Define node styles based on type (inferred from title or passed type)
    const isLLM = title === 'LLM' || title === 'OpenAI';
    const isOutput = title === 'Output';

    const headerColor = isLLM ? '#ede9fe' : isOutput ? '#fefce8' : '#f3f4f6'; // Purple, Yellow, Grey
    const borderColor = isLLM ? '#7c3aed' : isOutput ? '#eab308' : '#e5e7eb';
    const textColor = isLLM ? '#5b21b6' : isOutput ? '#854d0e' : '#374151';

    return (
        <div style={{
            width: 240,
            height: 'auto',
            border: `1px solid ${borderColor}`,
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            backgroundColor: '#fff',
            fontFamily: 'Inter, sans-serif',
            ...style
        }}>
            {handles.map((handle, index) => (
                <Handle
                    key={`${id}-handle-${index}`}
                    {...handle}
                    style={{
                        ...handle.style,
                        width: '10px',
                        height: '10px',
                        background: '#fff',
                        border: '2px solid #6b7280'
                    }}
                />
            ))}
            <div style={{
                padding: '10px 14px',
                backgroundColor: headerColor,
                borderBottom: `1px solid ${borderColor}`,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                {/* Icon Placeholder - simplistic circles/squares for now */}
                <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '4px',
                    backgroundColor: borderColor
                }}></div>
                <span style={{
                    color: textColor,
                    fontWeight: '600',
                    fontSize: '14px',
                    flexGrow: 1
                }}>{title}</span>

                {/* Delete Button */}
                <button
                    onClick={() => removeNode(id)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#6b7280',
                        transition: 'background 0.2s',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)';
                        e.currentTarget.style.color = '#ef4444'; // Red on hover
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#6b7280';
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {children}
            </div>
        </div>
    );
};
