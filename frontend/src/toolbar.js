// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                backgroundColor: '#f9fafb',
                padding: '12px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid #f3f4f6'
            }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='knowledgeBase' label='Knowledge' />
            </div>
        </div>
    );
};
