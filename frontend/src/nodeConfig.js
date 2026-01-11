// nodeConfig.js
import { LuBrainCircuit, LuMessageSquare, LuFileText, LuArrowRight, LuDatabase, LuPlay } from "react-icons/lu";

export const NODE_CONFIG = {
    customInput: {
        label: 'Input',
        headerColor: '#f3f4f6', // Grey
        borderColor: '#e5e7eb',
        textColor: '#374151',
        icon: <LuPlay />,
    },
    customOutput: {
        label: 'Output',
        headerColor: '#fefce8', // Yellow
        borderColor: '#eab308',
        textColor: '#854d0e',
        icon: <LuArrowRight />,
    },
    llm: {
        label: 'LLM',
        headerColor: '#ede9fe', // Purple
        borderColor: '#7c3aed',
        textColor: '#5b21b6',
        icon: <LuBrainCircuit />,
    },
    text: {
        label: 'Text',
        headerColor: '#f3f4f6', // Grey
        borderColor: '#e5e7eb',
        textColor: '#374151',
        icon: <LuFileText />,
    },
    knowledgeBase: {
        label: 'Knowledge',
        headerColor: '#dbeafe', // Blue
        borderColor: '#2563eb',
        textColor: '#1e40af',
        icon: <LuDatabase />,
    },
};
