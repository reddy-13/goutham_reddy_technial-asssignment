import { NODE_CONFIG } from './nodeConfig';

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '12px',
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '1px solid #eaecf0',
        boxShadow: '0 1px 3px rgba(16, 24, 40, 0.1)',
        color: '#344054',
        transition: 'all 0.2s ease',
        gap: '8px',
        padding: '8px'
      }}
      draggable
      onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 6px rgba(16, 24, 40, 0.1)'; }}
      onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(16, 24, 40, 0.1)'; }}
    >
      {/* Icon Placeholder */}
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        backgroundColor: '#f2f4f7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#475467'
      }}>
        {label.charAt(0)}
      </div>
      <span style={{ fontSize: '12px', fontWeight: '500' }}>{label}</span>
    </div>
  );
};
