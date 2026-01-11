// knowledgeBaseNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const KnowledgeBaseNode = ({ id, data }) => {
    const [topK, setTopK] = useState(data?.topK || 3);
    const [kbName, setKbName] = useState(data?.kbName || 'default_kb');

    return (
        <BaseNode
            id={id}
            data={data}
            title="Knowledge Base"
            handles={[
                { type: 'target', position: Position.Left, id: `${id}-question` },
                { type: 'source', position: Position.Right, id: `${id}-chunks` }
            ]}
        >
            <label style={{ display: 'block', marginBottom: '8px' }}>
                <span style={{ display: 'block', marginBottom: '4px', fontSize: '12px', color: '#6b7280' }}>Knowledge Base:</span>
                <input
                    type="text"
                    value={kbName}
                    onChange={(e) => setKbName(e.target.value)}
                    style={{ width: '100%' }}
                />
            </label>
            <label style={{ display: 'block' }}>
                <span style={{ display: 'block', marginBottom: '4px', fontSize: '12px', color: '#6b7280' }}>Top K:</span>
                <input
                    type="number"
                    value={topK}
                    onChange={(e) => setTopK(e.target.value)}
                    style={{ width: '100%' }}
                />
            </label>
        </BaseNode>
    );
}
