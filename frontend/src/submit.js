// submit.js
import { useStore } from './store';
import { toast } from 'react-toastify';

export const SubmitButton = () => {
    const { nodes, edges } = useStore(state => ({
        nodes: state.nodes,
        edges: state.edges
    }));

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Display success toast with details
            toast.success(
                <div>
                    <strong>Pipeline Parsed!</strong><br />
                    Nodes: {data.num_nodes}<br />
                    Edges: {data.num_edges}<br />
                    DAG: {data.is_dag.toString()}
                </div>,
                { position: "top-right", autoClose: 5000 }
            );

        } catch (error) {
            console.error('Error submitting pipeline:', error);
            toast.error("Failed to submit pipeline. Please try again.", { position: "top-right" });
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={handleSubmit} style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                padding: '12px 24px',
                backgroundColor: '#4f46e5',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.3), 0 2px 4px -1px rgba(79, 70, 229, 0.1)',
                transition: 'all 0.2s',
                zIndex: 1000
            }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
                Submit Pipeline
            </button>
        </div>
    );
}
