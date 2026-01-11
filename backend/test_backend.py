import urllib.request
import json
import sys

def test_pipeline(nodes, edges, expected_dag):
    url = "http://localhost:8000/pipelines/parse"
    data = json.dumps({"nodes": nodes, "edges": edges}).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    
    try:
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode("utf-8"))
            print(f"Result: {result}")
            if result["is_dag"] == expected_dag:
                print("PASS")
            else:
                print(f"FAIL: Expected is_dag={expected_dag}, got {result['is_dag']}")
                sys.exit(1)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

print("Testing DAG...")
test_pipeline(
    [{"id": "1"}, {"id": "2"}, {"id": "3"}],
    [{"source": "1", "target": "2"}, {"source": "2", "target": "3"}],
    True
)

print("\nTesting Cycle...")
test_pipeline(
    [{"id": "1"}, {"id": "2"}],
    [{"source": "1", "target": "2"}, {"source": "2", "target": "1"}],
    False
)
