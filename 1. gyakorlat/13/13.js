const tombocske = [52,2,3,4,5,6,7,8,1,2,4,24,1,53,25,1,4,2,1,5,-2,42];

function belulvan(e,g)
{
return e.filter(elem => Math.abs(tombocske[(tombocske.indexOf(elem)+1)] - elem) < g && Math.abs((tombocske[(tombocske.indexOf(elem))] - tombocske[(tombocske.indexOf(elem)-1)])) < g );
}