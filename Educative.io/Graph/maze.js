function numberOfPaths(n, corridors) {
    let graph = new Array(n + 1).fill(0).map(_ => []);
    for (const corridor of corridors) {
        let [room1, room2] = corridor;
        graph[room1].push(room2);
        graph[room2].push(room1);
    }
    console.log({ graph })
    // BFS - [room, room path count]
    let confScore = 0;
    let visitedRooms = new Array(n + 1).fill(false);
    let q = [[1, new Set().add(1)]];
    while (q.length) {
        let [room, roomPath] = q.shift();
        if (visitedRooms[room]) {
            if (roomPath.size === 3) console.log({ roomPath })
            if (roomPath.size === 3) confScore++;
            continue;
        }
        visitedRooms[room] = true;

        for (const adjRoom of graph[room]) {
            let adjRoomPath = new Set(roomPath).add(adjRoom);
            q.push([adjRoom, adjRoomPath]);
        }
    }
    return confScore;
}

console.log(numberOfPaths(5, [[1, 2], [5, 2], [4, 1], [2, 4], [3, 1], [3, 4]]))
