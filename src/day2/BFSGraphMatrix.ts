export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    //seen array
    const seen = new Array(graph.length).fill(false);

    //prev array
    const prev = new Array(graph.length).fill(-1);
    seen[source] = true;

    //queue array
    const q: number[] = [source];

    do {
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];

        for (let i = 0; i < graph.length; i++) {
            if (adjs[i] === 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
        seen[curr] = true;
    } while (q.length);

    if (prev[needle] === -1) {
        return null;
    }
    //build it backwards
    //
    let curr = needle;

    //out represents path from needle to source
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}
