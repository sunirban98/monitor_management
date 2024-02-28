var vote = 0;
function sendToDB(event) {
    event.preventDefault();

    const studentname = event.target.studentname.value;
    const monitor = event.target.monitor.value;

    if (monitor === 'Yash') {
        vote = vote + 1;
        const body = {
            studentname, monitor, vote
        }
        usingPost(body);
    } else if (monitor === 'Prasad') {
        vote = -vote + 1;
        const body = {
            studentname, monitor, vote
        }
        usingPost(body);
    } else {
        vote = vote + 1;
        const body = {
            studentname, monitor, vote
        }
        usingPost(body);
    }
    console.log(monitor);
}

async function usingPost(body) {
    try {
        const res = await axios.post('https://crudcrud.com/api/1693493b6cbc45c1acc00381dcaaa222/postvote', body);
        console.log(res);
    } catch (er) {
        console.log(er);
    }
}