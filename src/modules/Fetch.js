let fetchPost = async (data, action) => {
    const url = "http://localhost:8090/" + action
    let req = {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method : 'POST',
        body: JSON.stringify(data)
    }
    let res
    res = await fetch(url, req)
        .then(a => a.json())
        .then(a => res=a)
        .catch(err => console.error(err.stack))
    return res
}

export {
    fetchPost
}