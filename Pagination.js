

function paginate( pageNumber, pageSize ) {
    // Implementation of pagination logic
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return { startIndex, endIndex };
}

console.log(paginate(2, 10)); 