let content = document.getElementById("taskcontent")
let header = document.getElementById("header")
let noted = document.querySelectorAll(".note")

let stringzero = ""
let substring = ""
apiheader.forEach(apis => {
    stringzero += `
    <th colspan="${apis.colspan}" rowspan="${apis.rowspan}">${apis.main_header}
    </th>`
    if(apis.sub_header != null || apis.sub_header > 0)
    {
        apis.sub_header.forEach(subsapis=>{
            substring += `
            <th>
                ${subsapis.name}
            </th>
            `
        })
    }
});


stringheader = `
<tr>
${stringzero}
</tr>
<tr>
${substring}
</tr>
`

header.innerHTML = stringheader

let string = `
<tr>
<td>
    <div class="cell">Do it here</div>
</td>
<td>
    <div class="cell"><i class="fas fa-user"></i></div>
</td>
<td>
    <div class="cell">Main FrameWork</div>
</td>
<td>
    <div class="cell">Mush App</div>
</td>
<td class="priority medium">
    <div class="cell">Medium</div>
</td>
<td>
    <div class="cell">Sometimes..</div>
</td>
<td  class="progress stuck">
    <div class="cell">Stuck</div>
</td>
<td>
    <div class="cell">Have A Problem</div>
</td>
<td>
    <div class="cell"></div>
</td>
<td>
    <div class="cell">12 Juny 2020</div>
</td>
<td>
    <div class="cell">0 weeks 3 days</div>
</td>
<td>
    <div class="cell">15 Juny 2020</div>
</td>
</tr>
<tr>
<td>
    <div class="cell">Do it here</div>
</td>
<td>
    <div class="cell"><i class="fas fa-user"></i></div>
</td>
<td>
    <div class="cell">Modul Web</div>
</td>
<td>
    <div class="cell">Mush App</div>
</td>
<td class="priority medium">
    <div class="cell">Medium</div>
</td>
<td>
    <div class="note">Sometimes&nbsp;you&nbsp;need&nbsp;to&nbsp;solve&nbsp;aasdsdasdasdasdaasdasdsd.</div>
</td>
<td class="progress done">
    <div class="cell">On Progress</div>
</td>
<td>
    <div class="cell"></div>
</td>
<td>
    <div class="cell"></div>
</td>
<td>
    <div class="cell">12 Juny 2020</div>
</td>
<td>
    <div class="cell">0 weeks 3 days</div>
</td>
<td>
    <div class="cell">15 Juny 2020</div>
</td>
</tr>
`

content.innerHTML = string


