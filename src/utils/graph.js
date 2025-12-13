import { scenesData } from "./scenesData";

// Gera um grafo bidirecional a partir dos hotspots
export function buildGraph() {
  const graph = {};

  for (const sceneId in scenesData) {
    graph[sceneId] = [];

    const hs = scenesData[sceneId].hotspot || [];
    hs.forEach((h) => {
      if (h.targetScene) graph[sceneId].push(h.targetScene);
    });
  }

  return graph;
}

// BFS para achar o caminho mais curto
export function findShortestPath(graph, start, goal) {
  const queue = [start];
  const visited = new Set([start]);
  const parent = { [start]: null };

  while (queue.length) {
    const node = queue.shift();
    if (node === goal) {
      const path = [];
      let cur = goal;
      while (cur) {
        path.unshift(cur);
        cur = parent[cur];
      }
      return path;
    }
    for (const n of graph[node] || []) {
      if (!visited.has(n)) {
        visited.add(n);
        parent[n] = node;
        queue.push(n);
      }
    }
  }

  return null;
}
