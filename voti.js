
const colIndexCFUs = 2;
const colIndexVoti = 5;

function parseVoto(voto) {
    return voto.toString().includes("L") ? 31 : parseInt(voto);
}

function getVotes()
{
    const table = document.getElementById('tableLibretto');
    const res = [];
    for (let i = 1; i < table.rows.length; i++)
    {
        voto = table.rows[i].cells[colIndexVoti].innerHTML.split("&nbsp;-&nbsp;", 2);
        if (voto[0] != "" && /^\d+L?$/.test(voto[0]))
            res.push([
                parseVoto(voto[0]),
                parseInt(table.rows[i].cells[colIndexCFUs].innerHTML),
            ]);
    }

    return res;
}

function sumVec(v) { return v.reduce((x, y) => x+y); }
function allVotes(votes) { return votes.map((v) => v[0]); }
function allCFUs(votes) { return votes.map((c) => c[1]); }

function mean(votes, spec = []) {
    let s = 0;

    for (let i = 0; i < votes.length; i++)
        s += votes[i][0] * votes[i][1];

    for (let i = 0; i < spec.length; i++)
        s += parseVoto(spec[i][0]) * spec[i][1];

    return s / (sumVec(allCFUs(votes.concat(spec))));
}

function currentMean() { return mean(getVotes()); }
function speculateVote(vote, CFU) { return mean(getVotes(), [[vote, CFU]]);}
function speculateVotes(votes) { return mean(getVotes(), votes);}

function laurea(mean) { return mean * 110 / 30; }

function speculateVotesAlert(spec = [])
{
    const m = currentMean();
    str = "Media corrente: " + m + "\n" +
        "Media di laurea corrente: " + laurea(m) + "\n";

    if (spec.length > 0)
    {
        const s = speculateVotes(spec);
        str += "Media possibile: " + s + "\n" +
            "Media possibile di laurea: " + laurea(s) + "\n";
    }

    alert(str);
}
function speculateVoteAlert(voto, CUF) { return speculateVotesAlert([[voto, CUF]]); }

speculateVotesAlert();
